import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Label } from './Filter.styled';
import { filteredContacts } from 'redux/FilterSlice';
export default function Filter() {
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();
  const handleFilter = e => {
    dispatch(filteredContacts(e.currentTarget.value));
  };
  return (
    <Label>
      Find contacts by me
      <Input type="text" onChange={handleFilter} value={filter} />
    </Label>
  );
}
