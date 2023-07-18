import axios from "axios";

export const homePageApi = async () => {
  const homePageData = sessionStorage.getItem("home_page_collection");
  if (homePageData === null) {
    const reponses = await axios.all([
      axios.get(`${process.env.REACT_APP_BASE_URL}/get/banners`),
      axios.post(`${process.env.REACT_APP_BASE_URL}/get/discount/collections`),
      axios.post(
        `${process.env.REACT_APP_BASE_URL}/get/subcategory/collections`
      ),
      axios.get(`${process.env.REACT_APP_BASE_URL}/get/product/collections`),
      axios.get(`${process.env.REACT_APP_BASE_URL}/browseHome`),
      axios.get(`${process.env.REACT_APP_BASE_URL}/get/brands`),
      axios.post(`${process.env.REACT_APP_BASE_URL}/get/model/data`),
      axios.post(
        `${process.env.REACT_APP_BASE_URL}/get/handpicked/collections`
      ),
    ]);
    return {
      banners: reponses[0].data.data,
      discountCollections: reponses[1].data,
      subcategoryCollections: reponses[2].data,
      productCollections: reponses[3].data.data,
      browseHome: reponses[4].data.data,
      brands: reponses[5].data.data,
      modalData: reponses[6].data,
      handpickedCollections: reponses[7].data,
    };
  }
  return false;
};
export const getFooterApi = async () => {
  const reponses = await axios.all([
    axios.get(`${process.env.REACT_APP_BASE_URL}/get/brands`),
    axios.get(`${process.env.REACT_APP_BASE_URL}/get/site/info`),
    axios.get(`${process.env.REACT_APP_BASE_URL}/quickLink`),
  ]);
  return {
    brands: reponses[0].data.data,
    siteInfo: reponses[1].data.data,
    quickLink: reponses[2].data.data,
  };
};
export const getStoreLocatorApi = async (data) => {
  return await axios.post(
    `${process.env.REACT_APP_BASE_URL}/store-locator`,
    data
  );
};
export const getServiceCenter = async () => {
  return await axios.get(`${process.env.REACT_APP_BASE_URL}/get/home/service/places`);
};
export const globalSearchApi = async (data, tack) => {
  return await axios.post(
    `${process.env.REACT_APP_BASE_URL}/get/global/search`,
    {
      search_field: data,
      tack: tack,
    }
  );
};
