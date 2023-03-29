# Book Store App

## Related docs

- [Docker](https://docs.docker.com/)
- [NestJS](https://docs.nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [JWT](https://jwt.io/introduction)
- [Passport](https://www.passportjs.org/)
- [class-validator](https://github.com/typestack/class-validator)
- [class-transformer](https://github.com/typestack/class-transformer)
- [Swagger](https://swagger.io/)
- [OpenAPI](https://www.openapis.org/)
- [Terminus](https://github.com/godaddy/terminus)

## Recommended IDE

- [VSCode](https://code.visualstudio.com/)
  - [devcontainer](https://code.visualstudio.com/docs/devcontainers/containers)

## Configuration

```bash
$ cp .env.example .env
```

- fill `.env` with your environment variables

## Docker usage

### Run in devcontainer

`ctr` / `cmd` + `shift` + `p` > `Dev Containers > Open Folder in Container...`

## standard Docker usage

### Start in development mode

```bash
# uses docker.compose.yaml and docker.compose.override.yaml by default
$ docker compose up
```

### Re-build

```bash
# build all containers that has build configuration
$ docker compose build
```

### Generate migration

```bash
# replace `my-migration` with the migration name that you want
$ docker compose exec book-store npm run migration:generate ./src/migrations/my-migration
```

### Run tests

```bash
# Run unit tests
$ docker compose exec book-store npm run test
```

```bash
# Run E2E tests
$ docker compose exec book-store npm run test:e2e
```

### Production mode

```bash
# Start containers in production mode
# may require to rebuild the image (use `--build` flag)
$ docker compose -f docker-compose.yaml up
```

## Host usage

### Installation

```bash
# Do a clean install
$ npm ci
```

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
