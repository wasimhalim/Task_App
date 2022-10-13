import  Popup from 'reactjs-popup'
import { FaTrash } from "react-icons/fa";
const Modal = ({deleteProp,id}) => (
   
  <Popup trigger={<FaTrash />} modal>
   
  {(close) => (

    
                    <div className='bg-white p-2  border-2 w-80 border-gray-300 rounded-md'>
                        <p className='text-right cursor-pointer' onClick={()=>close()}>&times;</p>
                        <hr className='' />
                        <h1 className='p-1 text-center text-2xl'>Are you sure</h1>
                        <hr />

                           <div className=' mx-auto text-center'>
                             <button onClick={()=>{
                                deleteProp(id)
                                close()
                                }} className='outline-none bg-red-500 p-2 mt-1 rounded-md font-bold text-white border-2 transition-all hover:border-red-500 hover:bg-white hover:text-red-500'>Delete</button>
                             <button onClick={()=>close()} className='bg-green-500 p-2 mt-1 rounded-md font-bold text-white border-2 outline-none transition-all hover:border-green-500 hover:bg-white hover:text-green-500'>Cancel</button>
                       </div>
      
                    </div>
  )}
    
  </Popup>
);
export default Modal