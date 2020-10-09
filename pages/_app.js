import '../styles/globals.css';
import { Container } from 'next/app';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Navbar />
      <div style={{ height: '100vh' }}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default MyApp;
