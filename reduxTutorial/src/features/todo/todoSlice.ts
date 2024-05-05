//CRUD Todo
import { createSlice,PayloadAction,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
export interface todoObject{
    id:number,
    title:string,
    description:string
}
export type todoState = todoObject[]
const initialState:todoState = [];

export const fetchAnything = createAsyncThunk('',async () =>{
    const res = await axios.get('https://random-data-api.com/api/v2/users?size=2&is_xml=true')
    console.log(res.data)
    console.log('stringified data below-')
    console.log(JSON.stringify(res.data))
})

const todoSlice = createSlice({
    name:'todoSlice',
    initialState,
    reducers:{
        createTodo(state,action:PayloadAction<todoState>){
            console.log("Payload recieved by the action is: "  + JSON.stringify(action.payload))
          return state = action.payload;
        },
        readTodo(state){
            return state
        },
        updateTodo(state,action:PayloadAction<todoObject>){
          const id =  action.payload.id
          state.map((todo)=>{
            if(todo.id == id){
                todo.title = action.payload.title
                todo.description = action.payload.description
            }
          })

        },
        deleteTodo(state,action:PayloadAction<todoObject>){
            return state.filter((todo)=>todo.id!=action.payload.id)

        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchAnything.pending,()=>{})
        builder.addCase(fetchAnything.fulfilled,()=>{})
        builder.addCase(fetchAnything.rejected,()=>{})
    }
})

export default todoSlice.reducer;
export const {createTodo,readTodo,updateTodo,deleteTodo} = todoSlice.actions