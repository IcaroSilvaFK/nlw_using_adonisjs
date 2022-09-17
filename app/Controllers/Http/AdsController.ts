import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Ad from 'App/Models/Ad'
import AdValidator from 'App/Validators/AdValidator'

export default class AdsController {
  public async store({ request, response }: HttpContextContract) {
    const body = await request.validate(AdValidator)
    const gameId = Number(request.param('id'))

    const ad = await Ad.create({
      discord: body.discord,
      name: body.name,
      hourEnd: body.hourEnd,
      hourStart: body.hourStart,
      weekDays: body.weekDays,
      yearsPlaying: body.yearsPlaying,
      useVoiceChannel: body.useVoiceChannel,
      gameId: gameId,
    })

    return response.created(ad)
  }
}
