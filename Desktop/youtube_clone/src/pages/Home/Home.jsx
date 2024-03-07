import React, { useState } from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'

function Home({menu}) {
  const [category, setCategory] = useState(0);
  return (
    <>
      <Sidebar menu={menu} category={category} setCategory={setCategory}/>
      <div className={`container ${menu ? "" : 'large-container'}`}>
        <Feed category={category}/>
      </div>
    </>
  )
}

export default Home