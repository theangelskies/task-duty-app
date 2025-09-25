import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Form from '../components/form';
import { taskData } from '../db';

const Task = () => {
  const [formData, setFormData] = useState({
      taskTitle:"",
      description:"",
      tag:""
    })
    const {taskId} = useParams()
    const findTask = taskData.find((taskDatum)=>String( taskDatum.id) === String(taskId))

    const handleChange = (e)=>{
    const {name,value} = e.target;
    setFormData((prev)=>({...prev,[name]:value}))
  }
    const handleSubmit = (e)=>{
    e.preventDefault()
  }

  useEffect(()=>{
    if(findTask){
      setFormData({
        findTitle:find.taskTitle || "",
        description:findTask.description || "",
        tag:findTask.tag || ""
      })
    }
  }, [findTask])

  return (
    <>
    <main className='wrapper'>
       <Form formTitle="Edit Task" formData={formData} onChange={handleChange} onSubmit={handleSubmit} ></Form>
        </main>
        </>
  )
}



export default Task