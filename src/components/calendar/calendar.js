import React from 'react'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import styleFix from './calendarFix.css'

import { Calendar , momentLocalizer } from 'react-big-calendar'

import moment from 'moment'
import Modal from '@material-ui/core/Modal';
import { connect } from 'react-redux'
import * as event from '../../api/events'


const localizer = momentLocalizer(moment)

const calStyle = {
    height : '750px'
}

const modalStyle = {
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center',
}

const modalDivStyle = {
    width : '550px',
    height : '500px',
    backgroundColor : 'white'
}

const modalHeaderStyle ={
    marginLeft : '10px'
}

class GiveCalendar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal : false,
            selectedEvent : ''
        }

        this.deleteEvent = this.deleteEvent.bind(this)
    }

    displayModal = event => {
        this.setState({showModal : true, selectedEvent : event})
    }

    hideModal = event => {
        this.setState({showModal : false, selectedEvent : ''})
    }

    colorEvent = event => {
        var backgroundColor
        if(event.event_type === 'Fundraising')
        {
            backgroundColor = 'green'
        }
        var style = {
            backgroundColor: backgroundColor,
        };
        return {
            style: style
        };
    }

    async deleteEvent(e) {
        e.preventDefault()
        await event.deleteEvent(this.state.selectedEvent._id)
        this.hideModal()
        window.location.reload()
    }

    render() {

        return(
            <div className= {styleFix.rbcEvent}>
                <Calendar
                    style={calStyle}
                    popup
                    localizer={localizer}
                    views={{month:true, week : true, day : true}}
                    events={this.props.events}
                    defaultDate={new Date(2019, 9, 1)}
                    onSelectEvent={this.displayModal}
                    eventPropGetter={(this.colorEvent)}
                    startAccessor= "start"
                    endAccessor ="end"
                />
                <Modal open={this.state.showModal} onClose={this.hideModal} style={modalStyle}>
                    <div style={modalDivStyle}>
                        <div>
                        <h2 style= {modalHeaderStyle}>{this.state.selectedEvent.title}</h2>
                        </div>

                        <div>
                            <p style={modalHeaderStyle}>
                                <strong>Start Time : </strong> {new Intl.DateTimeFormat('en-US', {year : 'numeric', month : '2-digit', day : '2-digit', hour : '2-digit', minute : '2-digit'}).format(this.state.selectedEvent.start)}
                                <br />
                                <strong>End Time : </strong> {new Intl.DateTimeFormat('en-US', {year : 'numeric', month : '2-digit', day : '2-digit', hour : '2-digit', minute : '2-digit'}).format(this.state.selectedEvent.end)}
                                <br />
                                <strong>Location : </strong> Building {this.state.selectedEvent.building} , {this.state.selectedEvent.room}  {this.state.selectedEvent.city} {this.state.selectedEvent.state}
                                <br />
                                <br />
                                <strong>Contact : </strong> {this.state.selectedEvent.contact}
                                <br/>
                                <strong>SLT Leader : </strong> {this.state.selectedEvent.slt_leader}
                                <br/>
                                <strong>Exec Sponsor : </strong> {this.state.selectedEvent.exec_sponsor}
                                <br/>
                                <br />
                                <strong>Event Type : </strong> {this.state.selectedEvent.event_type}
                                <br />
                                <strong>Event URL : </strong> {this.state.selectedEvent.event_url}
                                <br/>
                                <br />
                                <strong>Comments : </strong> {this.state.selectedEvent.comments}

                            </p>
                        </div>

                        <div>
                            <button style={modalHeaderStyle}>Edit Event</button>
                            <button style={modalHeaderStyle} onClick={this.deleteEvent}> Delete Event</button>
                            <button style={modalHeaderStyle} onClick={this.hideModal}> Close</button>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}
// Connect the redux store to react
function mapStateToProps(state) {
    return {
      events : state.events
    };
}

export default connect(
mapStateToProps,
null
)(GiveCalendar);