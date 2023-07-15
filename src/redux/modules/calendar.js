import { createSlice } from "@reduxjs/toolkit"; 

const initialState = []

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setCalendar: (state, action) => { 
      return action.payload 
    }
  }
})


export const { setCalendar } = calendarSlice.actions;
export default calendarSlice.reducer;