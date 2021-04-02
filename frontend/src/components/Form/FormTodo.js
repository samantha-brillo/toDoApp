import axios from 'axios'

export default function FormTodo({title, responsable, description, image, status}) {
    async function handleSubmit(event){
        event.preventDefault()
        const task = {
            title: event.target[0].value,
            responsable: event.target[1].value,
            description: event.target[2].value,
            image: event.target[3].value
        }
        const {data} = await axios.post('http://localhost:3000/api/todo', task)

    }
    return (
<div className="container">
    <div>
    <h3>Agrega una tarea nueva:</h3>
        <div className="card-body">
                <div className="row">
                    <div className="col">
                        <form onSubmit={handleSubmit}>
                            <input required className="form-control" placeholder={title}  type="text"/>
                            <input required className="form-control" placeholder={responsable}  type="text"/>
                            <input required className="form-control" placeholder={description}  type="text"/>
                            <input required className="form-control" placeholder={image}  type="text"/>
                            <br></br>
                            <div class="d-grid gap-2">
                            <button className="btn btn-outline-info" type="submit">Agregar Tarea</button>
                            </div>
                        </form>
                    </div>
                </div>
         </div>
    </div>
</div>       
    )
}
