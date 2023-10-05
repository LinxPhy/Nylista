import './styles/App.css'

import { Routes, Route } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Login from './pages/login/login'
import Homepage from './pages/homepage/homepage'
import Create from './pages/create/create'
import Header from './components/header'
import Navbar from './components/navbar'


function App() {

  const { isAuthenticated, isLoading } = useAuth0()

  // if (!isAuthenticated) {
  //   return (
  //     <div className='container'>
  //       <Routes>
  //         <Route path='/login' element={<Login />}></Route>
  //       </Routes>
  //     </div>
  //   )
  // }

  if (isLoading) {
    return(
      <div>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className='container'>
      <Header />
      <main>
      <Navbar />
        <Routes>
          <Route path="*" element={<div> Not Found or You do not have permission.</div>}/>
          <Route path='/' element={<Homepage />} />
          <Route path='/create' element={<Create />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
