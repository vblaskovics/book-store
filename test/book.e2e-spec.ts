import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { BookModule } from '../src/book';
import { initApp } from './helpers/init-app.e2e-helper';
import { getBearerToken } from './helpers/get-bearer.helper';

describe('BookController (e2e)', () => {
  let app: INestApplication;
  let router: any;
  let bearerToken: string;

  beforeAll(async () => {
    bearerToken = await getBearerToken();
  });

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

  describe('Unauthorized access', () => {
    it('should return 401 if no access token is provided', () => {
      return request(app.getHttpServer())
        .get('/books')
        .set('Authorization', `Bearer invalid token`)
        .expect(401);
    });
  });

  describe('Authorized access', () => {
    describe('GET /books', () => {
      it('should return 200', () => {
        return request(app.getHttpServer())
          .get('/books')
          .set('Authorization', `${bearerToken}`)
          .expect(200);
      });

      it('should return a list of books', () => {
        return request(app.getHttpServer())
          .get('/books')
          .set('Authorization', `${bearerToken}`)
          .expect(200)
          .expect((res) => {
            expect(res.body.length).toBeGreaterThan(0);
            expect(res.body[0]).toHaveProperty('id');
            expect(res.body[0]).toHaveProperty('title');
            expect(res.body[0]).toHaveProperty('author');
          });
      });
    });
  });
});
