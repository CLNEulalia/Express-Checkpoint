
const Todo = require('../models/todo-model')

const seedData = require('./todo-seeds.json')

Todo.deleteMany({})
.then( () => {
    return Todo.insertMany(seedData)
})
.then(console.log)
.catch(console.error)
.finally(() => {process.exit()})