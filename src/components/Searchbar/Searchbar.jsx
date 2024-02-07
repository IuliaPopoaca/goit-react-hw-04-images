import PT from 'prop-types';
import { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { toast } from 'react-toastify';

import {
  ButtonLabel,
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const onInputChange = e => {
    const inputName = e.currentTarget.value;
    setName(inputName.toLowerCase());
  };

  const onFormSubmit = e => {
    e.preventDefault();

    name !== ''
      ? onSubmit(name)
      : toast.error('🥺 Please enter a picture name');

    setName('');
  };

  return (
    <Header>
      <SearchForm onSubmit={onFormSubmit}>
        <SearchFormButton type="submit">
          <BiSearchAlt2
            style={{
              width: 30,
              height: 30,
            }}
          />
          <ButtonLabel>Search</ButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={name}
          onChange={onInputChange}
        />
      </SearchForm>
    </Header>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PT.func.isRequired,
};