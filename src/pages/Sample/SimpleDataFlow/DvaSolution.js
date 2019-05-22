import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import { formatMessage, FormattedMessage } from 'umi/locale';
import PropTypes from 'prop-types';

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
class DvaSolution extends PureComponent {
  // 定义组件的静态属性 propTypes，用于 props 对象中第一层对象使用 'prop-types' 进行运行时类型检测
  // 一般用于纯展示组件
  static propTypes = {
    simpleflow: PropTypes.object.isRequired,
    submitting: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
  };

  // 组件的 defaultProps 属性用作当 props 中不存在指定的属性时，用这个属性来替代
  // 以静态属性方式来定义
  static defaultProps = {
    submitting: false,
  };

  // 点击按钮时触发的方法，只做 dispatch 操作，将副作用交由 redux-saga 处理。
  handleClick = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'simpleflow/submitRandomNumberRequest',
    });
  };

  render() {
    const { simpleflow, submitting = false } = this.props;
    return (
      <Fragment>
        <h2>
          {formatMessage({ id: 'app.sample.simpleflow.responsenumber' })}: {simpleflow.result}
        </h2>
        <Button loading={submitting} onClick={this.handleClick}>
          <FormattedMessage id="app.sample.simpleflow.submit" />
        </Button>
      </Fragment>
    );
  }
}

export default DvaSolution;
