import axios from 'axios';
import client from './client';
import { ErrorReportData } from '@/types/commonInterface';

export const errorReport = (data: ErrorReportData) => {
  return client.post('/common/error', data);
};

export const getBanner = () => client.get('/banners').then((res) => res.data);
