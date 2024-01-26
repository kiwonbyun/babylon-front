export interface ErrorReportData {
  name: string;
  email: string;
  content: string;
}

export interface CustomError {
  response?: {
    data: { message?: string; error?: string; statusCode?: number };
  };
}

export interface CustomAxiosError {
  message?: string;
  error?: string;
  statusCode?: number;
}

export interface Banner {
  link?: string;
  bannerImage: string;
  id: number;
  blurHash?: string;
}

export const enum EnumTheme {
  BLACK = 'black',
  WHITE = 'white',
}
