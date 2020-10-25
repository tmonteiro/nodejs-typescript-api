describe('Shaw Brothers movies functional tests', () => {
  it('should return status 200', async () => {
    const { status } = await global.testRequest.get('/api/movies');
    expect(status).toBe(200);
  });
});
