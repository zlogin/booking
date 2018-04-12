import React, { Component } from 'react'

class App extends Component {
    render(){
        return(
            <div className='main'>
                <h1>Бронирование переговорок</h1>
                <div className="calendar">
                    <div className="calednar__date">
                        <div className="calendar__month">
                            <ul className="month">
                                <li className="month__name">Январь</li>
                                <li className="month__name">Февраль</li>
                                <li className="month__name">Март</li>
                            </ul>
                            <div className="calendar__day">
                                <ul className="day">
                                    <li className="day__name">1 Понедельник</li>
                                    <li className="day__name">2 Вторник</li>
                                    <li className="day__name">3 Среда</li>
                                    <li className="day__name">4 Четверг</li>
                                    <li className="day__name">5 Пятница</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="calendar__place">
                        <div className="place__name">
                            <p>Зеленая
                                <span className="place_desc">(до 5 персон)</span>
                            </p>
                        </div>
                        <div className="place__time">
                            <ul className="time">
                                <li className="time__hour">09:00</li>
                                <li className="time__hour">10:00</li>
                                <li className="time__hour">11:00</li>
                                <li className="time__hour">12:00</li>
                                <li className="time__hour">13:00</li>
                                <li className="time__hour">14:00</li>
                                <li className="time__hour">15:00</li>
                                <li className="time__hour">16:00</li>
                                <li className="time__hour">17:00</li>
                                <li className="time__hour">18:00</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App