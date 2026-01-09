import { Routes, Route,  } from 'react-router';

import Home from './components/Home';
import About from './components/About';
import ProductDetail from './components/ProductDetail';
import NotFound from './components/NotFound';

import Layout from './components/Layout';

import './App.css';

function App() {


  return (

    <>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/products/:productId' element={<ProductDetail />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Route>
      </Routes>
    </>




  )
}

export default App
