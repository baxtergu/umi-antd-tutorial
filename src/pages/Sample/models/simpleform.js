import { message } from 'antd';
import { formatMessage } from 'umi/locale';
import { queryRandomNumber } from '@/services/sample';

export default {
  // 保证全局唯一的 dva.model 命名空间，dispatch 时的前缀
  namespace: 'simpleform',
  // model 的初始 state
  state: {},
  // redux-saga 中的副作用 effects，生成器写法。
  effects: {
    // TODO
  },
  // redux-saga 中的 reducer，作用仅仅是将传入的 state 和 payload 进行合并并返回，注意尽量使用对象展开符来生成新的对象而不是传入 payload 对象的引用，保持函数的“纯”。
  reducers: {
    // TODO
  },
};
