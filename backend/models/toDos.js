const mongoose = require('mongoose')
const toDoSchema = new mongoose.Schema({
    title: String,
    author: String,
    responsable: String,
    description: String,
    priority: String,
    image: String,
    status: String,
})

const ToDos = mongoose.model('ToDos', toDoSchema)

module.exports = ToDos