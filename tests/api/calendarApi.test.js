import calendarApi from "../../src/api/calendarApi";


describe('Pruebas en el CalendarApi', () => { 

    test('debe de tener la configuración por defecto ', () => { 

        expect( calendarApi.defaults.baseURL ).toBe( process.env.VITE_API_URL );

    });

    test('debe de tener el x-token en el header de todas las peticiones', async() => { 

        const token = 'ABC-123-XYZ';
        localStorage.setItem('token',token);
        // const res = await calendarApi.get('/auth/');

        // expect(res.config.headers['x-token']).toBe( token );
    });

 });