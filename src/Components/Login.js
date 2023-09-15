import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm , setIsSignInForm] = useState(true)

  const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header/> 
        <div className='absolute'>
         <img 
            alt="background-cover" 
            src ="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>
        </div>
        <form className='w-3/12 bg-black p-8 absolute my-44 mx-auto right-0 left-0 text-white rounded-xl bg-opacity-80'>
          <h1 className='font-bold text-3xl py-1'>{isSignInForm? "Sign In" :"Sign Up"}</h1>
          {!isSignInForm && <input type="text" 
          placeholder='Full Name' 
          className='p-2 my-3 w-full rounded-md bg-gray-700'/>}
          <input type="text" 
          placeholder='Email Address' 
          className='p-2 my-3 w-full rounded-md bg-gray-700'/>
          <input type="password" 
          placeholder='Password' 
          className='p-2 my-3 w-full rounded-md bg-gray-700'/> 
          <button 
          className='p-3 my-4 bg-red-800 rounded-lg text-white w-full '>
            {isSignInForm ? "Sign In" :"Sign Up"} </button>
          <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm? "New to NetFlix ? SignUp Now": "Already registered? Sign In now"}</p>
        </form>
        
    </div>
  )
}

export default Login