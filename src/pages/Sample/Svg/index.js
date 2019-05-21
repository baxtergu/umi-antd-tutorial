import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, Button } from 'antd';
import { formatMessage } from 'umi/locale';
import { connect } from 'dva';
import SvgComponent from './SvgComponent';
import { ReactComponent as ExampleSvg } from './example.svg';

@connect(
  /**
   *  装饰器的第一个参数为 mapStateToProps 函数，将指定的 dva.model 中的 state 与组件建立“连接”，在组件内可以通过 props 的方式直接访问这些对象，
   *  另外 mapDispatchToProps 由 dva 框架内部自动注入了，不需要手动处理。
   *
   *  @param {object} simpleflow - 自定义的 model
   *  @param {object} loading - 由 dva-loading 插件提供的 model, 在 effects 执行前后会改变状态
   */
  ({ simplesvg, loading }) => ({
    simplesvg,
    submitting: loading.effects['simplesvg/submitRandomColorsRequest'],
  })
)
class SimpleSvg extends PureComponent {
  static propTypes = {
    simplesvg: PropTypes.object.isRequired,
    submitting: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    submitting: false,
  };

  handleClick = () => {
    const { dispatch } = this.props;
    dispatch({ type: 'simplesvg/submitRandomColorsRequest' });
  };

  render() {
    const { simplesvg, submitting } = this.props;
    return (
      <Row gutter={16}>
        <Col span={12}>
          <Card
            title={formatMessage({
              id: 'app.sample.svg.mutate',
            })}
            extra={
              <Button type="primary" size="small" onClick={this.handleClick} loading={submitting}>
                {formatMessage({
                  id: 'app.sample.svg.generaterandomcolor',
                })}
              </Button>
            }
            bordered={false}
          >
            <SvgComponent {...simplesvg} />
          </Card>
        </Col>
        <Col span={12}>
          <Card
            title={formatMessage({
              id: 'app.sample.svg.origin',
            })}
            bordered={false}
          >
            <ExampleSvg />
          </Card>
        </Col>
      </Row>
    );
  }
}

export default SimpleSvg;
