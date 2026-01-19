import React from 'react'
import Header from './component/common/Header/Header'
import Footer from './component/common/footer/Footer'
import Card from './component/common/Card/Card'
import Button from './component/common/button/Button'
import Cards from './component/product/Cards'
function App() {
  return (
    <div>
      <Header />
      <Card />
      <Button/>
      <Cards/>
      <Footer />
    </div>
  );
}

export default App