import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStateType{
    value: number
}
// shape of the state inside our slice that is managed by reducer
const initialState: initialStateType = {
    value: 0
}


const counterSlice = createSlice({
    name:"counterSlice",
    initialState,
    //slice reducers (reducers deduce ki what state updates need to be done)
    reducers:{
        increment(state){
            state.value++
        },
        decrement(state){
            state.value--;
        }
    }
})

export const {increment,decrement} = counterSlice.actions 
export default counterSlice.reducer