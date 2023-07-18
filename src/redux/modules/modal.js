import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
  date: "",
  modalChecked: false,
  circleColor : "red",
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalId: (state, action) => {
      state.date = action.payload;
    },
    toogleModal: (state) =>{
      state.modalChecked = !state.modalChecked;
    },
    changeModalColor : (state, action) =>{
      state.circleColor = action.payload
    },
  }
})

export const {setModalId, toogleModal, changeModalColor} = modalSlice.actions;
export default modalSlice.reducer;