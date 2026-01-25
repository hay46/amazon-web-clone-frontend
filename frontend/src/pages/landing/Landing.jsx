import React from 'react'
import "./Landing.css"
import CarasoleEffect from '../../component/common/carasole/CarasoleEffect'
import Cards from '../../component/common/Card/Card'
//import Product from "../../component/common/product/Product"
import Layout from '../../component/Layout/Layout'

function Landing() {
  return (
    <Layout>
      <CarasoleEffect />
      <Cards />
      {/* <Product /> */}
    </Layout>
  );
}

export default Landing;