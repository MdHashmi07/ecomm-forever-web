import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Collection from "./pages/Collection"
import About from "./pages/About"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Product from "./pages/Product"
import Contacts from "./pages/Contacts"
import Orders from "./pages/Orders"
import PlaceOrder from "./pages/PlaceOrder"
import Navbar from './components/Navbar';
import Footer from './components/Footer';



const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/place-order' element={<PlaceOrder/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
