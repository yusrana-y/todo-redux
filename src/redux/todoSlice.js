import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"todo",
    initialState:[],
    reducers:{
        //actions when store needs to be updated
        //add Todo
        addTodo: (state,TodofromComponentAction)=>{
            state.push({
                id:Date.now(),
                text:TodofromComponentAction.payload,
                completed:false
            })
        },

        //remove Todo
        removeTodo: (state,TodoIdfromComponentAction)=>{
           return state.filter(item=>item.id!=TodoIdfromComponentAction.payload)
        },

        //complete task completed = true
        completedTodo  : (state,TodoIdfromComponentAction)=>{
            const completedTodo = state.find(todo=>todo.id===TodoIdfromComponentAction.payload)
            if(completedTodo)
            {
                completedTodo.completed = !completedTodo.completed
            }
        }
    }
})

export default todoSlice.reducer
export const {addTodo,removeTodo,completedTodo} = todoSlice.actions