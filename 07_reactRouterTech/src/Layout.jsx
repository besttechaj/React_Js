import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
function Layout() {
  //! this layout.jsx will work like a template for us. We are rendering the components dynamically using Outlet component from react-router-dom instead of passing each and every component inside one another.
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
