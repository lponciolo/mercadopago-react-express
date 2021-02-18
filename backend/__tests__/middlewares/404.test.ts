import supertest from 'supertest';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import {app} from '../../src/index';

chai.use(sinonChai);
export const { expect } = chai;
export const server = supertest.agent(app);

const errorMsg= 'Sorry cant find that!'
describe('should get 404 not found status', () => {
  it('gets base url', done => {
    server
      .get(`/notexistingroute`)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        done();
      });
  });
});

describe('should get 404 not found status', () => {
    it('gets base url', done => {
      server
        .get(`/notexistingroute`)
        .end((err, res) => {
          expect(res.text).to.equal(errorMsg);
          done();
        });
    });
  });