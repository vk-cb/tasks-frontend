import { useLocation } from 'react-router-dom';
import LeftBar from './left';
import { layoutPropsType } from '../../../interfaces';


const Layout = ({children}:layoutPropsType) => {
  const location = useLocation();
  return (
    <div className="flex mr-4">
      {/* {!(location.pathname === "/"  || location.pathname === "/admin") && <LeftBar/>  } */}
        {children}
    </div>
  )
}

export default Layout;