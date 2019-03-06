'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MessagesSchema extends Schema {
  up () {
    this.create('messages', (table) => {
	  table.increments()
	  table.integer('user_id').notNullable()
	  table.string('message').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('messages')
  }
}

module.exports = MessagesSchema
