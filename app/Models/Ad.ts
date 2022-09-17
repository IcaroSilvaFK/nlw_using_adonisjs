import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Ad extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column({ columnName: 'years_playing' })
  public yearsPlaying: number

  @column()
  public discord: string

  @column({ columnName: 'week_days' })
  public weekDays: string[]

  @column({ columnName: 'hour_start' })
  public hourStart: number

  @column({ columnName: 'hour_end' })
  public hourEnd: number

  @column({ columnName: 'game_id' })
  public gameId: number

  @column({ columnName: 'use_voice_channel' })
  public useVoiceChannel: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
