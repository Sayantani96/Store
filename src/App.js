
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import About from './Components/About/About';
import Products from './Components/Products/Products';
import Contacts from './Components/Contacts/Contacts';
import SingleProduct from './Components/Products/SingleProduct';
import Cart from './Components/Cart/Cart';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Authenticate from './Components/Authenticate/Authenticate';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
function App() {

  const theme={
    colors:{
      bg:"#F6F8FA",
      footer_bg:"#0a1435",
      btn:'rgb(98,84,243)',
      border:'rgba(98,84,243,.5)',
      hr:'#ffffff',
      gradient:'linear-gradient(0deg,rgb(132,144,255) 0% rgb(98,189,252) 100%)',
      shadow:'rgba(0,0,0,.2) 0 1px 3px 0, rgba(27,31,35,15) 0 0 0 1px',
      shadowSupport:'rgba(0,0,0,.16) 0 1px 4px'
    },
    media:{
      mobile:'768px',
      tab:'998px'
    }
  }
  return (
    <>
      <ThemeProvider theme={theme}>
      <BrowserRouter>
      <GlobalStyle/>
        <Header/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='/product/:id' element={<SingleProduct/>}/>
          <Route path='/authenticate' element={<Authenticate/>}/>
          <Route path='/cart' element={
            <ProtectedRoute>
                <Cart/>
            </ProtectedRoute>
          }/>
          <Route path='/*' element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
      </ThemeProvider>
      </>
  );
}

export default App;
