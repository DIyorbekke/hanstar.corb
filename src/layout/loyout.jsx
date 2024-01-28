import { Outlet } from 'react-router-dom'
import Header from '../components/outlet/header.jsx/header'
import Footer from '../components/outlet/footer/footer'

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
