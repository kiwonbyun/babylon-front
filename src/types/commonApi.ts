export interface ErrorReportData {
  name: string;
  email: string;
  content: string;
}

export interface CustomError {
  message: string;
  error: string;
  statusCode: number;
}

export interface Banner {
  link?: string;
  bannerImage: string;
  id: number;
  blurHash?: string;
}
