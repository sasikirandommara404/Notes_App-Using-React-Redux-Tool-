import logo from '../assets/notes.jpg'
export const Navbar=()=>{
    return(
         <header className='flex px-3 py-1 gap-3 border-b-2 border-gray-100'>
            <div className='w-11 h-11'>
                 <img   className='h-full w-full'src={logo} alt='logo'/>

            </div>
           
            <h1 className='text-indigo-800 text-4xl font-bold'>Notes</h1>
        </header>
    )
   
}