import { useState } from 'react'
import Articles from './components/Articles'
import User from './components/User'
import MainPage from './assets/Pages/MainPage'

function App() {
  return (
    <>
    {/* <div className="App">
      <header>
        <h1>Welcome to my DEVBlog!</h1>
      </header>
      <div className="content">
         <Articles/>
         <User/>
      </div>
    </div> */}
    <hr />
    <MainPage/>
    </>
  )
}

export default App
