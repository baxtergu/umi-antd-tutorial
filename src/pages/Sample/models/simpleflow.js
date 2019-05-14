import { message } from 'antd';
import { queryRandomNumber } from '@/services/sample';

export default {
  // 保证全局唯一的 dva.model 命名空间，dispatch 时的前缀
  namespace: 'simpleflow',
  // model 的初始 state
  state: {
    submitting: false,
    result: 0,
  },
  // redux-saga 中的副作用 effects，生成器写法。
  effects: {
    *submitRandomNumberRequest(_, { call, put }) {
      const result = yield call(queryRandomNumber);
      message.success('提交成功');
      yield put({
        type: 'saveRandomNumber',
        payload: result,
      });
    },
  },
  // redux-saga 中的 reducer，作用仅仅是将传入的 state 和 payload 进行合并并返回，注意尽量使用对象展开符来生成新的对象而不是传入 payload 对象的引用，保持函数的“纯”。
  reducers: {
    saveRandomNumber(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
