import { useState } from "react";

const useInput = (initialState) => {
  const [form, setForm] = useState(initialState);

  const onChangeInputHandler = (event) => {
    const {name, vlaue } = event.target;
  const newForm = {
  ...form,
  [name]: vlaue
  }
  setForm(newForm);
  
  }
  
  return [form, onChangeInputHandler]
}

export default useInput;