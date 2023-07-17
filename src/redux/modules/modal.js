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
      console.log("action.payload", action.payload);
      state.circleColor = action.payload
      console.log("state.circleColor", state.circleColor);
    },
  }
})

export const {setModalId, toogleModal, changeModalColor} = modalSlice.actions;
export default modalSlice.reducer;