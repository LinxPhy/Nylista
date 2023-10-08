import './styles/App.css'

import { Routes, Route } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Login from './pages/login/login'
import Homepage from './pages/homepage/homepage'
import Favourites from './pages/favourites/favourites'
import Create from './pages/create/create'
import Topic from './pages/topics/topics'
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
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <>
      <Header />
      <main>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path="*" element={<div> Not Found or You do not have permission.</div>} />
            <Route path='/' element={<Homepage />} />
            <Route path='/favourites' element={<Favourites />} />
            <Route path='/topics' element={<Topic />} />
            <Route path='/create' element={<Create />} />
          </Routes>
        </div>
      </main>
    </>

  )
}

export default App
