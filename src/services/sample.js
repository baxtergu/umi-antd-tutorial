import request from '@/utils/request';

export async function queryRandomNumber() {
  return request('/api/sample/randomNumber');
}

export default null;
