import React,{useState,useEffect} from 'react'
import { supabase } from '../config/supabase';

function AddTask({dataCall}) {
    const [task, setTask] = useState("");
    const [emptyMessageErrorDisplay, setEmptyMessageErrorDisplay] = useState("hidden")
    const [successMessageDisplay, setSuccessMessageDisplay] = useState("hidden")
    const [AddStatus, setAddStatus] = useState(false)
    const handleForm=async (browser)=>{
    browser.preventDefault()
    task=task.trim()
    if(!task){
      setEmptyMessageErrorDisplay("")
    }else{
      setEmptyMessageErrorDisplay("hidden")
      setAddStatus(true)
      const {data,error,status}=await supabase
      .from("task")
      .insert([{task:task,status:'400'}])
    
     if(status===201){
      setTask("")
      dataCall()
      setAddStatus(false)
      setSuccessMessageDisplay("")
      window.setTimeout(()=>{
      setSuccessMessageDisplay("hidden")

      },5000)
      
     }else{
      setAddStatus(false)
      window.alert("Internet Issue")
     }

    }
  }
  return (
    < >
        <form onSubmit={handleForm}>
            <div className='flex flex-row justify-center gap-3'>
            <div>
                 <input value={task} onChange={(e)=>setTask(e.target.value)} type="text" className='md:w-80 md:h-10 font-bold outline-none p-2  text-lg border-2 border-blue-600 rounded-md' placeholder='New Task ....' autoFocus />
            
            </div>
            <div>
                 <input type="submit" value={`${AddStatus ? "Wait":"Add"}`} className={`${AddStatus ? 'cursor-wait':''} md:h-10 border-2 transition-colors  hover:text-white cursor-pointer rounded-md outline-gray-400 font-bold bg-blue-600  text-white hover:bg-white hover:text-blue-600 border-blue-600 p-2 `} />
            </div>
            </div>

            <div className={`p-2 transition-all  mt-2 ${emptyMessageErrorDisplay} bg-red-100 rounded-lg`}>
                 <h5 className='text-red-600'>Please Fill the Input Properly</h5>
            </div>
            <div className={`p-2 transition-all  m-2 ${successMessageDisplay} bg-green-300 rounded-lg`}>
                 <h5 className='text-gray-600'>Task Successfully Added</h5>
            </div>
        </form>
    </>
  )
}

export default AddTask