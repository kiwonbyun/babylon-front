export enum RolesEnum {
  USER = 'user',
  ADMIN = 'admin',
}

export type SignupDataType = {
  email: string;
  nickname: string;
  password: string;
  role: RolesEnum;
};
