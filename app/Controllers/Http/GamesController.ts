import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Game from 'App/Models/Game'
import GameValidator from 'App/Validators/GameValidator'

export default class GamesController {
  public async store({ request, response }: HttpContextContract) {
    const { coverUrl, title } = await request.validate(GameValidator)

    const game = await Game.create({ coverUrl, title })

    return response.created(game)
  }
}
