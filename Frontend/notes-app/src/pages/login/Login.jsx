import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import {Link} from 'react-router-dom';
import PasswordInput from '../../components/input/PasswordInput';
const Login = () => {
  return <>
 <Navbar/>
 <div className='flex item-center justify-center mt-28'>
  <div className='w-96 border rounded bg-white px-7 py-10'>
    <form onSubmit={()=> {}}>
      <h1 className='text-2xl mb-7'>Login</h1>

      <input type="text" placeholder='Email' className='input-box' />
      <PasswordInputput />
      <button type='submit' className='btn-primary' >Login</button>
      <p className='text-sm text-center mt-4'>Not register yet? {""}<Link to="/SignUp" className="font-medium text-primary underline">
        Create an Account
      </Link>
      
      </p>
    </form>

  </div>
 </div>
  </>;
}

export default Login
