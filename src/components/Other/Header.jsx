import React, { useState } from 'react'

function Header(props) {
  console.log(props)
  // const [userName, setUserName] = useState("");
  // if(!data){
  //   setUserName("Admin")
  // }
  // else{
  //   setUserName(data.firstName)
  // }
  const userLogOut = ()=>{
    localStorage.setItem("loggedInUser","");
    props.changeUser("")
    // window.location.reload()
  }
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>UserName 🙂</span>  </h1>
      <button onClick={userLogOut} className='bg-red-500 text-white px-5 py-2 rounded-sm text-lg font-medium'>Log out</button>
    </div>
  )
}

export default Header
