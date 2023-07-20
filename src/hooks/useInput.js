import { useState } from "react";

const useInput = (initialState) => {
  const [form, setForm] = useState(initialState);

  const onChangeInputHandler = (event) => {
    // console.log(event)
    const {className, value } = event.target;
    let newValue = value;
    (className === "updatedStart" || className === "updatedEnd") && (newValue = value.replace(/\D/g, ""));
    const newForm = {
      ...form,
      [className]: newValue
    }
    setForm(newForm);
  }
  
  return [form ,onChangeInputHandler]
}

export default useInput;