import axios from 'axios';
import client from './client';
import { ErrorReportData } from './interfaces';

export const errorReport = (data: ErrorReportData) => {
  return axios.post('http://localhost:8000/common/error', data);
};
