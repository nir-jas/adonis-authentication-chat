'use strict'

const Message = use('App/Models/Message')
const Logger = use('Logger')

/**
 * ChatController
 */
class ChatController {

	async index({
		request,
		response
	}) {
		try {
			let page = request.input('page', 1);
			let data = await Message
				.query()
				.with('user')
				.orderBy('id', 'desc')
				.paginate(page)

			response.jsend(data, "Successfully Requested")
			return
		} catch (error) {
			Logger.error("Get Messages Error \n", error)

			response.jsend(null, "Something went wrong", 500)
			return
		}
	}

	async create({
		request,
		response,
		auth
	}) {
		try {
			let user = await auth.getUser()
			let message = await Message.create({
				message: request.input('message'),
				user_id: user.id
			});

			response.jsend(message, "Successfully Sent")
			return
		} catch (error) {
			Logger.error("Send Message Error \n", error)

			response.jsend(null, "Something went wrong", 500)
			return
		}
	}
}

module.exports = ChatController
