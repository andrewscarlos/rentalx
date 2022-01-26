import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSpacifications1643161490932 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "specifications",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }
  //spacifications
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("spacifications");
  }
}
