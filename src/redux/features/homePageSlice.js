import { createSlice } from "@reduxjs/toolkit";

const homePageData = sessionStorage.getItem("home_page_collection");
var initialState;
if (homePageData === null || homePageData === undefined) {
  initialState = {
    banners: false,
    discountCollections: false,
    subcategoryCollections: false,
    productCollections: false,
    browseHome: false,
    brands: false,
    handpickedCollections: false,
    siteInfo: false,
    quickLink: false,
  };
} else {
  initialState = JSON.parse(homePageData);
}

export const homePageSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setHomePageCollection: (state, { payload }) => {
      sessionStorage.setItem("home_page_collection", JSON.stringify(payload));
      return (state = payload);
    },
  },
});

export const { setHomePageCollection } = homePageSlice.actions;
export default homePageSlice.reducer;
