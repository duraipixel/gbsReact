import { useEffect, useState } from "react"
import { Modal } from "react-bootstrap"
import Filters from "./Filters"
import StoreLocation from "./StoreLocation"
import { getStoreLocatorApi } from "services/page.service"
import { useDispatch, useSelector } from "react-redux"
import { setStoreAddress } from "redux/features/cartAddressSlice"
import { toast } from "react-hot-toast"

function PickupFromStoreAddress() {
    const address = useSelector((state) => state.cartAddress)
    const dispatch = useDispatch()
    const [stores, setStores] = useState([])
    const [show, setShow] = useState(false)
    const [filter, setFilter] = useState({
        brand_id: null,
        post_code: null,
        center_id: null,
    })
    const selectStoreHander = (address) => {
        dispatch(setStoreAddress(address))
        setShow(!show)
        toast.success('Store location selected')
    }
    const getStoreLocator = async () => {
        const { data } = await getStoreLocatorApi(filter)
        setStores(data.data)
    }
    useEffect(() => {
        getStoreLocator()
    }, [show, filter])
    console.log(address.store_address)
    return (
        <div>
            <h5 className="text-primary d-flex align-items-center justify-content-between">
                Preferred Store for Pickup
                <button className="fs-14 btn btn-sm" onClick={() => setShow(!show)}>
                    Change Address
                </button>
            </h5>
            <div>
                {
                    address.store_address ?
                        <div className="mb-3">
                            {address.store_address?.address} <br />
                            {/* <p className="address-details">
                                {address.store_address?.address_line1} ,{address.store_address?.city} - {address.store_address?.post_code},{address.store_address?.state}, {address.store_address?.country}
                            </p> */}
                        </div>
                        : null
                }
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
                <Modal.Body style={{ minHeight: 450 }} className="p-0">
                    <StoreLocation stores={stores} selectStoreHander={selectStoreHander} />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default PickupFromStoreAddress