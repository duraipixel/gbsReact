import { useEffect, useState } from "react"
import { Modal } from "react-bootstrap"
import Filters from "./Filters"
import StoreLocation from "./StoreLocation"
import { getStoreLocatorApi } from "services/page.service"

function PickupFromStoreAddress() {
    const [stores, setStores] = useState([])
    const [show, setShow] = useState(false)
    const [filter, setFilter] = useState({
        brand_id: null,
        post_code: null,
        center_id: null,
    })

    const getStoreLocator = async () => {
        const { data } = await getStoreLocatorApi(filter)
        setStores(data.data)
    }
    useEffect(() => {
        getStoreLocator()
    }, [show, filter])

    return (
        <div>
            <h5 className="text-primary d-flex align-items-center justify-content-between">
                Preferred Store for Pickup
                <button className="fs-14 btn btn-sm" onClick={() => setShow(!show)}>
                    Change Address
                </button>
            </h5>
            <div>
                GBS Systems, Anna Nagar <br />
                <p className="address-details">
                    AA, 74, 4th Ave, AA Block, Shanthi Colony, Anna Nagar, Chennai, Tamil Nadu 600040
                </p>
            </div>
            <Modal
                show={show}
                size="xl"
                onHide={() => setShow(!show)}
                backdrop="static"
                keyboard={false}
                scrollable={true}
            >
                <div className="bg-dark modal-header flex-column">
                    <button onClick={() => setShow(!show)} className="btn btn-close btn-close-white float-end"></button>
                    <h3 className="text-primary fw-bold mb-3 text-uppercase">Service Center Locator</h3>
                    <Filters stores={stores} filter={filter} setFilter={setFilter} />
                </div>
                <Modal.Body style={{ minHeight:450 }}>
                    <StoreLocation stores={stores}/>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default PickupFromStoreAddress