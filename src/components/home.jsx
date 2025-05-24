import { useDispatch,useSelector } from "react-redux";
import {addToNote,addToArchive,addImportant,AddBin} from '../slice/index.js'
import {useState} from 'react'

export const Home = () => {
  const [input,setInput] = useState('')
  console.log(input)
  const dispatch=useDispatch()
  const Inserting =()=>{
    dispatch(addToNote(input))
    setInput('')
  }

  const value = useSelector(state=>state.notes.nt)
  console.log(value)
  const Archive=(id)=>{
    const archi = value.find((pro)=>pro.id === id) 
    dispatch(addToArchive(archi))
    const PopUp=()=>{
      alert('Added To Archive')
    }
    PopUp()

  }
  const important =(id)=>{
    const imp = value.find((pro)=>pro.id === id) 
    dispatch(addImportant(imp))
    const PopUp=()=>{
      alert('Added To Important')
    }
    PopUp()

  }
  const Delete =(id)=>{
    dispatch(AddBin(id))

  }
 
  
  return (
    <>
      <div className="flex flex-col w-80 p-5 border border-gray-100 ml-60  pt-10 gap-4 shadow-xl/20">
        <div className="w-full flex justify-center">
            <input value={input}onChange={(e)=>setInput(e.target.value)}
                className="w-full border-none outline-none px-2 py-1"
                placeholder="Enter Note"/>
        </div>
        <div className="w-full flex justify-end" >
            <button onClick={Inserting} className="bg-blue-500 text-white rounded-full p-2">
              <span className="material-symbols-outlined">add</span>
            </button>
        </div>
      </div>
      <div className='ml-30 pt-8 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
      {
        value?.length>0? value.map((pro)=>{
          return(
            <div className=' flex flex-col border h-35 w-50 border-gray-100 shadow-xl/30 text-center ' key={pro.id}>
                <p 
                    className='text-center pt-6 w-full h-full overflow-auto'>{pro.note}
                </p>
                <div className='flex gap-4 text-center ml-10'>
                  <button onClick={()=>Archive(pro.id)}> <span className="material-symbols-outlined w-full h-full ">archive</span></button>
                  <button onClick={()=>important(pro.id)}> <span className="material-symbols-outlined">label_important</span></button>
                  <button onClick={()=>Delete(pro.id)}> <span className="material-symbols-outlined">delete</span></button>
                </div>
               
                
         
               
            </div>
          )
        })
        :<p>No Notes Available here  </p>
      }
      </div>
    
    
    </>
  );
};
