'use client'
import react from "react"
import { useState } from "react"


function LoginPage(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmitForm = (e) =>{
        e.preventDefault()

    }
    return(
        <>
            <main className="min-h-screen flex">
                <div className="w-1/2 flex flex-col pt-24 pl-12 items-center">
                    <p className="text-3xl">Welcom Back</p>
                    <p className="pt-1 text-sm">Welcom Back! Please enter your details.</p>
                    <form action="" onSubmit={(e) =>{handleSubmitForm(e)}}>
                        <div className='flex flex-col pt-10 space-y-5'>

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
                            <div className="flex pt-1 space-x-20">
                                <div className="flex space-x-2"> 
                                    <input type="checkbox" className="cursor-pointer"/>
                                    <div>Remeber for 30 days</div>
                                </div>
                                <div>
                                    <p className="text-[#6941C6] text-sm cursor-pointer">Forgot password</p>
                                </div>


                            </div>
                            <div className="pt-4">
                                <button className='w-[24rem] h-10 rounded-md bg-[#27779B] text-white max-md:w-[16rem]'
                                    type='submit' 
                                    >Log In</button>
                            </div>



                        </div>



                            
                    </form>
                    <div className="pt-24">
                        <p className="text-sm">Don't have an account? 
                        <span className="text-blue-300"><a href=""> Sign Up</a></span></p>
                    </div>

                </div>
                <div className="bg-[url('./images/bg.png')] min-h-screen w-1/2">
                    {/* <h3>Head</h3> */}

                </div>

            </main>
        </>
    )
}


export default LoginPage