
import {ListStyled,  ItemStyled,   DeleteButton, Wrapper} from './ContactList.styled';
import {ImUserMinus, ImLoop2} from "react-icons/im";

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectError, selectFilteredContacts, selectIsLoading } from 'redux/contacts/selectors';




const icon = {
    minusUser: <ImUserMinus/>,
    reset: <ImLoop2/>
};


export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError); 
  
  const dispatch = useDispatch();



  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };



  if (!filteredContacts?.length && !error & !isLoading) {
    return <p>No contacts added yet.</p>;
  }

  if (error) {
    return <p>{error}</p>;
  };

  return (
    <Wrapper>
      <ListStyled>
        {filteredContacts.map(({ name, number, id }) => (
          <ItemStyled key={id}>
             <span>{name}:</span>
            <span>{number}</span>
            <DeleteButton onClick={() => onDeleteContact(id)}>{icon.minusUser} Delete</DeleteButton>
          </ItemStyled>
         
        ))}
      </ListStyled>
    </Wrapper>
  );
};