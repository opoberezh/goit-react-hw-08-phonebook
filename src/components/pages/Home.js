import { GlobalStyle } from 'components/GlobalStyled';
import {RiContactsBook2Line} from 'react-icons/ri';


const styles = {
    container:{
        minHeight: 'cala(100vh - 50px)',
        display: 'flex',
        alignItems: 'center',
        justyfyContent: 'center',
        marginTop: '50px',
        
    },
    title: {
        fontWeight: 500,
        fontSize: 60,
        textAlign: 'center',
        color: '#ffffff',
       
        margin: 'auto',
    },
    icon: {
        fontSize: 64, 
        verticalAlign: 'middle', 
        marginLeft: '8px', 
       
    },
};

export default function Home() {
    return (
        <div style = {styles.container}>
            <h1 style={styles.title}>
                Enjoy Your Phonebook App <RiContactsBook2Line style={styles.icon}/>
            </h1>
            <GlobalStyle/>
        </div>
    );
};
