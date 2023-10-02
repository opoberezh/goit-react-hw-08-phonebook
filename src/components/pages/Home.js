

const styles = {
    container:{
        minHeight: 'cala(100vh - 50px)',
        display: 'flex',
        alignItems: 'center',
        justyfyContent: 'center',
    },
    title: {
        fontWeight: 500,
        fontSize: 48,
        textAlign: 'center',
    },
};

export default function Home() {
    return (
        <div style = {styles.container}>
            <h1 style={styles.title}>
                Enjoy Your Phonebook App
            </h1> 
        </div>
    );
};
