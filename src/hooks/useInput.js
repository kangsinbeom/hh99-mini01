import { useCallback, useState } from'react';


const useInput = () => {
  const [value, setValue] = useState("");

  const onChangeHandler = useCallback((event) => {
    setValue(event.target.value);
  },[])
  return [value, onChangeHandler]
}

export default useInput;