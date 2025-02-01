// import React from 'react'

// const Login = () => {
//   return (
//     <div className="flex justify-center items-center  bg-linear-to-b from-[#9fd4ef] to-white min-h-screen">
      
//       <div className="#c6f0fb">

//       </div>
//     </div>
//   )
// }

// export default Login
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple, FaFacebook } from 'react-icons/fa';
import SocialButton from '../../components/ui/socialButton/SocialButton';
import Button from '../../components/button/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
  };

  return (
    <div className=" bg-linear-to-b from-[#9fd4ef] to-white min-h-screen flex flex-col items-center justify-center sm:p-4 p-1 relative">
      <p className='absolute top-2'>TaskMaster</p>
      <div className="max-w-md w-full bg-linear-to-b from-[#c6f0fb] to-white p-8 rounded-lg shadow-sm">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Organize your world, master your workflow
          </h1>
          <p className="text-gray-600">
          Craft, Track, and Conquer goals in one free hub
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 ">
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <Button type='submit' text="Login" className='w-full cursor-pointer py-2' variant='outline'/>
          <div className="text-center">
            <a href="/forgot-password" className="text-sm ">
              don't have an account? <span className='text-blue-600 hover:underline'> Register here</span>
            </a>
          </div>
        </form>

        <div className="my-6 flex items-center">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm">Or sign in with</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <SocialButton icon={<FcGoogle className="text-xl" />} provider="Google" />
          <SocialButton icon={<FaApple className="text-xl" />} provider="Apple" />
          <SocialButton icon={<FaFacebook className="text-xl text-blue-600" />} provider="Facebook" />
        </div>
      </div>
    </div>
  );
};



export default Login;