/*
 * @Author: Nirmal Jasmatiya 
 * @Date: 2019-03-05 23:14:15 
 * @Last Modified by: Nirmal Jasmatiya
 * @Last Modified time: 2019-03-05 23:53:01
 */
'use strict'

class Register {
	get validateAll() {
		return true
	}

	get rules() {
		return {
			name: 'required',
			email: 'required|email|unique:users',
			password: 'required|min:6',
			confirm_password: 'required|same:password'
		}
	}

	get messages() {
		return {
			'name.required': 'You must provide a name.',
			'email.required': 'You must provide a email address.',
			'email.email': 'You must provide a valid email address.',
			'email.unique': 'This email is already registered.',
			'password.required': 'You must provide a password.',
			'password.min':'Password must be of minimum 6 characters.',
			'confirm_password.required': 'You must provide a password confirmation.',
			'confirm_password.same': 'Passwords do not match. '
		}
	}

	async fails(errorMessages) {
		return this.ctx.response.jsend(errorMessages, "Bad Request", 400)
	}
}

module.exports = Register
