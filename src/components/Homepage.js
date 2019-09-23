import React from 'react'
import Header from './shared/Header';
import FilterEvents from './filter/filter';
import GiveCalendar from '../components/calendar/calendar'
import { connect } from 'react-redux'
import * as events from '../api/events'
import {updateEvents} from '../components/store/store'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Navigation from './shared/Navigation';
import NewEvent from './event/newEvent';
import NewEventPassword from './event/newEventPassword';

const divStyle = {
    display : 'flex',
    flexDirection : 'row',
    width : '100%'
}
const leftAlign = {
    width :'25%'
}
const rightAlign = {
    width : '75%'
}

class Homepage extends React.Component {

    async componentDidMount()
    {
        const allEvents = await events.getEvents()
        this.props.dispatch(updateEvents(allEvents.response))

    }

    render() {
        console.log(window.localStorage.getItem('Give2019Vpal'))
        return(
            <Router>
                <div>
                <Header />
                <Navigation/>
                <Switch>
                    <Route path='/calendar' exact component = {() => {
                        return (
                            <div style = {divStyle}>
                                <div style={leftAlign}>
                                <FilterEvents />
                                </div>
                                <div style={rightAlign}>
                                <GiveCalendar />
                                </div>
                            </div>
                        )
                    }}/>

                    <Route path='/newEvent' exact component = {() => {
                        return (window.sessionStorage.getItem('Give2019Vpal') === 'true')? (
                           <NewEvent />
                        ) :
                        (<NewEventPassword />)
                    }}/>
                    <Redirect to='/calendar' />
                </Switch>
                </div>
            </Router>
        )
    }
}

// Connect the redux store to react
function mapStateToProps(state) {
    return {
      events : state.events,
    };
}

export default connect(
mapStateToProps,
null
)(Homepage);