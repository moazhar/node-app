var request = require('supertest');
var app = require('../index');

describe('GET /', function () {
  it('respond with a message `Hello World!`', function (done) {
    //navigate to root and check the response is "hello world"
    request(app).get('/').expect('Hello World!', done);
  });
});
