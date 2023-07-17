import styled from "styled-components";
const Button = ({ className, width, height, children, onClick }) => {
  return (
    <ButtonWrapper
      className={className}
      onClick={onClick}
      width={width}
      height={height}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.button`
  border: 1px solid black;
  background-color: white;
  box-shadow: 3px 3px 0px 1px black;
  border-radius: 10px;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  &:active {
    transform: translate(1px, 1px);
    box-shadow: 2px 2px 0px 1px black;
  }
  &:hover {
    background-color: lightgray;
  }
  cursor: pointer;
`;
