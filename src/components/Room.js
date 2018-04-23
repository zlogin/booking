import React, { Component } from 'react'
import PropTypes from 'prop-types'

import DayList from './DayList'

class Room extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div className="room action__carousel">
                <i className="action action__prev"></i>
                <div className="room__detail">
                    <div className="room__title">
                        <div className="room__title_text">Зеленая комната</div>
                        <div className="room__title_descr">( до 5 персон )</div>
                    </div>
                    <DayList />
                </div>
                <i className="action action__next"></i>
            </div>
        )
    }
}

export default Room 