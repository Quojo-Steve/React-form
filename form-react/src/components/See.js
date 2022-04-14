import React from 'react'
import { useRef, useState } from "react";

const See = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const usernameRef = useRef();
    const passwordRef = useRef();
    console.log(username, password);
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(usernameRef.current.value, passwordRef.current.value)
    };
  return (
    <div>
      <form className='h-[400px] w-[400px] bg-gray-200 rounded shadow-lg shadow-gray-500 bo flex flex-col px-10 gap-10 py-6 '>
          <div className='place-self-center'>
              <h1 className='text-2xl font-bold text-gray-700'>
                Login
              </h1>
              <small className='text-xs italic font-light text-gray-700'>
                my login
              </small>

          </div>

            <div>
              <label>Username</label>
              <input type="text" placeholder="Missy Dew" className="w-full h-10 outline-none border-b-2 rounded shadow border-emerald-700 bg-white px-5"
             ref={usernameRef}
             onChange={(e) => setUsername(e.target.value)}
              />
          </div>
            <div>
              <label>Password</label>
              <input type="text" required placeholder="Password" className="w-full h-10 outline-none border-b-2 rounded shadow border-emerald-700 bg-white px-5"
             ref={passwordRef}
             onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button className='bg-emerald-600 w-full h-14 text-white text-lg font-semibold hover:bg-emerald-700 rounded-md active:scale-75'>Login</button>
            </div>

      </form>
    </div>
  )
}

export default See
