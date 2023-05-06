import { createSlice } from "@reduxjs/toolkit";

const footerData = sessionStorage.getItem("footer_collection");
var initialState;
if (footerData === null || footerData === undefined) {
  initialState = {
    brands: false,
    siteInfo: false,
    quickLink: false,
  };
} else {
  initialState = JSON.parse(footerData);
}

export const footerSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setfooterCollection: (state, { payload }) => {
      sessionStorage.setItem("footer_collection", JSON.stringify(payload));
      return (state = payload);
    },
  },
});

export const { setfooterCollection } = footerSlice.actions;
export default footerSlice.reducer;
