import axios from "axios";
import ServiceCenterLocatorBanner from "components/ServiceCenter/ServiceLocatorBanner/ServiceCenterLocatorBanner";
import ServiceLocatorContent from "components/ServiceCenter/ServiceLocatorContent/ServiceLocatorContent";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { Loader, scrollToTop } from "utils";


export default function ServicesListingComponent() {
    const { pathname } = useLocation()
    const url = (pathname === "/store-locator-for-service" ? 'serviceCenter' : 'store-locator')
    const [serviceCenterData, setServiceCenterData] = useState();
    const [serviceCenterFilteredData, setServiceCenterFilteredData] = useState();
    const [fetching, setfetching] = useState(true);
    const [filterFetching, setFilterFetching] = useState(true);
    const [centerID, setCenterID] = useState("");
    const [brandId, setBrandId] = useState("");
    const [postCode, setPostCode] = useState("");
    const [filterButton, setFilterButton] = useState(false);

    useEffect(() => {
        scrollToTop();
        getData();
    }, []);

    useEffect(() => {
        getFilterData();
    }, [centerID, brandId, postCode, filterButton, pathname]);

    const getData = () => {
        return axios
            .post(`${process.env.REACT_APP_BASE_URL}/${url}`)
            .then((res) => {
                setServiceCenterData(res.data);
                setfetching(false);
            })
            .catch((err) => console.error(err));
    };

    const getFilterData = () => {
        setFilterFetching(true);
        return axios
            .post(`${process.env.REACT_APP_BASE_URL}/${url}`, {
                center_id: centerID,
                brand_id: brandId,
                post_code: postCode,
            })
            .then((res) => {
                setServiceCenterFilteredData(res.data);
                setFilterFetching(false);
            })
            .catch((err) => console.error(err));
    };

    return fetching ? (
        <Loader />
    ) : (
        <>
            <Helmet>
                <title>{pathname.replace('/', '').replaceAll('-', " ")} - GBS Systems</title>
                <link rel="canonical" href={window.location.href} />
                <link rel="shortcut icon" type="image/x-icon" href="favicon.png" />
                <meta
                    name="description"
                    content="Check out GBS Systems Laptop Service Center near your location."
                />
            </Helmet>
            <ServiceCenterLocatorBanner
                pathname={pathname}
                serviceCenterData={serviceCenterData}
                serviceCenterFilteredData={serviceCenterFilteredData}
                setCenterID={setCenterID}
                setBrandId={setBrandId}
                setPostCode={setPostCode}
                filterButton={filterButton}
                setFilterButton={setFilterButton}
            />
            <ServiceLocatorContent
                fetching={filterFetching}
                serviceCenterFilteredData={serviceCenterFilteredData}
            />
        </>
    );
}