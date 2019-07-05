'use strict';
const supertest = require('supertest');
const should = require('should');
const server = supertest.agent('localhost:3000/v1');

describe('http://localhost:3000/login', () => {

  it('POST /login', (done) => {
    server
      .post('/login')
      .send({})
      .expect(200, {
      }, done);
  });

});