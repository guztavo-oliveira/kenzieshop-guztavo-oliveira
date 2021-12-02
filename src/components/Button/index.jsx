import { ButtonStyled } from "./styles";

const Button = ({ children, onClick, ...rest }) => {
  return (
    <ButtonStyled {...rest} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
