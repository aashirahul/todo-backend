'use strict'

const Schema = use('Schema')

class TasksTableSchema extends Schema {

  up () {
    this.create('tasks', (table) => {
      table.increments()
      table.timestamps()
      table.string('goal')
      table.date('Due-date')

    })
  }

  down () {
    this.drop('tasks')
  }

}

module.exports = TasksTableSchema
