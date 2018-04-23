import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Room from './Room'

class RoomList extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div className="calendar__room">
                <Room />
            </div>
        )
    }
}

export default RoomList