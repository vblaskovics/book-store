import { MigrationInterface, QueryRunner } from 'typeorm';

export class myMigration1679989777162 implements MigrationInterface {
  name = 'myMigration1679989777162';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`rental_entity\` DROP FOREIGN KEY \`FK_cdfc53d517c1b5600eee0d56abb\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`rental_entity\` DROP FOREIGN KEY \`FK_eb26a29f2ea5cbcab618fbee06d\``,
    );
    await queryRunner.query(
      `DROP INDEX \`REL_cdfc53d517c1b5600eee0d56ab\` ON \`rental_entity\``,
    );
    await queryRunner.query(
      `DROP INDEX \`REL_eb26a29f2ea5cbcab618fbee06\` ON \`rental_entity\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`rental_entity\` DROP COLUMN \`bookId\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`rental_entity\` DROP COLUMN \`customerId\``,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`rental_entity\` ADD \`customerId\` varchar(36) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`rental_entity\` ADD \`bookId\` varchar(36) NULL`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX \`REL_eb26a29f2ea5cbcab618fbee06\` ON \`rental_entity\` (\`bookId\`)`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX \`REL_cdfc53d517c1b5600eee0d56ab\` ON \`rental_entity\` (\`customerId\`)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`rental_entity\` ADD CONSTRAINT \`FK_eb26a29f2ea5cbcab618fbee06d\` FOREIGN KEY (\`bookId\`) REFERENCES \`book_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`rental_entity\` ADD CONSTRAINT \`FK_cdfc53d517c1b5600eee0d56abb\` FOREIGN KEY (\`customerId\`) REFERENCES \`customer_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
