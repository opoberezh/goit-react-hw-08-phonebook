import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { GlobalStyle } from 'components/GlobalStyled';
import { Helmet } from 'react-helmet';
// import { Filter } from 'components/Filter/Filter';


const styles = {
container: {
display: 'flex',
flexDirection: 'column',
justifyContent: 'flex-start',
alignItems: 'center',
width: '350px',
height: 'fit-content',
margin: 'auto',
padding: '20px',
borderRadius: '5px',
boxShadow:' 6px 6px 6px 0px rgba(0,0,0,0.55)',
background: 'rgba(245, 245, 220, 0.75)',
}
}



export default function Contacts(){
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
        <Helmet>
        <title>Your Contacts</title>
        </Helmet>
          <div style={styles.container}>
          <ContactForm />
          {/* <Filter/> */}
          {isLoading && !error && <b>Request in progress...</b>}
            <ContactList/>
          <ToastContainer />
          </div>
          <GlobalStyle/>
        </>
      );
};










