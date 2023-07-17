import styled from "styled-components";
const Input = ({ value, onChange, children, width, height }) => {
  return (
    <WrapperInput
      width={width}
      height={height}
      onChange={onChange}
      value={value}
    >
      {children}
    </WrapperInput>
  );
};

export default Input;

const WrapperInput = styled.input`
  outline: none;
  border: none;
  border-bottom: 2px solid black;
  background-color: transparent;
  transition: border-bottom-width 0.3s ease-in;
  padding-left: 5%;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};

  &:focus {
    border-bottom: 2px solid black;
  }
`;
