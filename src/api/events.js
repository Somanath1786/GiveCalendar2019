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