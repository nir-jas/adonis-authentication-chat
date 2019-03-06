'use strict'

class Auth {
  async handle ({ response, auth}, next) {
        try {
        	await auth.check()
        } catch (error) {
          response.header('WWW-Authenticate', 'Bearer realm="example"')
          response.jsend(null, 'Missing or invalid token', 401)
          return
        }
        await next()
        return
    }     
}


module.exports = Auth
