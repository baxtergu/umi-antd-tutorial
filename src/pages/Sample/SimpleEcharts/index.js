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
  }

  componentDidMount() {
    const {
      simplecharts: { weeklyData },
      dispatch,
    } = this.props;
    this.echartsRenderer(weeklyData);
    setInterval(() => {
      dispatch({ type: 'simplecharts/submitRandomNumbersRequest', payload: 7 });
    });
  }

  componentDidUpdate() {
    this.echartsRenderer(); // props 改变后重新渲染
  }

  echartsRenderer = () => {
    const {
      simplecharts: { weeklyData },
    } = this.props;
    const myChart = echarts.init(this.echartsElement);

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
    myChart.setOption(option, true);
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
