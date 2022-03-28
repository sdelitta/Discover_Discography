const db = require('../db')
db.on('error', console.error.bind(console,'DB Connection Error'))

db.dropDatabase();

console.log("DB DROPPED")