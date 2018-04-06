import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    return <div>{JSON.stringify(this.props)}</div>;
  }
}

const mapStateToProps = state => ({
  firebase: state,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
