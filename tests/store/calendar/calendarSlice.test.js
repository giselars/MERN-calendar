import { calendarSlice, onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent, onLoadEvents, onLogoutCalendar } from '../../../src/store/calendar/calendarSlice';
import { calendarWithActiveEventsState, events, initialState } from '../../__fixtures/calendarStates';


describe('Pruebas en calendarSlice', () => { 
    test('debe de regresar el estado por defecto', () => { 
        const state = calendarSlice.getInitialState();
        expect( state ).toEqual( initialState );
     });

     test('onSetActiveEvent debe de activar el evento', () =>{

        const state = calendarSlice.reducer( calendarWithActiveEventsState, onSetActiveEvent( events[0] ));
        expect( state.activeEvent ).toEqual( events[0] );

     });

     test('onAddNewEvent debe agregar el evento', () => { 
        
        const newEvent = {
                id: '3',
                start: new Date('2023-01-12 13:00:00'),
                end: new Date('2023-01-12 15:00:00'),
                title: 'Test Event!!!!',
                notes: 'Some note!!!!'
        }

        const state = calendarSlice.reducer( calendarWithActiveEventsState, onAddNewEvent( newEvent ) );
        expect( state.events ).toEqual([...events, newEvent ]);

    });

    test('onUpdateEvent debe actualizar el evento', () => { 
        
        const updatedEvent = {
                id: '1',
                start: new Date('2023-01-12 13:00:00'),
                end: new Date('2023-01-12 15:00:00'),
                title: 'Test Event updated',
                notes: 'Some note updated'
        }

        const state = calendarSlice.reducer( calendarWithActiveEventsState, onUpdateEvent( updatedEvent ) );
        expect( state.events ).toContain( updatedEvent );

    });

    test('onDeleteEvent debe de borrar el evento activo', () => { 

        const state = calendarSlice.reducer( calendarWithActiveEventsState, onDeleteEvent());
        expect( state.activeEvent ).toBe( null );
        expect( state.events ).not.toContain( events[0] );

    });

    test('onLoadEvents debe de establecer los eventos', () => { 

        const state = calendarSlice.reducer( initialState, onLoadEvents( events ));
        expect( state.isLoadingEvents ).toBeFalsy();
        expect( state.events ).toEqual( events );

        //check state without duplicates
        const newState = calendarSlice.reducer( state, onLoadEvents( events ) );
        expect( state.events.length ).toBe( events.length );


    });

    test('onLogoutCalendar debe de limpiar el estado', () => { 

        const state = calendarSlice.reducer( calendarWithActiveEventsState, onLogoutCalendar() );
        expect( state ).toEqual( initialState );
    });

    
});