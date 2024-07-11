const TSJ = require('typescript-json-schema');
const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const outputDir = 'src/schemas';
const schemaName = 'Schema';
const filesToGenerateSchemasDir = [path.resolve(__dirname, '../interfaces')];

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const settings = {
  required: true,
  noExtraProps: true,
  strictNullChecks: true,
};

const compilerOptions = {
  strictNullChecks: true,
};

const getAllFiles = (dir, basePath) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = entries.flatMap((entry) => {
    const entryPath = path.resolve(dir, entry.name);
    const relativePath = basePath
      ? path.relative(basePath, entryPath)
      : entry.name;
    if (entry.isDirectory()) {
      return getAllFiles(entryPath, basePath || dir);
    } else if (entry.name.endsWith('.ts') && !entry.name.endsWith('index.ts')) {
      return { fullPath: entryPath, relativePath };
    } else {
      return [];
    }
  });
  return files;
};

const modelFiles = getAllFiles(filesToGenerateSchemasDir[0]);

const filePaths = modelFiles.map((file) => path.resolve(file.fullPath));

// Create a single program for all model files
const program = TSJ.getProgramFromFiles(filePaths, compilerOptions);

// Get the interfaces name from a file
const extractInterfaceNames = (filePath) => {
  const sourceFile = ts.createSourceFile(
    filePath,
    fs.readFileSync(filePath).toString(),
    ts.ScriptTarget.Latest,
    true,
  );

  const interfaceNames = [];
  const visit = (node) => {
    if (ts.isInterfaceDeclaration(node)) {
      interfaceNames.push(node.name.text);
    }
    ts.forEachChild(node, visit);
  };

  ts.forEachChild(sourceFile, visit);
  return interfaceNames;
};

const generateSchemaFiles = () => {
  console.log('📢 Start generating schema files...');
  const allInterfaces = [];
  const filesByDirectory = {};

  modelFiles.forEach(({ fullPath, relativePath }) => {
    const interfaceNames = extractInterfaceNames(fullPath);
    allInterfaces.push(...interfaceNames);

    interfaceNames.forEach((interfaceName) => {
      const schema = TSJ.generateSchema(program, interfaceName, settings);
      if (!schema) return;

      const schemaString = JSON.stringify(schema, null, 2);
      const tsSchemaString = `export const ${interfaceName}${schemaName} = ${schemaString};`;

      const allKeys = Object.keys(schema.properties);
      let enumString = `export enum ${interfaceName}Keys {\n`;
      allKeys.forEach((key) => (enumString += `   ${key} = '${key}',\n`));
      enumString += `}`;

      const outputFilePath = path.resolve(
        outputDir,
        path.dirname(relativePath),
        `${interfaceName}${schemaName}.ts`,
      );
      // Ensure directory exists
      fs.mkdirSync(path.dirname(outputFilePath), { recursive: true });

      fs.writeFileSync(outputFilePath, `${tsSchemaString}\n\n${enumString}`);

      // Group files by their directory
      const dir = path.dirname(outputFilePath);
      if (!filesByDirectory[dir]) {
        filesByDirectory[dir] = [];
      }
      filesByDirectory[dir].push(path.basename(outputFilePath));
    });
  });

  // Create index file having all the schemas exported
  // Create index files
  Object.entries(filesByDirectory).forEach(([dir, files]) => {
    const exportStatements = files
      .map((file) => `export * from './${path.basename(file, '.ts')}';`)
      .join('\n');
    fs.writeFileSync(path.resolve(dir, 'index.ts'), exportStatements);
  });
  // if (allInterfaces?.length) {
  //   fs.writeFileSync(
  //     path.resolve(outputDir, `index.ts`),
  //     allInterfaces
  //       ?.map(
  //         (interfaceName) => `export * from './${interfaceName}${schemaName}';`,
  //       )
  //       .join('\n'),
  //   );
  // }
};

generateSchemaFiles();
