import { ContactList } from "components/ContactList/ContactList";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { selectIsLoading } from "redux/contacts/selectors";

export default function Contacts(){
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return(
        <>
        <Helmet>
            <title>Your contacts</title>
        </Helmet>
        <ContsctEditor/>
        <div>{isLoading && 'Request in progress...'}</div>
        <ContactList/>
        </>
    )
}




// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import { ContactForm } from "./ContactForm/ContactForm";

// import { ContactList } from "./ContactList/ContactList";
// import { Layout } from "./Layout/Layout";
// import { GlobalStyle } from "./GlobalStyled";
// import { WrapperContainer } from "./App.styled";
// import { useEffect } from 'react';
// import { Filter } from './Filter/Filter';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectError, selectIsLoading } from 'redux/selectors';
// import { fetchContacts } from 'redux/operations';
// return (
//     <Layout>
//       <WrapperContainer>
//       <ContactForm />
//       {isLoading && !error && <b>Request in progress...</b>}
//         <Filter/>
//         <ContactList/>
//       <ToastContainer />
//       </WrapperContainer>
//       <GlobalStyle/>
//     </Layout>
//   );