import { message } from 'antd';
import { formatMessage } from 'umi/locale';
import { queryRandomNumbers } from '@/services/sample';

export default {
  // 保证全局唯一的 dva.model 命名空间，dispatch 时的前缀
  namespace: 'simplecharts',
  // model 的初始 state
  state: {
    weeklyData: {
      Mon: 0,
      Tue: 0,
      Wed: 0,
      Thu: 0,
      Fri: 0,
      Sat: 0,
      Sun: 0,
    },
  },
  effects: {
    // TODO
    *submitRandomNumbersRequest({ payload }, { call, put }) {
      const numbers = yield call(queryRandomNumbers, payload);
      message.success(
        `SimpleEcharts: ${formatMessage({
          id: 'messages.common.submit.success',
        })}`
      );
      yield put({
        type: 'saveRandomNumbers',
        payload: numbers,
      });
    },
  },
  reducers: {
    saveRandomNumbers(state, { payload }) {
      const newWeeklyData = {};

      // eslint-disable-next-line array-callback-return
      Object.keys(state.weeklyData).map((key, idx) => {
        newWeeklyData[key] = payload.numbers[idx];
      });

      return {
        ...state,
        weeklyData: {
          ...newWeeklyData,
        },
      };
    },
  },
};
