import axios from 'axios';

// 인스턴스를 생성할때 config 기본값 설정하기
const client = axios.create();

// 인스턴스를 만든 후 기본값 변경하기
client.defaults.baseURL = 'http://localhost:8000';
client.defaults.withCredentials = true;

export default client;
