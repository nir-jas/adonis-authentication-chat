/*
 * @Author: Nirmal Jasmatiya 
 * @Date: 2019-03-05 23:14:22 
 * @Last Modified by: Nirmal Jasmatiya
 * @Last Modified time: 2019-03-06 04:20:30
 */
'use strict'

const User = use('App/Models/User')
const Logger = use('Logger')

/**
 * AuthController
 */
class AuthController {

	/**
	 * Register User
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Auth} ctx.auth
	 * @param {Response} ctx.response
	 */
	async register({
		request,
		auth,
		response
	}) {
		const userData = request.only(['name', 'email', 'password'])

		try {
			const user = await User.create(userData)
			const token = await auth.generate(user)

			response.jsend({
				user: user,
				token: token
			}, "Registration Successfull")
			return
		} catch (error) {
			Logger.error("Registration Failed \n", error)

			response.jsend(null, "Something went wrong", 500)
			return
		}
	}

	/**
	 * Login
	 * 
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Auth} ctx.auth
	 * @param {Response} ctx.response
	 */
	async login({
		request,
		response,
		auth
	}) {
		try {
			const token = await auth.attempt(request.input('email'), request.input('password'));
			const user = await User.findBy('email', request.input('email'))

			response.jsend({
				user: user,
				token: token
			}, "Successfully Loggedin")
			return
		} catch (error) {
			if (error.name === 'PasswordMisMatchException') {
				response.jsend(null, "Invalid email/password", 400)
				return
			}

			if (error.name == 'UserNotFoundException') {
				response.jsend(null, 'You first need to register!', 400)
				return
			}

			Logger.error("Login Failed " + error.name + '\n', error)

			response.jsend(null, "Something went wrong", 500)
			return
		}
	}
}

module.exports = AuthController
