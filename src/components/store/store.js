import { createStore } from 'redux'

// Set up the initial state of the store
const initState = {
    events: [],
    query : '',
    isVpal : false
}


// Set up a reducer
export function reducer(state=initState , action=[]) {
    switch(action.type) {
        case 'UPDATE' :
            return Object.assign({}, state, {
                events : action.eventList,
                query : action.query
            })
        case 'LOGIN' :
        return Object.assign({}, state, {
                isVpal : true
        })

        default :
        return state
    }
}


export function updateEvents(events, query)
{
    for(let i=0; i < events.length; i++)
    {
        events[i].start = new Date(events[i].start)
        events[i].end = new Date(events[i].end)
    }
    return {
        type : 'UPDATE',
        eventList : events,
        query : query
    }
}

// Create the store
const store = createStore (
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store