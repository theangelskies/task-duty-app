import React, { useState } from 'react';
import Form from '../components/Form';

const NewTask = () => {
  const [formData, setFormData] = useState({
    taskTitle:"",
    description:"",
    tag:""
  })
  const handleChange = (e)=>{
    const {name,value} = e.target;
    setFormData((prev)=>({...prev,[name]:value}))
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
  }
  return (
  
    <>
    <main className='wrapper'>
        <Form formTitle="New Task" formData={formData} onChange={handleChange} onSubmit={handleSubmit}/>
    </main>
    </>
  )
}

export default NewTask