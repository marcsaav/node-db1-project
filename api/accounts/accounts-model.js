const db = require('../../data/dbConfig')

module.exports = {
    getAll() {
        return db('accounts')
    },
    create(account) {
        return db('accounts')
            .insert(account)
            .then(([id]) => {
                return db('accounts')
                    .where('id', id)
            })
    },
    update(id, changes) {
        return db('accounts')
        .where('id', id)
            .update(changes)
            .then(([id]) => {
                return db('accounts')
                    .where('id', id)
                    .first()
            })
    },
    delete(id) {
        return db('accounts')
            .where('id', id)
            .del()
    }
}