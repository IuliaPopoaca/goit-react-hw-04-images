import 'react-toastify/dist/ReactToastify.css';

import { ImageInfo, Searchbar } from 'components';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import { AppStyled } from './App.styled';

export const App = () => {
  const [name, setName] = useState('');
  const [page, setPage] = useState(0);

  const handelSubmit = inputName => {
    if (name !== inputName) {
      setName(inputName);
      setPage(1);
    }
  };

  const onLoadMoreClick = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <AppStyled>
      <Searchbar onSubmit={handelSubmit} />
      <ImageInfo name={name} page={page} loadMore={onLoadMoreClick} />
      <ToastContainer autoClose={2000} />
    </AppStyled>
  );
};

App.propTypes = {
  inputName: PropTypes.string,
};