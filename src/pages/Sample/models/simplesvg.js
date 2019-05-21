import { message } from 'antd';
import { formatMessage } from 'umi/locale';
import { queryRandomColors } from '@/services/sample';

export default {
  // 保证全局唯一的 dva.model 命名空间，dispatch 时的前缀
  namespace: 'simplesvg',
  // model 的初始 state
  state: {
    backgroundColor: '#FFFFFF',
    lineColor: '#000000',
    circleFillColor: '#F8D7CD',
    circleLineColor: '#000000',
    titleText: '标题文字',
    legendText: '图例文字示例',
  },
  // redux-saga 中的副作用 effects，生成器写法。
  effects: {
    *submitRandomColorsRequest(_, { call, put }) {
      const colors = yield call(queryRandomColors);
      message.success(
        `SimpleSvg: ${formatMessage({
          id: 'messages.common.submit.success',
        })}`
      );
      yield put({
        type: 'saveRandomColors',
        payload: colors,
      });
    },
  },
  // redux-saga 中的 reducer，作用仅仅是将传入的 state 和 payload 进行合并并返回，注意尽量使用对象展开符来生成新的对象而不是传入 payload 对象的引用，保持函数的“纯”。
  reducers: {
    saveRandomColors(state, { payload }) {
      return {
        ...state,
        backgroundColor: payload[0],
        lineColor: payload[1],
        circleFillColor: payload[2],
        circleLineColor: payload[3],
      };
    },
  },
};
