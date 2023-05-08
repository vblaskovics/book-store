import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { RentalModule } from '../src/rental';
import { initApp } from './helpers/init-app.e2e-helper';
import { getBearerToken } from './helpers/get-bearer.helper';

const URL = '/rentals';

describe('RentalController (e2e)', () => {
  let app: INestApplication;
  let router: any;
  let bearerToken: string;

  beforeAll(async () => {
    bearerToken = await getBearerToken();
  });

  beforeEach(async () => {
    app = await initApp({
      imports: [RentalModule],
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
        .get(`${URL}/active/book/1`)
        .set('Authorization', `Bearer invalid token`)
        .expect(401);
    });
  });

  describe('Authorized access', () => {
    describe('GET /rentals/active', () => {
      it('should return 200', () => {
        return request(app.getHttpServer())
          .get(`${URL}/active/book/1`)
          .set('Authorization', `${bearerToken}`)
          .expect(200);
      });

      it('should return active rentals for a book with ID', () => {
        return request(app.getHttpServer())
          .get(`${URL}/active/book/1`)
          .set('Authorization', `${bearerToken}`)
          .expect(200)
          .expect((res) => {
            expect(res.body.length).toBeGreaterThan(0);
            expect(res.body[0].customer.id).toBe('1');
            expect(res.body[0].book.id).toBe('1');
          });
      });
    });
  });
});
