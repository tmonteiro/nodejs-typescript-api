import supertest from 'supertest';

describe('Shaw Brothers movies functional tests', () => {
  it('should return status 200', async () => {
    const { status } = await supertest(app).get('/movies');
    expect(status).toBe(200);
  });
});
