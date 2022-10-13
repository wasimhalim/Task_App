import React,{useState} from 'react'
import PopUpModal from '../components/PopUpModal'
import { supabase } from '../config/supabase'
function TaskItem({data,fetchData}) {
   
    
    const deleteHandler=async (id)=>{
        const {status}=await supabase
        .from('task')
        .delete()
        .eq('id',id)
        if(status===204){
            fetchData()
            
            
        }else{
            window.alert('Network Issue')
        }
    }
  return (
    <>
        <div className={`h-80 p-2 mt-2 font-bold overflow-y-auto   scrollbar scrollbar-thumb-blue-400 scrollbar-width-2  scrollbar-track-gray-100 flex flex-col gap-2`}>
    
                         {
                        data.map((item,id)=>{
                            return (
                                <div key={id} className={`rounded-md transition-colors ${((id+1)/2)===0? 'bg-blue-300 hover:bg-blue-100 hover:text-white':'bg-blue-200 hover:bg-blue-100 '} cursor-pointer p-2 w-full `}>
                                    <div className='grid gap-16 place-items-center grid-cols-2'>
                                        <div><h6>{item.task}</h6></div>
                                        <div><span  className='text-red-400 hover:text-red-600 transition-colors'> <PopUpModal   deleteProp={deleteHandler} id={item.id} /></span></div>
                                    </div>
                                    
                                </div>
                              
                            )
                        })
                    }
        </div>
    </>
  )
}

export default TaskItem