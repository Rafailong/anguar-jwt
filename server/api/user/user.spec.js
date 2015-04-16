'use strict';

var should = require('should');
var faker = require('faker');
var app = require('../../app');
var request = require('supertest');

describe('POST /api/users', function() {

  it('should respond with JSON array', function(done) {
    request(app)
      .post('/api/users/signin')
      .set('Content-Type', 'application/json')
      .send({
        'email': faker.internet.email(),
        'password': faker.internet.password()
      })
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Object);
        res.body.should.have.properties(['data', 'type', 'token']);
        done();
      });
  });
});