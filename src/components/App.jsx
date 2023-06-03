import Form from './Contacts/Form/Form';
import Filter from './Contacts/Filter/Filter';
import ListContacts from './Contacts/ListContacts/ListContacts';
import { Title, Container, Caption } from './App.styled';

export function App() {
  return (
    <>
      <Title>Phonebook</Title>
      <Form />
      <Container>
        <Caption>Contacts</Caption>
        <Filter />
        <ListContacts />
      </Container>
    </>
  );
}
