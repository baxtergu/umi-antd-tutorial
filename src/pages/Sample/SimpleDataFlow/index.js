import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import { Button } from 'antd';

@connect(
  /**
   *  装饰器的第一个参数为 mapStateToProps 函数，将指定的 dva.model 中的 state 与组件建立“连接”，在组件内可以通过 props 的方式直接访问这些对象，
   *  另外 mapDispatchToProps 由 dva 框架内部自动注入了，不需要手动处理。
   *
   *  @param {object} simpleflow - 自定义的 model
   *  @param {object} loading - 由 dva-loading 插件提供的 model, 在 effects 执行前后会改变状态
   */
  ({ simpleflow, loading }) => ({
    simpleflow,
    submitting: loading.effects['simpleflow/submitRandomNumberRequest'],
  })
)
// 由于 props 层级不深，使用了 PureComponent 而没有使用 Component
class SimpleDataFlow extends PureComponent {
  // 点击按钮时触发的方法，只做 dispatch 操作，将副作用交由 redux-saga 处理。
  handleClick = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'simpleflow/submitRandomNumberRequest',
    });
  };

  render() {
    const { simpleflow, submitting } = this.props;
    return (
      <Fragment>
        <h2>{simpleflow.result}</h2>
        <Button loading={submitting} onClick={this.handleClick}>
          发起请求
        </Button>
      </Fragment>
    );
  }
}

export default SimpleDataFlow;
