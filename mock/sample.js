import { color16 } from '@/utils/sample';

// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  'GET /api/sample/randomNumber': (req, res) => {
    setTimeout(() => {
      res.send({
        result: Math.floor(Math.random() * 1000),
      });
    }, 1000);
  },
  'GET /api/sample/randomColor': (req, res) => {
    setTimeout(() => {
      res.send(color16());
    }, 100);
  },
};
