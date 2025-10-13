export enum Role {
  admin = 'admin',
  owner = 'owner',
  creator = 'creator',
  member = 'member',
  guest = 'guest',
}

export const AllAdminRoles = [Role.admin, Role.owner, Role.creator];

export const AllMemberRoles = [
  Role.admin,
  Role.owner,
  Role.creator,
  Role.member,
];

export const AllRoles = [
  Role.admin,
  Role.owner,
  Role.creator,
  Role.member,
  Role.guest,
];
