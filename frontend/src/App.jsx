import React from 'react'
import Header from './component/common/Header/Header'
import Footer from './component/common/footer/Footer'
import CarasoleEffect from './component/common/carasole/CarasoleEffect'
import Button from './component/common/button/Button'
import Cards from './component/product/Cards'
function App() {
  return (
    <div>
      <Header />
      <CarasoleEffect />
      <Button/>
      <Cards/>
      <Footer />
    </div>
  );
}

export default App