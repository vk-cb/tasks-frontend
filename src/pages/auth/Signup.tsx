import {  useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";
import SocialButton from "../../components/ui/socialButton/SocialButton";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import { SignupState } from "../../../interfaces";
import { handleChange } from "../../utility/usedFunctions";
import { Link, useNavigate } from "react-router-dom";
import Select from "../../components/select/Select";
import { getRoles} from "../../container/apiCall/common";
import { useDispatch } from "react-redux";
import { register } from "../../store/reducers/auth";
import { AppDispatch } from "../../store/store";
import {  successAlert } from "../../components/ui/loader/loader";

const Signup = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate();
  const [state, setState] = useState<SignupState>({
    name: "",
    email: "",
    role: "",
    password: "",
  });
  const [roles, setRoles] = useState([])

  const handleSubmit = async(e: any) => {
    e.preventDefault();
    const res = await dispatch(register(state))
     if(res?.meta?.requestStatus === "fulfilled"){
           navigate('/')
           
          successAlert("User Created Successfully")
        }
        
  };
  const fetchRoles = async()=>{
    
   const res = await getRoles()
   if(res.status === 200){
    setRoles(res?.data.map((d:any)=>({label : d?.role, value : d?.role})))
   }
  }
  useEffect(()=>{
     fetchRoles()
  },[])
console.log(state)
  return (
    <div className="w-full bg-linear-to-b from-[#9fd4ef] to-white min-h-screen flex flex-col items-center justify-center sm:p-4 p-1 relative">
      <p className="absolute top-8 left-4 text-3xl font-bold italic bg-gradient-to-r from-blue-600 to-teal-500 inline-block text-transparent bg-clip-text">
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
            <Input
              name="name"
              type="text"
              placeholder="Enter Your Name"
              value={state.name}
              onChange={(e) =>
                handleChange(
                  state,
                  setState,
                  e.target.name as keyof SignupState,
                  e.target.value
                )
              }
            />
            <Input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={state.email}
              onChange={(e) =>
                handleChange(
                  state,
                  setState,
                  e.target.name as keyof SignupState,
                  e.target.value
                )
              }
            />

            <Input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              value={state.password}
              onChange={(e) =>
                handleChange(
                  state,
                  setState,
                  e.target.name as keyof SignupState,
                  e.target.value
                )
              }
            />

            <Select placeholder="Select Role" options={roles} value={state.role} onChange={(e)=>setState({...state, role : e.target.value})} />
          </div>

          <Button
            type="submit"
            text="Signup"
            btnClass="w-full cursor-pointer py-2"
            variant="outline"
          />
          <div className="text-center">
            <Link to="/" className="text-sm ">
              Already have an account?{" "}
              <span className="text-blue-600 hover:underline">Login here</span>
            </Link>
          </div>
        </form>

        <div className="my-6 flex items-center">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm">Or sign in with</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <SocialButton
            icon={<FcGoogle className="text-xl" />}
            provider="Google"
          />
          <SocialButton
            icon={<FaApple className="text-xl" />}
            provider="Apple"
          />
          <SocialButton
            icon={<FaFacebook className="text-xl text-blue-600" />}
            provider="Facebook"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
