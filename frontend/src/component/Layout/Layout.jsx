import React from 'react'
import "./Layout.css"
import Header from '../common/Header/Header'
function Layout({children}) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Layout