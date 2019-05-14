import { message } from 'antd';
import { queryRandomNumber } from '@/services/sample';

export default {
  namespace: 'simpleflow',

  state: {
    submitting: false,
    result: 0,
  },

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

  reducers: {
    saveRandomNumber(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
