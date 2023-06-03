import React from 'react';
import PropTypes from 'prop-types';
import { Button, Description, List, ListItem } from './List.Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/ContactsSlice';
import { useEffect } from 'react';
import { fetchContacts } from '../../../redux/operations';
import { getConctacs, getFilter, getLoading } from 'redux/Selectors';

const ListContacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const contacts = useSelector(getConctacs);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getLoading);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {isLoading && <b>Loading contacts...</b>}
      {filteredContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <Description>
            {name}: {number}
          </Description>
          <Button data-id={id} onClick={() => dispatch(removeContact(id))}>
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

ListContacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ListContacts;
