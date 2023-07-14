import styled from "styled-components";
const Input = ({ children }) => {
  return <WrapperInput id="myInput">{children}</WrapperInput>;
};

export default Input;

const WrapperInput = styled.input`
  border: none;
  border-bottom: 2px solid black;
  &::before {
  }
`;
