import { createSlice } from "@reduxjs/toolkit";

export const detailsSlice = createSlice({
  name: "details",
  initialState: {
    value: {
      userName: "emilie",
      userMail: "",
      userPhone: "",
      userOTP: "",
      vehBrand: "",
      userVehicle: "",
      vehYear: "",
      vehValue: "",
      userDOB: "",
      issueDate: "",
      companyName: "",
    },
  },
  reducers: {
    info: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { info } = detailsSlice.actions;
export default detailsSlice.reducer;
