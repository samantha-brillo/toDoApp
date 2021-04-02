import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';
import Task from '../src/components/task/Task'
import FormTodo from './components/Form/FormTodo';

function App() {
  const [toDos, setToDos] = useState(null)

  useEffect(() => {
    async function getToDos() {
      const { data } = await axios.get('http://localhost:3000/api/todos')
      setToDos(data)
    }

    getToDos(toDos)
  }, [])

  return (
    <div>
      <nav class="navbar navbar-light bg-dark">
        <div className='Titulo'class="container-fluid">
           <h1>ToDoApp</h1>
        </div>
      </nav>
    
   
      <FormTodo
          title = "Escribe el titulo"
          responsable ="Escribe el nombre del responsable"
          description = "Escribe la descripción"
          image = "Aqui url de tu imagen"
      />
      {/* optional chaining -> ?. */}
      {toDos?.map(todo => (
        <div className = 'container'>
          <div class="row">
              <div class="col-sm">
                <Task 
                title = {todo.title}
                  responsable = {todo.responsable}
                  description = {todo.description}
                image = {todo.image}
                />            
              </div>
            <div class="col-sm">
                <Task 
                title = {todo.title}
                responsable = {todo.responsable}
                description = {todo.description}
                image = {todo.image}
            />            
            </div>
          </div>        
        </div>
      ))}
       
    </div>
  )
}

export default App