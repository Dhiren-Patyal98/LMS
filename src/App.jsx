import LoginPage from './Pages/LoginPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/DashboardPage'
import Registration from './Pages/RegistrationPage'

import FrontendCourse from './Pages/FrontendCourse'
import Calling from './SideBarAndNavBar/Calling';
import ForgotPassword from './Pages/ForgotPassword';
import ResetPassword from './Pages/ResetPassword';
import HomePage from './Pages/HomePage';
import Aboutus from './Pages/Aboutus';
import Progress from './progress/Progress';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import BackendCourse from'./Pages/BackendCourse';


export default function App() {

  return (
    <div  >


      <BrowserRouter>
        <Routes>
        <Route element={<PublicRoutes/>}>
          <Route path='/' element={<HomePage />} /> 
          <Route path="/login" element={< LoginPage />} />
          <Route path="/registration" element={<Registration />} />
          
          
         </Route>
          <Route element={<PrivateRoutes/>}>
          <Route path="/backendcourse" element={<BackendCourse />} />
          <Route path="/frontendcourse" element={<FrontendCourse />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path='/calling' element={<Calling />} />
          <Route path='/forgot' element={<ForgotPassword />} />
          <Route path='/resetpassword' element={<ResetPassword />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/progress' element={<Progress />} />
          </Route>
          
        </Routes>

      </BrowserRouter>
    </div>
  )
}
