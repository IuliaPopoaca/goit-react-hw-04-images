import PT from 'prop-types';

import { ButtonStyled } from './Button.styled';

const Button = ({ onClick }) => {
  return (
    <ButtonStyled type="button" onClick={() => onClick()}>
      Load more
    </ButtonStyled>
  );
};

export default Button;

Button.propTypes = {
  onClick: PT.func.isRequired,
};