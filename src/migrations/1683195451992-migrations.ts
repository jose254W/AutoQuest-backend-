import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1683195451992 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE cars (
        id uuid PRIMARY KEY,
        name varchar(255),
        daily_price numeric,
        monthly_price numeric,
        mileage varchar(255),
        gas varchar(255),
        gear_type varchar(255),
        thumbnail_url varchar(255)
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE cars`);
  }
}
