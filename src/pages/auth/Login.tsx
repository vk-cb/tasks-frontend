
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple, FaFacebook } from 'react-icons/fa';
import SocialButton from '../../components/ui/socialButton/SocialButton';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import { handleChange } from '../../utility/usedFunctions';
import { LoginState } from '../../../interfaces';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login, User } from '../../store/reducers/auth';
import type { AppDispatch } from '../../store/store';
import { successAlert } from '../../components/ui/loader/loader';
const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [state, setState] = useState<LoginState> ({
    email : "",
    password : ""
  })

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const response = await dispatch(login(state))
    if(response?.meta?.requestStatus === "fulfilled"){
      const user = response.payload as User; 
      user?.data?.role==="user" ? navigate('/user/tasks') : navigate('/')
      
      successAlert(user?.msg || "Login Successfully")
    }
  };


  return (
    <div className=" w-full bg-linear-to-b from-[#9fd4ef] to-white min-h-screen flex flex-col items-center justify-center pt-20 sm:p-4 p-1 relative">
      <p className='absolute top-8 left-4 text-3xl font-bold italic bg-gradient-to-r from-blue-600 to-teal-500 inline-block text-transparent bg-clip-text'>
  TaskMaster
</p>
      <div className="max-w-md w-full bg-linear-to-b from-[#c6f0fb] to-white p-8 rounded-lg shadow-sm">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 inline-block text-transparent bg-clip-text mb-2">
          Organize your world, master your workflow
          </h1>
          <p className="text-gray-600">
          Craft, Track, and Conquer goals in one free hub
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 ">
          <div className="space-y-4">
            {/* <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            /> */}
            <Input name='email' type='email' placeholder='Enter Your Email' value={state.email} onChange={(e)=>handleChange(state, setState, e.target.name as keyof LoginState, e.target.value)} />

            <Input name='password' type='password' placeholder='Enter Your Password' value={state.password} onChange={(e)=>handleChange(state, setState, e.target.name as keyof LoginState, e.target.value)}/>
            
           
          </div>

          <Button type='submit' text="Login" btnClass='w-full cursor-pointer py-2' variant='outline'/>
          <div className="text-center">
            <Link to="/register" className="text-sm ">
              don't have an account? <span className='text-blue-600 hover:underline'> Register here</span>
            </Link>
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