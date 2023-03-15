import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Home_page from './pages/home_page/Home_page';
import Add_product from './pages/products_page/add_newproduct/Add_product';
import Products from './pages/products_page/Products';

export default function Router() {
  return useRoutes([
    {path: '/', element:  <Home_page/> },
    {path: '/Products', element:  <Products/> },
    {path: '/Products/add_product', element:  <Add_product/> },
    {path: '/Login', element:  <Login/> },
    {path: '/SignUp', element:  <Signup/> },
    ])

}
