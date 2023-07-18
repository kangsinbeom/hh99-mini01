import React, { useState } from "react";
import { styled } from "styled-components";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { changeModalColor } from "../../redux/modules/modal";

const Selecter = () => {
  const dispatch = useDispatch();
  const selectOption = [
    { value: "red", text: "red" },
    { value: "yellow", text: "yellow" },
    { value: "blue", text: "blue" },
    { value: "violet", text: "violet" },
  ];
  const [selectBox, setSelectBox] = useState(false);
  const [selectBtnText, setSelectBtnText] = useState(selectOption[0].text);
  const SelectClick = () => {
    setSelectBox(!selectBox);
  };

  const OptionClick = (option) => {
    setSelectBtnText(option);
    dispatch(changeModalColor(option));
    setSelectBox(!selectBox);
  };

  return (
    <>
      <Button width={50} onClick={SelectClick}>
        {selectBtnText}
      </Button>
      {selectBox && (
        <SelectItemNonHidden>
          <SelectList>
            {selectOption.map((option, idx) => {
              return (
                <SelectItem
                  key={idx}
                  value={option.value}
                  onClick={() => OptionClick(option.value)}
                >
                  {option.text}
                </SelectItem>
              );
            })}
          </SelectList>
        </SelectItemNonHidden>
      )}
    </>
  );
};
export default Selecter;

const SelectItemNonHidden = ({ children }) => {
  return <ItemNonHidden>{children}</ItemNonHidden>;
};

const SelectList = styled.ul`
  width: 150px;
  border-radius: 25px;
  overflow: hidden;
  padding: 10px;
  background-color: transparent;
  border: 2px solid black;
`;
const SelectItem = styled.li`
  width: 100%;
  height: 20px;
  padding: 10px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  color: black;
  cursor: pointer;
  &:hover {
    background-color: white;
  }
`;
const ItemNonHidden = styled.div`
  position: absolute;
  transform: translate(40%, 80%);
  z-index: 1000;
`;
