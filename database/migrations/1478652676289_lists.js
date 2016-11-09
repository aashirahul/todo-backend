'use strict'

const Schema = use('Schema')

class ListsTableSchema extends Schema {

  up () {
    this.create('lists', (table) => {
      table.increments()
      table.timestamps()
      table.string('title')
      table.date('createdAt')
      table.boolean('completed')
    })
  }

  down () {
    this.drop('lists')
  }

}

module.exports = ListsTableSchema
