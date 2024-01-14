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

export type User = {
  email: string;
  sub: number;
  type: string;
  iat: number;
  exp: number;
};
