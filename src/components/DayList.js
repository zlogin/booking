import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Day from './Day'

class DayList extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div className="room__day">
                <Day />
            </div>
        )
    }
}

export default DayList