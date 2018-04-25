import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import MonthList from './MonthList'
import RoomList from './RoomList'
import * as pageActions from '../action'

class App extends Component {
  static propTypes = {
    
  }

  

  render(){
    return (
      <div className="calendar">
        <MonthList />
        <RoomList />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    calendar: state.calendar.calendar,
    busy: state.busy.employment
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)