import React from 'react'

export default function Form({formSubmitHandler,random,checkBoxHandler,setCountVal,countVal,search,setSearch}) {
  return (
    <form onSubmit={formSubmitHandler} className=' p-20 flex align-center justify-center'>
       <div className=' flex align-center justify-center '>
       <input type="text" className='border border-black mx-2 p-2 rounded '  value={search} disabled={random}  onChange={(e)=>setSearch(e.target.value)}  name='search' placeholder='Enter search query'/>
        <input type="text"  className='border border-black mx-2  p-2 rounded' value={countVal} onChange={(e)=>setCountVal(e.target.value)} name='count' placeholder='Enter Count'/>
        <input type="checkbox" className='border border-black mx-2 p-2 rounded '  checked={random}  onChange={checkBoxHandler} />
        <button type='submit'  className='border border-black mx-2 p-2 rounded ' >Search</button>
       </div>
    </form>
  )
}
