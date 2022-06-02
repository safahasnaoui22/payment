import axios from 'axios'

import React, { useState } from 'react'

function Payment() {
  const [form, setForm] = useState({})
  const OnChange = (e)=>{
      setForm({
        ...form,
        [e.target.name]: e.target.value
      })
  }

const OnSubmit = (e)=>{
e.preventDefault ();
axios
.post("/api/payment " , form)
.then(res =>{
  const {result} = res.data
 window.location.href = result.link;
} )
.catch(err => console.error(err));
}

  return (
    <div  className='p-4' >
    <h2>Payment Page</h2>
    <form className='m-4'  onSubmit={OnSubmit} >
    <input type="text" name='amount' className='form-control' onChange={OnChange} />
    <button className='btn btn-primary mt-4'>paye</button>
    </form>
    
    
    
    </div>
  )
}

export default Payment