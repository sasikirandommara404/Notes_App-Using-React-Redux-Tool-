import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuid} from 'uuid' 
const initialState={
    nt:[],
    archive:[],
    important:[],
    bin:[]
}


const NotesStore=createSlice({
    name:'notes',
    initialState,
    reducers:{
        addToNote:(state,action)=>{
            state.nt.push({id:uuid(),note:action.payload})

        },
        addToArchive:(state,action)=>{
            const ar = action.payload
            state.archive.push(ar)
            state.nt = state.nt.filter((pro)=>pro.id !== ar.id)
           
        },
        RemoveAchive:(state,action)=>{
            state.archive=state.archive.filter((pro)=>pro.id !== action.payload )
        },
        addImportant:(state,action)=>{
            state.important.push(action.payload)
            var arr = state.important
            var i=0
            var arr1 = []
            while(i<arr.length){
                var j= i+1
                var duplicate = false
                while(j<arr.length){
                    if(arr[i]['id']==arr[j]['id']){
                        duplicate=true
                        break
                    }else{
                        j+=1
                    }
                }
            if(duplicate===false){
                arr1.push(arr[i])
            }
            i+=1
            }
            state.important=arr1
        },
        AddBin:(state,action)=>{
            const note = state.nt.find((pro)=>pro.id === action.payload) 
            console.log(note,'sasi')  
            state.nt=state.nt.filter((pro)=>pro.id !== note.id )
            state.bin.push(note)
            if(state.archive && state.archive.length>0){
                state.archive=state.archive.filter((pro)=>pro.id !==note.id )
            }
            if(state.important && state.important.length>0){
                state.important=state.important.filter((pro)=>pro.id !== note.id )
            }
          
        },
        PermanetlyDelete:(state,action)=>{
            state.bin=state.bin.filter((pro)=>pro.id !== action.payload )


        }
       
    }
})

export const {addToNote,addToArchive,RemoveAchive,addImportant,AddBin,PermanetlyDelete } = NotesStore.actions
export default NotesStore.reducer