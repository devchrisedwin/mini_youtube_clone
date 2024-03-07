
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Video from './pages/Video/Video'
import { useState } from 'react'

function App() {
  const [menu, setMenu] = useState(true)

  return (
    <>
     

      <BrowserRouter>
      <Navbar setMenu={setMenu} menu={menu}/>
        <Routes>
          <Route path='/'  element={<Home menu={menu}/>} />
          <Route path='/video/:categoryId/:videoId'  element={<Video/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
