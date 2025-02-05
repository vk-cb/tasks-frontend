import { useLocation } from 'react-router-dom';
import LeftBar from './left';
import { layoutPropsType } from '../../../interfaces';
import { useSelector } from 'react-redux';


const Layout = ({children}:layoutPropsType) => {
  const location = useLocation();
  // const isAuthenticated = useSelector(state=>state.auth.isAuthenticated)
  const isAuthenticated = true
  return (
    <div className="flex mr-4 gap-4">
      {isAuthenticated && <LeftBar/>  }
      <div className='flex-1 flex justify-center w-full '>
        {children}
      </div>
    </div>
  )
}

export default Layout;