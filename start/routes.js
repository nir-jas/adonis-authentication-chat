'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
	Route.post('/register', 'AuthController.register').validator(['Register'])
	Route.post('/login', 'AuthController.login').validator(['Login'])
})
.namespace('Api/V1')
.middleware(['header'])
.prefix('api/v1');

Route.group(() => {
	Route.post('/message', 'ChatController.create').validator(['SendMessage'])
	Route.get('/messages', 'ChatController.index')
})
.namespace('Api/V1')
.middleware(['header','auth'])
.prefix('api/v1');


