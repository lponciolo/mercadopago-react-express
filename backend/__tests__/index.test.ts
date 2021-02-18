import supertest from 'supertest'
import chai from 'chai'
import sinonChai from 'sinon-chai'
import { app } from '../src/index'

chai.use(sinonChai)
export const { expect } = chai
export const server = supertest.agent(app)

describe('Index page test', () => {
  it('gets base url', (done) => {
    server
      .get(`/`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200)
        expect(res.body.message).to.equal('Hello World!')
        done()
      })
  })
})
