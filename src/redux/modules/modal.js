import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
  modalChecked: false,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toogleModal: (state) =>{
      state.modalChecked = !state.modalChecked;
    }
  }
})

export const {toogleModal} = modalSlice.actions;
export default modalSlice.reducer;