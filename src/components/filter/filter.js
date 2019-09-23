import React from 'react'
import * as events from '../../api/events'
import {updateEvents} from '../../components/store/store'
import { connect } from 'react-redux'

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

//TODO: On clicking Filter the state is reset in the UI - Fix it

class FilterEvents extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            event_type : '',
            building : '',
            city : '',
            state : '',
            slt_leader : '',
            exec_sponsor : '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.clearFilter = this.clearFilter.bind(this)
    }

    handleChange({target : { name, value }}) {
        this.setState({[name] : value})
    }

    async handleSubmit (e) {
        e.preventDefault()
        var query;

        Object.entries(this.state).forEach(([key, value]) =>{
            if(value !== '')
            {
                if (query === undefined)
                {
                    query = `${key}=${value}`
                }
                else
                {
                    query = query + `&&${key}=${value}`
                }
            }
        })

        const filteredEvents = await events.getEvents(query)
        this.props.dispatch(updateEvents(filteredEvents.response, query))
    }

    clearFilter (e) {
        this.setState({
            event_type : '',
            building : '',
            city : '',
            state : '',
            slt_leader : '',
            exec_sponsor : '',
        })
    }

    componentDidMount()
    {
        var searchParams = new URLSearchParams(this.props.query)
        if (searchParams.has('event_type'))
        {
            this.setState({event_type : searchParams.get('event_type')})
        }
        if (searchParams.has('building'))
        {
            this.setState({building : searchParams.get('building')})
        }
        if (searchParams.has('city'))
        {
            this.setState({city : searchParams.get('city')})
        }
        if (searchParams.has('state'))
        {
            this.setState({state : searchParams.get('state')})
        }
        if (searchParams.has('slt_leader'))
        {
            this.setState({slt_leader : searchParams.get('slt_leader')})
        }
        if (searchParams.has('exec_sponsor'))
        {
            this.setState({exec_sponsor : searchParams.get('exec_sponsor')})
        }
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit} >
                    <h2> Filter Events</h2>
                    <div>
                        <div style={divStyle}>
                        <label htmlFor='eventType' style = {leftAlign}>Event Type : </label>
                        <select
                            className='form-control'
                            id='event_type'
                            onChange={this.handleChange}
                            name='event_type'
                            value={this.state.event_type}
                            style={rightAlign}
                        >
                            <option value=''></option>
                            <option>Fundraising</option>
                            <option>Micro-volunteering</option>
                        </select>
                        </div>

                        <br / >

                        <div style={divStyle}>
                        <label htmlFor='eventType' style={leftAlign}>Building :  </label>
                        <select
                            className='form-control'
                            id='building'
                            onChange={this.handleChange}
                            name='building'
                            value={this.state.building}
                            style={rightAlign}
                        >
                            <option></option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19</option>
                            <option>21</option>
                            <option>22</option>
                            <option>25</option>
                            <option>27</option>
                            <option>28</option>
                            <option>30</option>
                            <option>31</option>
                            <option>32</option>
                            <option>33</option>
                            <option>34</option>
                            <option>35</option>
                            <option>36</option>
                            <option>37</option>
                            <option>40</option>
                            <option>41</option>
                            <option>42</option>
                            <option>43</option>
                            <option>44</option>
                            <option>50</option>
                            <option>83</option>
                            <option>84</option>
                            <option>85</option>
                            <option>86</option>
                            <option>87</option>
                            <option>88</option>
                            <option>92</option>
                            <option>99</option>
                            <option>109</option>
                            <option>111</option>
                            <option>112</option>
                            <option>113</option>
                            <option>114</option>
                            <option>115</option>
                            <option>120</option>
                            <option>121</option>
                            <option>122</option>
                            <option>124</option>
                            <option>126</option>
                            <option>127</option>
                            <option>ADVANTA-A</option>
                            <option>ADVANTA-B</option>
                            <option>ADVANTA-C</option>
                            <option>ALISOVIEJO-75EN</option>
                            <option>ALPHARETTA-8000</option>
                            <option>ASHBURN-44520</option>
                            <option>AUSTIN-10900</option>
                            <option>BENTONVILLE-2505</option>
                            <option>BERKELEY 2150</option>
                            <option>BLOOMINGTON IL</option>
                            <option>BLUE RIDGE BL20</option>
                            <option>BOISE-401WFRONT</option>
                            <option>BOYDTON BN6</option>
                            <option>BOYDTON-BN1</option>
                            <option>BRAVERN-1</option>
                            <option>BRAVERN-2</option>
                            <option>BURLINGTN-5 WAY</option>
                            <option>BY1 (EXODUS SC6 - LAFAYETTE)</option>
                            <option>CAMBRIDGE-1MEM</option>
                            <option>CHARLOTTE-AP1</option>
                            <option>CHARLOTTE-AP2</option>
                            <option>CHEYENNE CYS04</option>
                            <option>CHEYENNE-CYS01</option>
                            <option>CHICAGO-200RAND</option>
                            <option>CHICAGO-CH1</option>
                            <option>CINCINNATI-4445</option>
                            <option>CITY CENTER</option>
                            <option>COLUMBUS-LYRA</option>
                            <option>DENVER-7595</option>
                            <option>DES MOINES DSM05</option>
                            <option>DES MOINES-665 GRAND AVENUE</option>
                            <option>DES MOINES-DM1</option>
                            <option>DETROIT-CAMPUS MARTIUS</option>
                            <option>DOWNERS GROVE</option>
                            <option>EDINA MN-3601</option>
                            <option>ELKRIDGE-6518</option>
                            <option>FAIRPORTNY-375</option>
                            <option>FARGO-HORIZON</option>
                            <option>FARGO-VISION</option>
                            <option>FARGO-VISTA</option>
                            <option>FT COLLINS-2720</option>
                            <option>FT LAUDER-6750</option>
                            <option>HARTFORD CT-280</option>
                            <option>HOME OFFICE</option>
                            <option>HOUSTON-750</option>
                            <option>INDIANAPOLIS-KE</option>
                            <option>INTENTIONAL</option>
                            <option>IRVINE</option>
                            <option>ISELIN-101 WOOD</option>
                            <option>LAS COLINAS-1</option>
                            <option>LAS COLINAS-2</option>
                            <option>LINCOLN SQUARE</option>
                            <option>LINCOLN SQUARE-2</option>
                            <option>LOS ANGEL-13031</option>
                            <option>MALVERN</option>
                            <option>MILLENNIUM A</option>
                            <option>MILLENNIUM B</option>
                            <option>MILLENNIUM C</option>
                            <option>MILLENNIUM D</option>
                            <option>MILLENNIUM E</option>
                            <option>MILLENNIUM F</option>
                            <option>MILWAUKEE-833</option>
                            <option>MINNEAPOLIS-251</option>
                            <option>NASHVILLE-8 CITY</option>
                            <option>NEW YORK - 123 WILLIAM ST</option>
                            <option>NYC-584BROADWAY</option>
                            <option>NYC-641 AOA</option>
                            <option>NYC-TIMESSQUARE</option>
                            <option>OMAHA-2111</option>
                            <option>OVERLAND PARK</option>
                            <option>PHOENIX PHX20</option>
                            <option>PITTSBURGH-1001 LIBERTY</option>
                            <option>PITTSBURGH-910 RIVER</option>
                            <option>PORTLAND-1414</option>
                            <option>QUINCY-CO1.1</option>
                            <option>QUINCY-MWH01</option>
                            <option>RALEIGH DURHAM-3025</option>
                            <option>RALEIGH-QUANTUM 8045</option>
                            <option>REDMOND TOWN B3</option>
                            <option>REDMOND TOWN B4</option>
                            <option>REDMOND TOWN B5</option>
                            <option>REDMOND TOWN B6</option>
                            <option>REDMOND-17760</option>
                            <option>REDW-A</option>
                            <option>REDW-B</option>
                            <option>REDW-C</option>
                            <option>REDW-D</option>
                            <option>REDW-E</option>
                            <option>RENO-B</option>
                            <option>RESTON-12012</option>
                            <option>RICHMOND 4301</option>
                            <option>S0001-SCOTTSDL</option>
                            <option>S0002-MISSIONVJ</option>
                            <option>S0003-SANDIEGO</option>
                            <option>S0004-LONETREE</option>
                            <option>S0005-BLOOMNGTN</option>
                            <option>S0006-BELLEVUE</option>
                            <option>S0007-COSTAMESA</option>
                            <option>S0008-OAKBROOK</option>
                            <option>S0009-LOSANGELS</option>
                            <option>S0010-MCLEAN</option>
                            <option>S0011-AUSTIN</option>
                            <option>S0012-HOUSTON</option>
                            <option>S0013-SEATTLE</option>
                            <option>S0014-ATLANTA</option>
                            <option>S0015-SANTACLARA</option>
                            <option>S0016-NEWARK</option>
                            <option>S0017-PALOALTO</option>
                            <option>S0018-DANBURY</option>
                            <option>S0019-SALEM</option>
                            <option>S0020-SANANTON</option>
                            <option>S0021-SALTLAKE</option>
                            <option>S0022-BRIDGEWTR</option>
                            <option>S0023-FREEHOLD</option>
                            <option>S0024-WHITEPLNS</option>
                            <option>S0025-OVERLAND</option>
                            <option>S0026-HUNTINGTN</option>
                            <option>S0027-ORLANDO</option>
                            <option>S0028-ARLINGTON</option>
                            <option>S0029-BOSTON</option>
                            <option>S0030-CORTEMADR</option>
                            <option>S0031-SANFRN-WF</option>
                            <option>S0034-CINCINNAT</option>
                            <option>S0035-INDIANPLS</option>
                            <option>S0036-SCHAUMBRG</option>
                            <option>S0037-BURLINGTN</option>
                            <option>S0038-BEACHWOOD</option>
                            <option>S0039-MIAMI</option>
                            <option>S0040-ORLANDO</option>
                            <option>S0041-OKLAHOMA</option>
                            <option>S0042-HONOLULU</option>
                            <option>S0043-PORTLAND</option>
                            <option>S0044-GARDENCTY</option>
                            <option>S0045-NATICK</option>
                            <option>S0046-TROY</option>
                            <option>S0047-STLOUIS</option>
                            <option>S0049-LASVEGAS</option>
                            <option>S0050-FARMINGTN</option>
                            <option>S0051-JACKSONVL</option>
                            <option>S0052-BUFFALO</option>
                            <option>S0053-NASHVILLE</option>
                            <option>S0054-FRISCO TX</option>
                            <option>S0055-PARAMUS</option>
                            <option>S0056-ATLANTA</option>
                            <option>S0057-TULSA</option>
                            <option>S0058-SYRACUSE</option>
                            <option>S0059-DALLAS</option>
                            <option>S0060-AVENTURA</option>
                            <option>S0061-WOODLANDS</option>
                            <option>S0062-CANOGAPK</option>
                            <option>S0063-BETHESDA</option>
                            <option>S0064-FRIENDSWD</option>
                            <option>S0065-DURHAM</option>
                            <option>S0066-CHARLOTTE</option>
                            <option>S0067-CERRITOS</option>
                            <option>S0068-METAIRIE</option>
                            <option>S0069-CHANDLER</option>
                            <option>S0077-SARASOTA</option>
                            <option>S0078-TAMPA</option>
                            <option>S0082-BOCA RATON</option>
                            <option>S0083-KOPRUSSIA</option>
                            <option>S0084-COLUMBUS</option>
                            <option>S0085-NYC FIFTH</option>
                            <option>SACRAMENTO-1415</option>
                            <option>SALT LAKE-LEHI</option>
                            <option>SAMM-C</option>
                            <option>SAMM-D</option>
                            <option>SAN ANTONIO IDC5</option>
                            <option>SAN ANTONIO-401</option>
                            <option>SAN DIEGO</option>
                            <option>SANANTONIO-5150</option>
                            <option>SANFRAN-1355MKT</option>
                            <option>SANFRAN-555 CAL</option>
                            <option>SEATTLE-500 YALE (WEWORK)</option>
                            <option>SOUTHFIELD</option>
                            <option>ST. LOUIS-4220 DUNCAN</option>
                            <option>STUDIO A</option>
                            <option>STUDIO B</option>
                            <option>STUDIO C</option>
                            <option>STUDIO D</option>
                            <option>STUDIO E</option>
                            <option>STUDIO F</option>
                            <option>STUDIO G</option>
                            <option>STUDIO H</option>
                            <option>STUDIO X</option>
                            <option>SUNNYVALE-1020</option>
                            <option>SUNNYVALE-599</option>
                            <option>SUNNYVALE-680</option>
                            <option>SUNNYVALE-755</option>
                            <option>SVC-6</option>
                            <option>TAMPA-5426</option>
                            <option>TEMPE-60 E RIO</option>
                            <option>VA-4</option>
                            <option>WASH DC-5404</option>
                            <option>WASH DC-901 K</option>

                        </select>

                        </div>

                        <br / >

                        <div style={divStyle}>
                        <label htmlFor='eventType' style={leftAlign}>City :  </label>
                        <input
                            className='form-control'
                            id='city'
                            onChange={this.handleChange}
                            name='city'
                            type='text'
                            value={this.state.city}
                            style={rightAlign}
                        />
                        </div>

                        <br / >

                        <div style={divStyle}>
                            <label htmlFor='eventType' style={leftAlign}>State :  </label>
                            <select
                                className='form-control'
                                id='state'
                                onChange={this.handleChange}
                                name='state'
                                value={this.state.state}
                                style={rightAlign}
                            >
                                <option></option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </select>
                        </div>

                        <br / >

                        <div style={divStyle}>
                        <label htmlFor='eventType' style={leftAlign}>SLT Leader :  </label>
                        <select
                            className='form-control'
                            id='slt_leader'
                            onChange={this.handleChange}
                            name='slt_leader'
                            value={this.state.slt_leader}
                            style={rightAlign}
                        >
                            <option></option>
                            <option>Amy Hood</option>
                            <option>Brad Smith</option>
                            <option>Chris Caposela</option>
                            <option>Harry Shum</option>
                            <option>Jean-Philippe-Courtis</option>
                            <option>Judson Aithoff</option>
                            <option>Kathleen Hogan</option>
                            <option>Kevin Scott</option>
                            <option>Kurt DelBene</option>
                            <option>Non SLT Aligned</option>
                            <option>Peggy Johnson</option>
                            <option>Phil Spencer</option>
                            <option>Rajesh Jha</option>
                            <option>Scott Guthrie</option>
                        </select>

                        </div>

                        <br / >

                        <div style={divStyle}>
                        <label htmlFor='eventType' style={leftAlign}>Exec Sponsor :  </label>
                        <input
                            className='form-control'
                            id='exec_sponsor'
                            onChange={this.handleChange}
                            name='exec_sponsor'
                            type='text'
                            value={this.state.exec_sponsor}
                            style={rightAlign}
                        />
                        </div>

                        <br />
                        <button type='submit' className='btn btn-primary' style ={leftAlign}>
                            Filter
                        </button>

                        <button style ={leftAlign} onClick={this.clearFilter}>
                            Clear
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

// Connect the redux store to react
function mapStateToProps(state) {
    return {
      events : state.events,
      query : state.query
    };
}

export default connect(
mapStateToProps,
null
)(FilterEvents);