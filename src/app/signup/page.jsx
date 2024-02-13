"use client"

import React from 'react'
import Image from 'next/image'
import registerImage from "../images/section.png"
import stars from "../images/Stars.png"
import { useState } from 'react'


function Page() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmitForm = async(e) =>{
    e.preventDefault()
    console.log('hello')

    const formData = new FormData(e.target)
    // const data = Object.fromEntries(formData)
    // const finalData = {...data, lastname: 'udo'}
    // const JsonData = JSON.stringify(finalData)
    const data = {firstname: 'Kingsley', lastname: 'Udo', email: 'kingscode124@gmail.com', password: 'kingopara277'}
    const JsonData = JSON.stringify(data)

    const APIEndpoint = 'https://devapi.omacart.com/signupapi/signup/'
    const options = {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JsonData

    }

    console.log(JsonData)
    const submitForm = await fetch(APIEndpoint, options)
    console.log(submitForm)


  }
  return (
    <main className='w-full flex h-full min-h-screen max-md:flex-col'>
        <div className="h-full min-h-screen w-[55%] max-md:min-w-screen max-md:w-full 
        bg-[url('./images/section.png')] relative object-contain">
            {/* <Image src={registerImage} className='w-3/4 min-h-screen'/> */}
            <div className='absolute top-[30%] left-24 max-md:top-[10%]'>
              <Image src={stars} className=''/>
            </div>
            <div className='pt-[20rem] text-white pl-[6rem] leading-10 max-md:pt-[10rem]'>
              <h2 className='text-5xl'>Start turning your</h2>
              <h2 className='text-5xl pt-4'> ideas into reality.</h2>
            </div>
            <div className='pt-6 text-white pl-24 leading-6'>
              <p>Create a free account and get full access to 
                all features for 30-days.</p>
              <p className=''>No credit card needed. 
              Trusted by over 4,000 professionals.</p>  

            </div>
        </div>
        <div className='h-full min-h-screen'>
          <div className='mt-16 pl-20'>
            <h2 className='text-2xl'>Sign Up</h2>
            <form action="" onSubmit={(e) =>{handleSubmitForm(e)}}>
              <div className='flex flex-col pt-10 space-y-5'>
                <div className='flex flex-col space-y-3'>
                  <label htmlFor="">Name*</label>
                  <input type="text"
                  name='firstname'
                  value={name}
                  onChange={(e) =>{setName(e.target.value)}} 
                  
                  className='h-9 w-[27rem] rounded-lg p-6 max-md:w-[18rem]' placeholder='Enter your name'/>
                </div>
                <div className='flex flex-col space-y-3'>
                  <label htmlFor="">Email*</label>
                  <input type="text"
                  name='email'
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}} 
                  className='h-9 w-[27rem] rounded-lg p-6 max-md:w-[18rem]' placeholder='Enter your email'/>
                </div>
                <div className='flex flex-col space-y-3'>
                  <label htmlFor="">Password*</label>
                  <input type="password"
                  name='password'
                  value={password}
                  onChange={(e)=>{setPassword(e.target.password)}} 
                  className='h-9 w-[27rem] rounded-lg p-6 max-md:w-[18rem]' placeholder='Create a password'/>
                </div>

              </div>
              <div className='pt-1'>
                  <p className='text-sm'>Must be at least 8 characters.</p>
                </div>
                <div className='pt-20 pl-6'>
                  <button className='w-[24rem] h-10 rounded-md bg-[#27779B] text-white max-md:w-[16rem]'
                  type='submit' 
                  >Get Started</button>
                  <div className='pt-10 pl-14 text-sm max-md:pl-10'>
                    <p>Already have an account? <a href="" className='text-[#27779B]'>Log In</a></p>
                  </div>
                </div>
                
            </form>

          </div>

        </div>
      
    </main>
  )
}

export default Page
