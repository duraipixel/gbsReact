import axios from "axios";

export const homePageApi = async () => {
    const homePageData = sessionStorage.getItem('home_page_collection')
    if (homePageData === null) {
        const reponses = await axios.all([
            axios.get(`${process.env.REACT_APP_BASE_URL}/get/banners`),
            axios.post(`${process.env.REACT_APP_BASE_URL}/get/discount/collections`),
            axios.post(`${process.env.REACT_APP_BASE_URL}/get/subcategory/collections`),
            axios.get(`${process.env.REACT_APP_BASE_URL}/get/product/collections`),
            axios.get(`${process.env.REACT_APP_BASE_URL}/browseHome`),
            axios.get(`${process.env.REACT_APP_BASE_URL}/get/brands`),
            axios.post(`${process.env.REACT_APP_BASE_URL}/get/handpicked/collections`),
        ]);
        return {
            banners: reponses[0].data.data,
            discountCollections: reponses[1].data,
            subcategoryCollections: reponses[2].data,
            productCollections: reponses[3].data.data,
            browseHome: reponses[4].data.data,
            brands: reponses[5].data.data,
            handpickedCollections: reponses[6].data,
        }
    }
    return false
}

export const getStoreLocatorApi = async (data) => {
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/store-locator`, data);
}

export const globalSearchApi = async (data,tack) => {
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/get/global/search`, {
        search_field: data,
        tack:tack
    });
}