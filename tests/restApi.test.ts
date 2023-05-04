import request from 'supertest'
import app from '../src/app'

describe('GetById', () => {
  it('should return the correct agent', async () => {
    const res = await request(app).get('/1')
    expect(res.body).toEqual({
      id: 1,
      name: 'Brimstone',
      real_name: 'Liam Byrne',
      age: 45,
      country: 'United States Of America',
    })
  })
})
