import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

const navBarStyle={
    display : 'flex',
    flexdirection : 'row',
    backgroundColor: 'gray',
    margin : 0,
    minHeight : '30px'
}

const linkStyle = {
    marginLeft : '20px',
    marginTop : '2px',
    marginRight : '20px',
    color : 'linen'
}

class Navigation extends React.Component {
    render() {
        return(
            <div style={navBarStyle}>
                <Link to='/calendar' style={linkStyle}>Home</Link>
                <Link to='/newEvent' style={linkStyle}>Create New Event</Link>
            </div>
        )
    }
}

export default withRouter(Navigation)