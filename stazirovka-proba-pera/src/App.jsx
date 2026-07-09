import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Collections from './components/Collections'
import Catalog from './components/Catalog'
import Footer from './components/Footer'

import {Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import OrganizerAccount from './pages/OrganizerAccount'



function App(){
  return (
    <>
    <Header/>
    <Hero/>
    <Collections/>
    <Catalog/>
    <Footer/>
    </>
  )
}

export default App