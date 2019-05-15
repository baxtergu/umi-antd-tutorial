import React, { PureComponent } from 'react';
import { Row, Col, Card } from 'antd';
import ReactSolution from './ReactSolution';
import DvaSolution from './DvaSolution';

class SimpleDataFlow extends PureComponent {
  render() {
    return (
      <Row gutter={16}>
        <Col span={12}>
          <Card title="React Solution" bordered={false}>
            <ReactSolution />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Dva Solution" bordered={false}>
            <DvaSolution />
          </Card>
        </Col>
      </Row>
    );
  }
}

export default SimpleDataFlow;
