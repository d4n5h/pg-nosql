const {
    v4: uuid
} = require('uuid');

module.exports = function (knex) {
    knex.QueryBuilder.extend('find', function () {
        if (arguments.length == 2) {
            this.whereRaw("data -> '" + arguments[0] + "' = '" + arguments[1] + "'")
        } else if (arguments.length == 3) {
            this.whereRaw("data -> '" + arguments[0] + "' " + arguments[1] + " '" + arguments[2] + "'")
        }
        return this
    })

    knex.QueryBuilder.extend('revise', function (data) {
        return this.update({
            data: this.client.raw(`data::jsonb || '` + JSON.stringify(data) + `'`)
        })
    })

    knex.QueryBuilder.extend('add', function (data) {
        return this.insert({
            id: uuid(),
            data: data
        })
    })

    return knex
}