/**
 * services 目录下的文件用于 api 请求，请求路径默认加以 api 前缀，便于本地 mock 及线上部署时的反向代理规则配置。
 */
import request from '@/utils/request';

export async function queryRandomNumber() {
  return request('/api/sample/randomNumber');
}

export default null;
