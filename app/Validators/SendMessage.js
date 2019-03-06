/*
 * @Author: Nirmal Jasmatiya 
 * @Date: 2019-03-06 10:08:52 
 * @Last Modified by: Nirmal Jasmatiya
 * @Last Modified time: 2019-03-06 10:34:58
 */

'use strict'

class SendMessage {
	get validateAll() {
		return true
	}

	get rules() {
		return {
			message: 'required'
		}
	}

	get messages() {
		return {
			'message.required': 'You must provide a message.'
		}
	}

	async fails(errorMessages) {
		return this.ctx.response.jsend(errorMessages, "Bad Request", 400)
	}
}

module.exports = SendMessage
