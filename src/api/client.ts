import axios from 'axios';
import Cookie from 'js-cookie';
// 인스턴스를 생성할때 config 기본값 설정하기
const client = axios.create();

// 인스턴스를 만든 후 기본값 변경하기
client.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_URL;
client.defaults.withCredentials = true;

client.interceptors.request.use((config) => {
  const accessToken = Cookie.get('accessToken');
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export default client;
