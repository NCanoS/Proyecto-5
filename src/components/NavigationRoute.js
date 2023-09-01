import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from '../pages/Home';
import {Checkout} from '../pages/Checkout';
import {Login} from '../pages/Login';
import UserProfile from '../pages/UserProfile';
import { useContext, useEffect, useState } from 'react';
import {UserContext} from '../context/UserContext';
import Register from '../pages/Register';
import Product from '../pages/Product';

function NavigationRoute() {
  const [user, setUser] = useState({});
  const [token, setToken] = useState('');

  useEffect(()=>{
    console.log(UserContext);
  }, [UserContext])


    const {
      userContextLogin,
      setTokenContext,
      tokenContext,
      setUserContextLogin
    } = useContext(UserContext);
    return(
        <BrowserRouter>
        <Routes>
          <Route path = '/login' element={<Login/>}></Route>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/userprofile' element={<UserProfile/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/product/' element={<Product/>}/>
        </Routes>
      </BrowserRouter>
    )
}
export default NavigationRoute;