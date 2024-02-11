import axios from 'axios';
import Cookie from 'js-cookie';
// 인스턴스를 생성할때 config 기본값 설정하기
const client = axios.create();

client.defaults.baseURL =
  'http://ec2-43-200-191-3.ap-northeast-2.compute.amazonaws.com:8000';
// 'http://localhost:8000';
client.defaults.withCredentials = true;

client.interceptors.request.use((config) => {
  const accessToken = Cookie.get('accessToken');
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export default client;
