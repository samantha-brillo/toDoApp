const express = require('express')
const router = express.Router()
const ToDo = require('../models/toDos')

router.get('/todos', async (req, res) => {
    
    const todos = await ToDo.find()
    res.status(200).json(todos)
  })
  
  router.get('/todo/:id', async (req, res) => {
    const { id } = req.params
    const todo = await ToDo.findById(id)
    res.status(200).json(todo)
  })
  
  router.post('/todo', async (req, res) => {
    const { title, author,responsable, priority, status, description, image } = req.body
  
    const todo = await ToDo.create({
      title,
      author,
      responsable,
      description,
      priority,
      image,
      status
    })
  
    res.status(200).json(todo)
  })
  
  router.put('/todo/:id', async (req, res) => {
      const {id} = req.params
      const { title, author,responsable, priority, status, description, image } = req.body
      const todo = await ToDo.findByIdAndUpdate(id, {title, author,responsable, priority, status, description, image},{new:true})
      .then(updatedToDo => res.send(todo))
      .catch(error => res.status(500))
  })
  
  router.delete('/todo/:id', async (req, res) => {
    const { id } = req.params
  
    await ToDo.findByIdAndDelete(id)
  
    res.status(200).json({ message: 'Task deleted' })
  })
  
  module.exports = router
  