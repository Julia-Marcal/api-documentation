import request from 'supertest';
import express from 'express';
import { create } from '../src/controllers/post/agentPostController';
import { createUser } from '../src/repositories/userCreate';

jest.mock('../src/repositories/userCreate', () => ({
  createUser: jest.fn(),
}));
jest.mock('../src/validation/validationUser');
jest.mock('../src/services/prisma');

describe('PostNewAgent', () => {
  let app: express.Express;

  beforeEach(() => {
    app = express();
    app.use(express.json());
    app.post('/', create);
  });

  it('should post a new agent', async () => {
    const mockCreateUser = createUser as jest.Mock;
    mockCreateUser.mockResolvedValueOnce({ });

    const res = await request(app).post('/').send({ });

    expect(res.status).toBe(400);
    expect(res.body.user).toBeDefined();
    expect(res.body.token).toBeDefined();

    mockCreateUser.mockReset();
  });

  it('should handle error when req.body is missing', async () => {
    const res = await request(app).post('/');

    expect(res.status).toBe(400);
    expect(res.body).toEqual({
      issues: [
        { code: 'invalid_type', expected: 'string', message: 'Required', path: ['name'], received: 'undefined' },
        { code: 'invalid_type', expected: 'string', message: 'Required', path: ['real_name'], received: 'undefined' },
        { code: 'invalid_type', expected: 'number', message: 'Required', path: ['age'], received: 'undefined' },
        { code: 'invalid_type', expected: 'string', message: 'Required', path: ['country'], received: 'undefined' },
      ],
      name: 'ZodError',
    });
  });
});
