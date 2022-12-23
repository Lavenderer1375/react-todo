import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const Layout = (props) => {
  return (
    <div className="bg-slate-300 h-screen cursor-pointer">
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
