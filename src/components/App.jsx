import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import {RestrictedRoute} from './RestrictedRoute';
import {PrivateRoute} from './PrivateRout';

const HomePage = lazy(() => import('./pages/Home'));
const RegisterPage = lazy(() => import('./pages/Register'));
const LoginPage = lazy(() => import('./pages/Login'));
const ContactsPage = lazy(() => import('./pages/Contacts'));


export const App = () => {
  
  
  return (
<Routes>
  <Route path="/" element={<Layout/>}>
    < Route index element={<HomePage/>}/>
    <Route path="/register" element={
      <RestrictedRoute
      redirectTo="/contacts" component={<RegisterPage/>}/>
     }/>
  <Route path="/contacts" element={
    <PrivateRoute redirectTo="/login" component={ContactsPage} />
  } />   

  </Route>
</Routes>
  );
};
