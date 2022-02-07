var request = require('supertest');
var app = require('../index');

describe('GET /', function () {
  it('respond with hello guys', function (done) {
    //navigate to root and check the response is "hello world"
    request(app).get('/').expect('Hello Guys!', done);
  });
});
