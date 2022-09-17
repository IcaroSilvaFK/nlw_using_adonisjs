import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'ads'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('name').notNullable()
      table.string('discord').notNullable()
      table.float('years_playing').unsigned().notNullable()
      table.json('week_days').unsigned().notNullable()
      table.integer('hour_start').unsigned().notNullable()
      table.integer('hour_end').unsigned().notNullable()
      table.boolean('use_voice_channel').notNullable()

      table.integer('game_id').unsigned().references('id').inTable('games').notNullable()

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
