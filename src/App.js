import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './Components/Container';
import ContactList from './Components/ContactList';
import ContactForm from './Components/ContactForm';
import Filter from './Components/Filter';

const App = () => {
  return (
    <Container>
      <ContactForm />
      <Filter />
      <ContactList />
      <ToastContainer />
    </Container>
  );
};

export default App;
