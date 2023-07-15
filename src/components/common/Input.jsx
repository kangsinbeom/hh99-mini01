import styled from "styled-components";
const Input = ({ children }) => {
  return <WrapperInput id="myInput">{children}</WrapperInput>;
};

export default Input;

const WrapperInput = styled.input`
  outline: none;
  border: none;

  transition: border-bottom-width 0.3s ease-in;
  &:focus {
    border-bottom: 2px solid black;
  }
`;
