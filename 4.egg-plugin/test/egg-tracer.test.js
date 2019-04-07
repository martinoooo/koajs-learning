'use strict';

const mock = require('egg-mock');

describe('test/egg-tracer.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/egg-tracer-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, eggTracer')
      .expect(200);
  });
});
