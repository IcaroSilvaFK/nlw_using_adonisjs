import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Ad from './Ad'

export default class Game extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column({ columnName: 'cover_url' })
  public coverUrl: string

  @hasMany(() => Ad, {
    serializeAs: 'game_ads',
  })
  public ads: HasMany<typeof Ad>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
