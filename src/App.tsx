import Home from './components/homePage'
import NavBar from './components/navigationbar'
import Footer from './components/footer'
import { useState } from 'react'
export default function App(){
    const [page,setPage]=useState("home") 
  return(
    <>
    <NavBar setPage={setPage}/>
    <main>
      <Home page={page} setPage={setPage}/>
    </main>
    <footer>
      <Footer/>
    </footer>
    </>
  )
}