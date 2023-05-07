import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { initApp } from './helpers/init-app.e2e-helper';
import { BookModule } from '../src/book';
import { HttpAdapterHost } from '@nestjs/core';

describe('BookController (e2e)', () => {
  let app: INestApplication;
  const mockAccessToken = 'asd.asd.asd';
  let httpAdapterHost: HttpAdapterHost;

  let router: any;

  beforeEach(async () => {
    app = await initApp({
      imports: [BookModule],
    });

    const server = app.getHttpServer();
    router = server._events.request._router;
  });

  afterEach(async () => {
    await app.close();
  });

  describe('/books (GET)', () => {
    it('should return 401 if no access token is provided', () => {
      return request(app.getHttpServer())
        .get('/books')
        .set('Authorization', `Bearer ${mockAccessToken}`)
        .expect(401);
    });
  });
});
