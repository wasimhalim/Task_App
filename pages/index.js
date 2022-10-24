import Head from 'next/head'
import { supabase } from '../config/supabase'
import { useEffect,useState } from 'react'
import TaskItem from '../components/TaskItem'
import AddTask from '../components/AddTask';
export default function Home() {
  const [taskData, setTaskData] = useState([]);
 

  
  const fetchData=async ()=>{

      let localData=localStorage.getItem("data")
      let jsonOutput=JSON.parse(localData)
      setTaskData(jsonOutput.data)
     
      const {data,error}=await supabase.from("task").select() .order('id', { ascending: false })
      if(data){
        
      }
      if(error){
        window.alert("Internet Issue for loading data")
        fetchData()
      }
    } 
  
  useEffect(() => {
    
    fetchData()
    
    
  }, [])
  
  function delteOneItem(data){
   
    let localData=localStorage.getItem("data")
    localData=JSON.parse(localData)
    localData['data']=localData['data'].filter(item=>item!=data)
    localStorage.setItem('data',JSON.stringify(localData))

    fetchData()
    
  }
  return (
    <div  >
      <Head>
        <title>Task App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
     
     <div className='grid h-80 place-items-center'>
     <div className={`bg-white p-3 rounded-md ${taskData.length >0 ? 'mt-28':''}`}>
        <AddTask dataCall={fetchData} />

      {
        taskData.length >0 && <TaskItem fetchData={fetchData} delteOneItem={delteOneItem} data={taskData}/>
      }
      </div>
     </div>
    
    </div>
  )
}
