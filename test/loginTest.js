'use strict';
var supertest = require('supertest');
var should = require('should');
var server = supertest.agent('localhost:3000/v1');

describe('http://localhost:3000/login', () => {

  it('POST /login', (done) => {
    server
      .post('/login')
      .send({})
      .expect(200, {
      }, done);
  });

});