import axios from 'axios';
import Cookie from 'js-cookie';
// 인스턴스를 생성할때 config 기본값 설정하기
const client = axios.create();

client.defaults.baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8000'
    : 'https://babyloninspi.com/api';
client.defaults.withCredentials = true;

client.interceptors.request.use((config) => {
  const accessToken = Cookie.get('accessToken');
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export default client;
