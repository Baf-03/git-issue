import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ComplexNavbar } from './Pages/Navbar'
import { Route, Routes } from 'react-router-dom'
import Signin from './Pages/Signin'
import Login from './Pages/Login'
import Coverpage from './Components/Coverpage'




function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    <div className='pt-3'>
      <ComplexNavbar/>

    </div>
    
     <Routes>
        <Route index element={<Coverpage/>}/>
        <Route path='/signup' element={<Signin/>}/>
        <Route path='/login' element={<Login/>}/>
      


      </Routes>
      <div className='h-[20vh]'>

      </div>
    </>
  )
}

export default App
