import {useSelector,useDispatch} from 'react-redux'
import { RemoveAchive } from '../slice'
export const Archie =()=>{
    const arch = useSelector(state=>state.notes.archive)
    const dispatch = useDispatch()
    const remove =(id)=>{
        dispatch(RemoveAchive(id))


    }
    return(
    <>
    
        <div className='ml-30 pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4' >
            {
                arch?.length>0?arch.map((pro)=>{
                    return(
                        <div key={pro.id}className=' flex flex-col border h-35 w-50 border-gray-100 shadow-xl/30 text-center'>
                            <p className="text-center pt-4 overflow-auto w-full h-full ">{pro.note}</p>
                            <button onClick={()=>remove(pro.id)} className='flex  item-end'><span className=" material-symbols-outlined ">delete</span></button>
                
                        </div>
                        
                    )
                }):<h6>No Achivements are Available</h6>
            }

            
            
        </div>
    
    </>
    )
}