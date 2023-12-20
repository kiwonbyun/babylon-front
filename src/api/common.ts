import axios from 'axios';
import client from './client';
import { ErrorReportData } from '@/types/commonApi';

export const errorReport = (data: ErrorReportData) => {
  return client.post('/common/error', data);
};
