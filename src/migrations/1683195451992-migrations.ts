import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1683195451992 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createDatabase('railway', true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropDatabase('railway', true);
  }
}
