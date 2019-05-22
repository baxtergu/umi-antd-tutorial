import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { connect } from 'dva';
import echarts from 'echarts';

@connect(({ simplecharts, loading }) => ({
  simplecharts,
  submitting: loading.effects['simpleflow/submitRandomNumberRequest'],
}))
class SimpleEcharts extends Component {
  constructor(props) {
    super(props);
    this.echartsElement = null; // echarts div element
    this.echartsInstance = null; // echarts instance
    this.timer = null;
  }

  componentDidMount() {
    const { dispatch } = this.props;
    // 初始化echarts实例
    this.echartsInstance = echarts.init(this.echartsElement);
    this.echartsInstance.showLoading();

    // 以5秒间隔启动定时器
    this.timer = setInterval(() => {
      this.echartsInstance.showLoading();
      dispatch({ type: 'simplecharts/submitRandomNumbersRequest', payload: 7 });
    }, 5000);
  }

  componentDidUpdate() {
    // props 改变后重新渲染
    this.echartsRenderer();
  }

  componentWillUnmount() {
    // 组件卸载时清除定时器
    // TODO: 但是已发出的异步effects无法清除,需要使用saga的方式 cancel effects,后续再实现
    clearInterval(this.timer);
  }

  echartsRenderer = () => {
    const {
      simplecharts: { weeklyData },
    } = this.props;

    const option = {
      xAxis: {
        type: 'category',
        data: Object.keys(weeklyData),
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: Object.keys(weeklyData).map(key => weeklyData[key]),
          type: 'bar',
        },
      ],
    };
    this.echartsInstance.setOption(option, true);
    this.echartsInstance.hideLoading();
  };

  render() {
    return (
      <Row gutter={16}>
        <Col span={24}>
          <Card title="简单Echarts写法" bordered={false}>
            <div
              style={{ height: '500px' }}
              ref={e => {
                this.echartsElement = e;
              }}
            />
          </Card>
        </Col>
      </Row>
    );
  }
}

export default SimpleEcharts;
