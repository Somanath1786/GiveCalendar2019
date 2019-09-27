const { REACT_APP_API_DOMAIN } = process.env
const BASE_URL = REACT_APP_API_DOMAIN

export const getEvents = async (queryParams) => {
    var url
    if(queryParams === undefined)
    {
        url = BASE_URL
    }
    else
    {
        url = `${BASE_URL}?${queryParams}`
    }

    const response = await fetch(url , {
        headers : {
            'Content-Type': 'application/json'
        },
        method: 'GET'
    })

    const json = await response.json()
    return json
}

export const newEvent = async(body) => {
    console.log(body.start_date, body.start_time)
    var start = new Date(`${body.start_date} ${body.start_time}`)
    var end = new Date(`${body.end_date} ${body.end_time}`)

    var startDate = start.getUTCDate()
    var startMonth = start.getUTCMonth() + 1
    var startYear = start.getUTCFullYear()

    var startHour = start.getUTCHours()
    var startMin = start.getUTCMinutes()

    console.log(startMonth, startDate, startYear, startHour, startMin)

    var tempStartDate = `${startYear}-${startMonth}-${startDate}`
    console.log(tempStartDate)
    var tempStartTime = `${startHour}:${startMin}`
    console.log(tempStartTime)

    var endDate = end.getUTCDate()
    var endMonth = end.getUTCMonth() + 1
    var endYear = end.getUTCFullYear()

    var endHour = end.getUTCHours()
    var endMin = end.getUTCMinutes()

    console.log(endMonth, endDate, endYear, endHour, endMin)

    var tempEndDate = `${endYear}-${endMonth}-${endDate}`
    console.log(tempEndDate)
    var tempEndTime = `${endHour}:${endMin}`
    console.log(tempEndTime)

    body.start_date = tempStartDate
    body.start_time = tempStartTime
    console.log(body.start_date, body.start_time)

    body.end_date = tempEndDate
    body.end_time = tempEndTime
    console.log(body.end_date, body.end_time)

    const response = await fetch(`${BASE_URL}/newEvent`, {
        body : JSON.stringify(body),
        headers : {
            'Content-Type': 'application/json'
        },
        method: 'POST'
    })

    const json = await response.json()
    return json
}

export const deleteEvent = async(eventId) => {
    const response = await fetch(`${BASE_URL}/${eventId}`, {
        headers : {
            'Content-Type': 'application/json'
        },
        method: 'DELETE'
    })

    const json = await response.json()
    return json
}

export const editEvent = async(eventId, title, contact, start_date, start_time, end_date, end_time, building,
                                        room, city, state, event_type, slt_leader, exec_sponsor, event_url, comments) => {

    var start = new Date(`${start_date} ${start_time}`)
    var end = new Date(`${end_date} ${end_time}`)

    var startDate = start.getUTCDate()
    var startMonth = start.getUTCMonth() + 1
    var startYear = start.getUTCFullYear()

    var startHour = start.getUTCHours()
    var startMin = start.getUTCMinutes()

    console.log(startMonth, startDate, startYear, startHour, startMin)

    var tempStartDate = `${startYear}-${startMonth}-${startDate}`
    console.log(tempStartDate)
    var tempStartTime = `${startHour}:${startMin}`
    console.log(tempStartTime)

    var endDate = end.getUTCDate()
    var endMonth = end.getUTCMonth() + 1
    var endYear = end.getUTCFullYear()

    var endHour = end.getUTCHours()
    var endMin = end.getUTCMinutes()

    console.log(endMonth, endDate, endYear, endHour, endMin)

    var tempEndDate = `${endYear}-${endMonth}-${endDate}`
    console.log(tempEndDate)
    var tempEndTime = `${endHour}:${endMin}`
    console.log(tempEndTime)

    start_date = tempStartDate
    start_time = tempStartTime

    end_date = tempEndDate
    end_time = tempEndTime

    const response = await fetch(`${BASE_URL}/${eventId}`, {
        body : JSON.stringify({ title: title,
                                contact : contact,
                                start_date : start_date,
                                start_time : start_time,
                                end_date : end_date,
                                end_time : end_time,
                                building : building,
                                room : room,
                                city : city,
                                state : state,
                                event_type : event_type,
                                slt_leader : slt_leader,
                                exec_sponsor : exec_sponsor,
                                event_url : event_url,
                                comments : comments}),
        headers : {
            'Content-Type': 'application/json'
        },
        method: 'PUT'
    })

    const json = await response.json()
    return json
}