import React, { PureComponent, Fragment } from 'react';
import { Button, message } from 'antd';
import { formatMessage, FormattedMessage } from 'umi/locale';
import { queryRandomNumber } from '@/services/sample';

// 由于 props 层级不深，使用了 PureComponent 而没有使用 Component
class DvaSolution extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      submitting: false,
      result: 0,
    };
  }

  // 点击按钮时触发的方法，修改 state 并直接发起请求。
  handleClick = () => {
    this.setState({
      submitting: true,
    });
    queryRandomNumber().then(res => {
      message.success(
        `ReactSolution: ${formatMessage({
          id: 'messages.common.submit.success',
        })}`
      );
      this.setState({ submitting: false, result: res.result });
    });
  };

  render() {
    const { result, submitting } = this.state;
    return (
      <Fragment>
        <h2>
          {formatMessage({ id: 'app.sample.simpleflow.responsenumber' })}: {result}
        </h2>
        <Button loading={submitting} onClick={this.handleClick}>
          <FormattedMessage id="app.sample.simpleflow.submit" />
        </Button>
      </Fragment>
    );
  }
}

export default DvaSolution;
