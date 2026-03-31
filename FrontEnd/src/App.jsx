import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import {Routes,Route} from 'react-router-dom'
import BookPages from './pages/BookPages'
import BookEditPages from './pages/BookEditPages'
import BookDetailPage from './pages/BookDetailPage'
import MainLayout from './components/MainLayout'
import AboutPage from './pages/About'
import Homepage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'

function App(props) {

  return(
    
    <Routes>

      
      <Route element={<MainLayout/>}>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/about' element={<AboutPage/>}/> 
      <Route path='/books' element={<BookPages/>}/>
      <Route path='/books/edit/:id' element={<BookEditPages/>}/>
      <Route path='/books/detail/:id' element={<BookDetailPage/>}/>
      <Route path='/categories' element={<CategoryPage/>}/>

      </Route>
      
    </Routes>
  )
}
 
export default App
