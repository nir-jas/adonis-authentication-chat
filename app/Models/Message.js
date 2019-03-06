'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Message extends Model {
	/**
	 * Message belongs to user
	 */
	user(){ 
		return this.belongsTo('App/Models/User')
	}
}

module.exports = Message
