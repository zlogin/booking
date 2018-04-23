import React, { Component } from 'react'
import PropTypes from 'prop-types'

import RoomList from './RoomList'

class App extends Component {
    static propTypes = {

    }
    render(){
        return(
            <div className="calendar">
                <div className="calendar__month action__carousel">
                    <i className="action action__prev" ></i>
                    <div className="month__detail">
                        <span className="month__title">Апрель</span>
                    </div>
                    <i className="action action__next"></i>
                </div>
                <RoomList />
            </div>
        )
    }
}

export default App