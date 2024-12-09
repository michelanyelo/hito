import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../../src/app.js';

describe('GET /api/albums/', () => {
    it('Debe devolver una lista de albums', async () => {
        const response = await request(app).get('/api/albums');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
});

describe('POST /api/auth/register', () => {
    it('Debe registrar un usuario y devolver una respuesta exitosa', async () => {
        // Datos que se enviarán en la solicitud de registro
        const userData = {
            email: 'test3333@example.com',
            password: 'password123'
        };

        // Realizamos la solicitud POST a la ruta de registro
        const response = await request(app)
            .post('/api/auth/register') // Cambia la URL si es diferente
            .send(userData) // Envía los datos como JSON
            .set('Content-Type', 'application/json'); // Configuración del encabezado

        // Verificamos la respuesta
        expect(response.status).toBe(201); // Código 201 si se creó el recurso
        expect(response.body).toMatchObject({
            newUser: {
                email: 'test3333@example.com'
            }
        });
    });
});