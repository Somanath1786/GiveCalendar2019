import React from 'react'

const formStyle = {
    textAlign : 'center',
    width : '500px',
    height : '800px'
}

const divStyle = {
    display : 'flex',
    flexDirection : 'row',
    width : '100%'
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

export default class NewEventPassword extends React.Component {
    constructor(props){
        super (props)
        this.state = {
            password : ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange({target : { name, value }}) {
        this.setState({[name] : value})
    }

    handleSubmit (e) {
        e.preventDefault()
        if (this.state.password === 'Give2019Vpal')
        {
            window.sessionStorage.setItem('Give2019Vpal', 'true')
            window.location.reload()
        }
    }

    render() {
        return(
            <div style={formStyle}>
                <form onSubmit={this.handleSubmit}>
                   <h4> Enter your VPAL Password</h4>
                       {/* Title */}
                        <div style={divStyle}>
                            <label htmlFor='eventType' style = {leftAlign}>Password : </label>
                            <input
                            className='form-control'
                            id='password'
                            onChange={this.handleChange}
                            name='password'
                            type='text'
                            value={this.state.password}
                            style={rightAlign}
                            required
                        />
                        <button>Submit</button>
                        </div>
                </form>
            </div>
        )
    }
}