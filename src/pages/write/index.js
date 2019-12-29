import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class Write extends Component {

  render() {
    return (
      this.props.login ? <div>write</div> : <Redirect to='/loginIn'></Redirect>
    )
  }
}

const mapState = (state) => ({
  login: state.getIn(['login', 'login'])
})

export default connect(mapState, null)(Write);