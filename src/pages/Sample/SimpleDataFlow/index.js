import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import { Button } from 'antd';

@connect(({ simpleflow, loading }) => ({
  simpleflow,
  submitting: loading.effects['simpleflow/submitRandomNumberRequest'],
}))
class SimpleDataFlow extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { dispatch } = this.props;
    dispatch({
      type: 'simpleflow/submitRandomNumberRequest',
    });
  }

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
