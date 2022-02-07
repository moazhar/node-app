var request = require('supertest');
var app = require('../index');

describe('GET /', function () {
  it('respond with Hey Mohammed! How are you doing?', function (done) {
    //navigate to root and check the response is "hello world"
    request(app).get('/').expect('Hey Mohammed! How are you doing?', done);
  });
});
