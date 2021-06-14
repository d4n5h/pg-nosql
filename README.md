# pg-nosql

## Installation:
```$ npm install pg-nosql```

## Example:
```javascript
const pgnosql = require('pg-nosql');
const knex = pgnosql(require('knex'));

const db = knex({
    client: 'pg',
    connection: {
        user: 'postgres',
        host: 'localhost',
        database: 'dbname',
        password: 'root',
        port: 5432,
    }
});

// Insert
db.from('test2').add({
    id: 0,
    text: 'hello'
}).then((result) => {
    console.log(result)
})

// Find and update
test.find('id', 0).revise({
    id: 1,
    text: 'Goodbye',
}).then((result) => {
    console.log(result)
})
```