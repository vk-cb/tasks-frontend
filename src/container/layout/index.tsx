import LeftBar from './left';
import { layoutPropsType } from '../../../interfaces';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';


const Layout = ({children}:layoutPropsType) => {
  
  const isAuthenticated = useSelector((state: RootState)=>state?.auth?.isAuthenticated)
  
  return (
    <div className="flex mr-4 gap-4">
      {isAuthenticated && <LeftBar/>  }
      <div className='flex-1 flex justify-center w-full mt-8 sm:mt-0'>
        {children}
      </div>
    </div>
  )
}

export default Layout;