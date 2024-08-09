import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import {Error} from './pages/Error/Error';
export const App=()=>{
  return (
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='*' element={<Error />} />
    </Routes>
  );
}