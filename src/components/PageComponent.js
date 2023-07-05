import axios from "axios"
import ServiceCenterDetails from "pages/ServiceCenterDetails"
import StoreLocationDetailsPage from "pages/StoreLocationDetails"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Loader } from "utils"

export default function PageComponent() {
    const { page_slug } = useParams()
    const [page, setPageType] = useState(null)
    const [data, setData] = useState(null)
    useEffect(() => {
        axios.post(`${process.env.REACT_APP_BASE_URL}/store-service`, {
            slug: page_slug
        }).then(res => {
            console.log(res.data.type)
            setPageType(res.data.type)
            setData(res.data.data)
        });
    },[])
    if (page === "service_center") {
        return <ServiceCenterDetails data={data} />
    }
    if(page === "store_locator") {
        return <StoreLocationDetailsPage data={data} />
    }
    return  <Loader/>
}