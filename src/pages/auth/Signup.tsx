import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple, FaFacebook } from 'react-icons/fa';
import SocialButton from '../../components/ui/socialButton/SocialButton';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import { SignupState } from '../../../interfaces';
import { handleChange } from '../../utility/usedFunctions';
import { Link } from 'react-router-dom';
import Select from '../../components/select/Select';

const Signup = () => {

  const [state, setState] = useState<SignupState>({
    name : "",
    email : "",
    role : "",
    password : ""
  })

  const handleSubmit = (e:any) => {
    e.preventDefault();
  };

  return (
    <div className="w-full bg-linear-to-b from-[#9fd4ef] to-white min-h-screen flex flex-col items-center justify-center sm:p-4 p-1 relative">
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
           
            <Input type='text' placeholder='Enter Your Name' value={state.email} onChange={(e)=>handleChange(state, setState, e.target.name as keyof SignupState, e.target.value)} />
            <Input type='email' placeholder='Enter Your Email' value={state.email} onChange={(e)=>handleChange(state, setState, e.target.name as keyof SignupState, e.target.value)} />

<Input type='password' placeholder='Enter Your Password' value={state.email} onChange={(e)=>handleChange(state, setState, e.target.name as keyof SignupState, e.target.value)}/>

<Select placeholder='Select Role' />
           
          </div>

          <Button type='submit' text="Signup" className='w-full cursor-pointer py-2' variant='outline'/>
          <div className="text-center">
            <Link to="/" className="text-sm ">
              Already have an account? <span className='text-blue-600 hover:underline'>Login here</span>
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



export default Signup;