import React from 'react'
import Header from './component/common/Header/Header'
//import Footer from './component/common/footer/Footer'
import CarasoleEffect from './component/common/carasole/CarasoleEffect'
//import Button from './component/common/button/Button'
import Cards from './component/common/Card/Card'
import './App.css'
import Prodact from "./component/common/prodact/Prodact"
function App() {
  return (
    <div>
      <Header />
      <CarasoleEffect />
      <Cards/>
     <Prodact/>
    </div>
  );
}

export default App