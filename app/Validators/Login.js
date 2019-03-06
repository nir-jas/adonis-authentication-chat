/*
 * @Author: Nirmal Jasmatiya 
 * @Date: 2019-03-05 23:58:53 
 * @Last Modified by:   Nirmal Jasmatiya 
 * @Last Modified time: 2019-03-05 23:58:53 
 */

'use strict'

class Login {
	get validateAll() {
		return true
	}

	get rules() {
		return {
			email: 'required|email',
			password: 'required'
		}
	}

	get messages() {
		return {
			'email.required': 'You must provide a email address.',
			'email.email': 'You must provide a valid email address.',
			'password.required': 'You must provide a password.'
		}
	}

	async fails(errorMessages) {
		return this.ctx.response.jsend(errorMessages, "Bad Request", 400)
	}
}

module.exports = Login
