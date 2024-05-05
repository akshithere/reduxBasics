import { FormEvent, FormEventHandler, useState } from "react"
import { useTypeSafeDispatch, useTypeSafeSelector } from "../app/hooks"
import {todoState} from '../features/todo/todoSlice'
import { todoObject } from "../features/todo/todoSlice"
import { updateTodo,createTodo,readTodo,deleteTodo } from "../features/todo/todoSlice"



export default function Todo(){
   

    const [formData,setFormData] = useState<todoObject>({
        id:0,
        title:'',
        description:''
    })
    const dispatch = useTypeSafeDispatch()
    const existingTodos:todoState = useTypeSafeSelector((state)=>state.todoSliceLabel)

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const deleteTodoHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        dispatch(deleteTodo(formData))
    }

    const handleSubmit= (e:React.ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault()
        // formData should be sent to the user this is how we send the data
        // id hai fir kya ho raha hai ki ye id ko yes maan ke update karna chah raha par vo logic update ka hai
        // in the redux 
        const isExistingTodo = existingTodos.some(todo => todo.id == formData.id)
        if(isExistingTodo){
            console.log("This is in updateTodo dispatch block")
            dispatch(updateTodo(formData))
        }else{
            console.log("This is in createTodo dispatch block")
            dispatch(createTodo([...existingTodos,formData]))
        }
        
    }
    
    return(
        <>
        <div>
        {existingTodos.map((todo)=>{
            return(
                <div>
                <h2>{todo.id}</h2>
                <h2>{todo.title}</h2>
                <h2>{todo.description}</h2>
                </div>
                
            )
        })}
        </div>

        <div>
        <form action="" onSubmit={handleSubmit}>
        <label htmlFor="id">ID: <br />
            <input name="id" type="number" onChange={handleChange} />
        </label><br />
        <label htmlFor="title">Title: <br />
            <input name="title" type="text" onChange={handleChange} />
        </label><br />
        <label htmlFor="description">Description: <br />
            <input name="description" type="text" onChange={handleChange} />
        </label><br />
        <button type="submit">Submit</button>
        <button onClick={deleteTodoHandler}>DeleteTodo</button>
        </form>

        </div>

        
            {/* UPDATE TODO: 
            <div>
        <form action="" onSubmit={(e)=>{e.preventDefault()}}>
        <label htmlFor="">ID: <br />
            <input type="number" onChange={(e)=>{newTodo.id = e.target.value}} />
        </label><br />
        <label htmlFor="">Title: <br />
            <input type="text" onChange={(e)=>{newTodo.title = e.target.value}} />
        </label><br />
        <label htmlFor="">Description: <br />
            <input type="text" onChange={(e)=>{newTodo.description = e.target.value}} />
        </label><br />
        <button type="submit" onClick={()=>{
            dispatch(updateTodo(newTodo))
        }}>Submit</button>
        </form>

        </div> */}
        </>
    )
}
//how can i go on with the createTodo thing mujhe dispatch karna hai ek action jo ki uss sliceReducer ko invoke kardega
//mera createTodo sliceReducer is object ya array leke state update krega kya lets see