import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
  tilte: "",
  contents: "",
  isChecked: "",
  isModalChecked: "",
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,

})


export default todosSlice.reducer