
import './App.css'
import Navbar from './Components/Header/Navbar'
import Home from './Components/Home/Home'
import { Route, Router, Routes } from 'react-router-dom'
import Login from './Components/Login/Login'
function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
