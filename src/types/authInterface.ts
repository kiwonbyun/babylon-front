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

export type TokenUser = {
  email: string;
  sub: number;
  type: string;
  iat: number;
  exp: number;
  nickname: string;
  profileImage: string | null;
};
export type LoginUser = {
  id: number;
  email: string;
  nickname: string;
  role: string;
  profileImage: string;
};
