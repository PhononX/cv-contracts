const TSJ = require('typescript-json-schema');
const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const outputDir = 'src/schemas';
const schemaName = 'Schema';
const filesToGenerateSchemasDir = [path.resolve(__dirname, '../interfaces')];

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const settings = {
  required: true,
  noExtraProps: true,
  strictNullChecks: true,
};

const compilerOptions = {
  strictNullChecks: true,
};

// List of dirs with files
const modelFiles = filesToGenerateSchemasDir
  .map((dir) => {
    return fs.readdirSync(dir).map((file) => path.resolve(dir, file));
  })
  .flat(1)
  .filter((file) => file.endsWith('.ts') && !file.endsWith('index.ts'));
const filePaths = modelFiles.map((file) => path.resolve(file));

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
  // For each File generate all the schemas.
  modelFiles.forEach((file) => {
    const filePath = path.resolve(file);
    const interfaceNames = extractInterfaceNames(filePath);
    allInterfaces.push(...interfaceNames);

    interfaceNames.forEach((interfaceName) => {
      const schema = TSJ.generateSchema(program, interfaceName, settings);
      if (!schema) {
        return;
      }

      const schemaString = JSON.stringify(schema, null, 2);
      const tsSchemaString = `export const ${interfaceName}${schemaName} = ${schemaString} as const;`;

      // Create an enum with all keys from the interface
      const allKeys = Object.keys(schema.properties);
      let enumString = `export enum ${interfaceName}Keys {\n`;
      allKeys.forEach((key) => {
        enumString += `   ${key} = '${key}',\n`;
      });
      enumString += `}`;

      fs.writeFileSync(
        path.resolve(outputDir, `${interfaceName}${schemaName}.ts`),
        `${tsSchemaString}\n\n${enumString}`,
      );
    });
  });

  // Create index file having all the schemas exported
  if (allInterfaces?.length) {
    fs.writeFileSync(
      path.resolve(outputDir, `index.ts`),
      allInterfaces
        ?.map(
          (interfaceName) => `export * from './${interfaceName}${schemaName}';`,
        )
        .join('\n'),
    );
  }
};

generateSchemaFiles();
