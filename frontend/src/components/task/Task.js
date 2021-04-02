import React from 'react'
import './style.css'

export default function Task({title, responsable, description, image, status}) {
    return (
       <div className= 'body'>
        <div className = 'Card'>
            <img 
                className = 'Image'
                src = {image}
                alt = {description}
            />
            <div className = ' cardInfo'>
                <h2 className = 'Title'>Titulo: {title}</h2>
                <h4 className = 'Responsable'> Responsable: {responsable}</h4>
                <p className = 'Description'>Descripción: {description}</p>
                <div class="d-grid gap-2">
                <button className = 'button1'class="btn btn-outline-warning">Edit</button>

                <button className = 'button2'class="btn btn-outline-danger">Delete</button>
                </div>
            </div>

            
        </div>
    </div>  
    )
}
