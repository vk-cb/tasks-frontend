import { useDispatch } from "react-redux"
import Login from "./pages/auth/Login"
import PagesRoute from "./routes/routes"
import { AppDispatch } from "./store/store"
import { useEffect } from "react"
import { checkAuth } from "./store/reducers/auth"


const App = () => {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(()=>{
dispatch(checkAuth())
  },[])
  return (
    <div className='text-midnight'>
      <PagesRoute/>
    </div>
  )
}

export default App