
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Layout } from "./Layout/Layout";
import { GlobalStyle } from "./GlobalStyled";
import { WrapperContainer } from "./App.styled";
import { useEffect } from 'react';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';



export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);
  
  return (
    <Layout>
      <WrapperContainer>
      <ContactForm />
      {isLoading && !error && <b>Request in progress...</b>}
        <Filter/>
        <ContactList/>
      <ToastContainer />
      </WrapperContainer>
      <GlobalStyle/>
    </Layout>
  );
};
