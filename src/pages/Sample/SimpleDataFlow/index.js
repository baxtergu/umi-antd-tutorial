import React, { PureComponent } from 'react';
import { Row, Col, Card } from 'antd';
import { formatMessage } from 'umi/locale';
import ReactSolution from './ReactSolution';
import DvaSolution from './DvaSolution';

class SimpleDataFlow extends PureComponent {
  render() {
    return (
      <Row gutter={16}>
        <Col span={12}>
          <Card
            title={formatMessage({
              id: 'app.sample.simpleflow.react.cardtitle',
            })}
            bordered={false}
          >
            <ReactSolution />
          </Card>
        </Col>
        <Col span={12}>
          <Card
            title={formatMessage({
              id: 'app.sample.simpleflow.dva.cardtitle',
            })}
            bordered={false}
          >
            <DvaSolution />
          </Card>
        </Col>
      </Row>
    );
  }
}

export default SimpleDataFlow;
