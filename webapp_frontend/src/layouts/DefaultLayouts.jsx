import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'


export default function DefaultLayout() {
  return (
    <>
      <Header />

      <main style={{ minHeight: '80vh' }}>
        <Outlet />
      </main>

      <Footer />



    </>


  )
}