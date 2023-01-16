export const events = [
    {
        id: '1',
        start: new Date('2023-01-12 13:00:00'),
        end: new Date('2023-01-12 15:00:00'),
        title: 'Test Event',
        notes: 'Some note'
    },
    {
        id: '2',
        start: new Date('2023-02-09 13:00:00'),
        end: new Date('2023-02-09 15:00:00'),
        title: 'Test Event 0002',
        notes: 'Some note event 0002'
    }
];


export const initialState = {
    events: [],
    isLoadingEvents: true,
    activeEvent: null
}

export const calendarWithEventsState = {
    events: [ ...events ],
    isLoadingEvents: false,
    activeEvent: null
}

export const calendarWithActiveEventsState = {
    events: [ ...events ],
    isLoadingEvents: false,
    activeEvent: { ...events[0] }
}