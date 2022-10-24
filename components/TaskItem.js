import React,{useState} from 'react'
import PopUpModal from '../components/PopUpModal'
import { supabase } from '../config/supabase'
function TaskItem({data,fetchData,delteOneItem}) {
   
    
    const deleteHandler= (id)=>{
        delteOneItem(id)
    }
  return (
    <>
        
        <div className={`h-80 p-2 mt-2 font-bold overflow-y-auto   scrollbar scrollbar-thumb-blue-400 scrollbar-width-2  scrollbar-track-gray-100 flex flex-col gap-2`}>
    
                         {
                        data.slice(0).reverse().map((item,id)=>{
                            return (
                                <div key={id} className={`rounded-md transition-colors ${((id+1)/2)===0? 'bg-blue-300 hover:bg-blue-100 hover:text-white':'bg-blue-200 hover:bg-blue-100 '} cursor-pointer p-2 w-full `}>
                                    <div className='grid gap-16 place-items-center grid-cols-2'>
                                        <div className=''>
                                            
                                            <div><h6> {item}</h6></div>
                                        </div>
                                        <div><span  className='text-red-400 hover:text-red-600 transition-colors'> <PopUpModal   deleteProp={deleteHandler} id={item} /></span></div>
                                    </div>
                                  
                                </div>
                              
                            )
                        })
                    }
                    
                    
        </div>
        <hr />
        <h6 className='text-center text-blue-400'>App Created By:Wasim Halim</h6>
    </>
  )
}

export default TaskItem