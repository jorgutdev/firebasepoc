import React from "react";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import { withFirebase, isLoaded, isEmpty } from "react-redux-firebase";

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.firebase);
    return <div>{JSON.stringify(this.props)}</div>;
  }
}

const mapStateToProps = state => ({
  firebase: state
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch)
});

export default compose(
  withFirebase([
    "" // { path: '/todos' } // object notation
  ]),
  connect(mapStateToProps, mapDispatchToProps)
)(Main);
