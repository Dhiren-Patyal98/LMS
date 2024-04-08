import LoginPage from './Pages/LoginPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/DashboardPage'
import Registration from './Pages/RegistrationPage'


import Calling from './SideBarAndNavBar/Calling';
import ForgotPassword from './Pages/ForgotPassword';
import ResetPassword from './Pages/ResetPassword';
import HomePage from './Pages/HomePage';



export default function App() {

  return (
    <div  >


      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} /> 
          <Route path="/login" element={< LoginPage />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/registration" element={<Registration />} />
          <Route path='/calling' element={<Calling />} />
          <Route path='/forgot' element={<ForgotPassword />} />
          <Route path='/resetpassword' element={<ResetPassword />} />
          
          
        </Routes>

      </BrowserRouter>
    </div>
  )
}
