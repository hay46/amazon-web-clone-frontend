import React from 'react'
import "./landing.css"
import CarasoleEffect from '../../component/common/carasole/CarasoleEffect'
import Cards from '../../component/common/Card/Card'
import Prodact from "../../component/common/prodact/Prodact"
import Layout from '../../component/Layout/Layout'

function landing() {
  return (
    <Layout>
      <CarasoleEffect />
      <Cards />
      <Prodact />
    </Layout>
  );
}

export default landing