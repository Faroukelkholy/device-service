import request from 'supertest'
import ExpressServer from '../../../src/adapters/rest/express/expressServer';
import mongoose from 'mongoose'

const endpointUrl = "/devices/";


const expressServer = new ExpressServer()
expressServer.initControllers()



describe(endpointUrl, () => {

  it("GET " + endpointUrl, async () => {
    const response = await request(expressServer.app)
      .get(endpointUrl)
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body.data)).toBeTruthy();
    expect(response.body.status).toBeDefined();
    expect(response.body.data).toBeDefined();
  })

})

afterAll(() => {
  // Closing the DB connection allows Jest to exit successfully.
  mongoose.connection.close()
})