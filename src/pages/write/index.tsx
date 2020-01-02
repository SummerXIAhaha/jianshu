import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

interface Props {
  login: boolean
}

class Write extends Component<Props> {

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