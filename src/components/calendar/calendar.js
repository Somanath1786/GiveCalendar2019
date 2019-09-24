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

const deleteModalDivStyle = {
    width : '400px',
    height : '250px',
    backgroundColor : 'white'
}

const modalHeaderStyle ={
    marginLeft : '10px'
}

const leftAlign = {
    width :'30%',
    marginTop : '5px',
    marginBottom : '5px',
    marginLeft : '5px'

}
const rightAlign = {
    width : '70%',
    marginTop : '5px',
    marginBottom : '5px',
    marginRight : '5px'
}

class GiveCalendar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal : false,
            selectedEvent : '',
            showDeleteModal : false,
            vpalPassword : '',
            alias : ''
        }

        this.deleteEvent = this.deleteEvent.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange({target : { name, value }}) {
        this.setState({[name] : value})
    }

    displayModal = event => {
        this.setState({showModal : true, selectedEvent : event})
    }

    hideModal = event => {
        this.setState({showModal : false, selectedEvent : ''})
    }

    displayDeleteModal = event => {
        this.setState({showDeleteModal : true})
    }

    hideDeleteModal = event => {
        this.setState({showDeleteModal : false})
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
        if (this.state.vpalPassword === 'Give2019Vpal' && this.state.alias === this.state.selectedEvent.alias)
        {
            this.hideDeleteModal()
            await event.deleteEvent(this.state.selectedEvent._id)
            this.hideModal()
            window.location.reload()
        }
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
                            {/* <button style={modalHeaderStyle}>Edit Event</button> */}
                            <button style={modalHeaderStyle} onClick={this.displayDeleteModal}> Delete Event</button>
                            <button style={modalHeaderStyle} onClick={this.hideModal}> Close</button>
                        </div>
                    </div>
                </Modal>
                <Modal open={this.state.showDeleteModal} onClose={this.hideDeleteModal} style={modalStyle}>
                    <div style={deleteModalDivStyle}>
                        <form onSubmit={this.deleteEvent}>
                            <h4> Enter your VPAL Password and Event Creator Alias</h4>
                                {/* Password */}
                                <div>
                                    <label htmlFor='eventType' style = {leftAlign}>Password : </label>
                                    <input
                                    className='form-control'
                                    id='vpalPassword'
                                    onChange={this.handleChange}
                                    name='vpalPassword'
                                    type='text'
                                    value={this.state.vpalPassword}
                                    style={rightAlign}
                                    required
                                    />

                                    <label htmlFor='eventType' style = {leftAlign}>Alias : </label>
                                    <input
                                    className='form-control'
                                    id='alias'
                                    onChange={this.handleChange}
                                    name='alias'
                                    type='text'
                                    value={this.state.alias}
                                    style={rightAlign}
                                    required
                                    />
                                </div>

                                <button style = {modalHeaderStyle}>Delete</button>
                                <button style={modalHeaderStyle} onClick={this.hideDeleteModal}> Close</button>
                        </form>
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