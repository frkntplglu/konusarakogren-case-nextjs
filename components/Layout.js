import React from 'react'
import Header from './Header'
import Contact from './Contact'

function Layout({children}) {
    return (
        <>
          <Header />
          <main>
              {children}
          </main>
          <Contact />  
        </>
    )
}

export default Layout
