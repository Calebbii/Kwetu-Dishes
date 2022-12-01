import { useState } from "react"
import {useNavigate} from "react-router-dom"
import '../style/form.css'

export default function Form({blognews}){
    const [formMeal, setFormMeal]= useState({
        title:"",
        date:new Date().toLocaleString() + "",
        description:"",
        image: ""
    })
    const navigate = useNavigate()

    function onHandleChange(e){
        const name = e.target.name
        let value = e.target.value

        setFormMeal({...formMeal,
        [name]:value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        blognews(formMeal)
        navigate('/menu')

    }

    return(
        <>
        
        <div className="row">
        <div className="col-md-3"></div>
            <div className="col-md-6">
            <h1>Add a Meal</h1>
                <form onSubmit={handleSubmit}>

                    <div>
                    <input onChange={onHandleChange} type="text" name="title" placeholder="Enter Meal Name" value={formMeal.title} />

                    </div>
                    <br></br>
                    <div>
                    <input onChange={onHandleChange} type="url" name="image" placeholder="Enter Image URL" value={formMeal.image} />
                    </div>
                    <br></br>
                    <button type="submit" className="btn-btn-outline-success">submit</button>
                </form>
            </div>
        <div className="col-md-3"></div>
            

        </div>
        </>

    )
}