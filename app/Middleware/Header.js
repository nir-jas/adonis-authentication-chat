'use strict'

class Header {
	async handle({
		request,
		response
	}, next) {
		if (request.method() === "GET" || ((request.header('content-type') && request.header('content-type').includes( "application/json")) &&
				request.header('accept') === "application/json")) {
			await next()
			return
		}

		return response.jsend(null, "Improper Headers", 406);
	}
}

module.exports = Header
