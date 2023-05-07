import { Test, TestingModule } from '@nestjs/testing';
import { TestAppModule } from '../test-app.module';

export async function initApp(options?: { imports?: any[] }) {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [TestAppModule, ...(options?.imports || [])],
  }).compile();

  let app = moduleFixture.createNestApplication();
  await app.init();
  return app;
}
