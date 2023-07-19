import { useEffect, useState } from "react"
import { Modal } from "react-bootstrap"
import Filters from "./Filters"
import StoreLocation from "./StoreLocation"
import { getStoreLocatorApi } from "services/page.service"
import { useDispatch, useSelector } from "react-redux"
import { setStoreAddress } from "redux/features/cartAddressSlice"
import { toast } from "react-hot-toast"
import { TbCurrentLocation } from "react-icons/tb"

function PickupFromStoreAddress({ type, brandId }) {
    const address = useSelector((state) => state.cartAddress)
    const dispatch = useDispatch()
    const [stores, setStores] = useState([])
    const [storesOptions, setStoresOptions] = useState([])
    const [show, setShow] = useState(false)
    const [filter, setFilter] = useState({
        brand_id: brandId ? brandId : null,
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
        if (storesOptions.length === 0) {
            setStoresOptions(data.data)
        }
    }
    useEffect(() => {
        getStoreLocator()
    }, [show, filter])

    return (
        <div >
            {
                type !== 'button' ?
                    <div className="border bg-white rounded py-1 p-3">
                        <p className="m-0 text-info d-flex align-items-center justify-content-between">
                            <span><i className="fa fa-map-marker"></i> Preferred Store Address</span>
                            <button className="fs-14 btn btn-sm text-blue" onClick={() => setShow(!show)}>
                                {
                                    address.store_address == null ? <>  <i className="fa fa-map-signs me-1"></i> Select </> : <>  <i className="fa fa-edit me-1"></i> Change</>
                                }
                            </button>
                        </p>
                        <div>
                            {address.store_address?.address} <br />
                        </div>
                    </div>
                    :
                    <div className="d-flex align-items-center ">
                        <div><div className="vr ms-3 d-none d-lg-block"></div></div>
                        <button className="text-primary btn-link btn" onClick={() => setShow(!show)}><TbCurrentLocation className='me-1' /> Find Stores</button>
                    </div>
            }

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
                    <h3 className="text-primary fw-bold mb-3 text-uppercase">Store locator for service</h3>
                    <Filters stores={storesOptions} filter={filter} setFilter={setFilter} brandId={brandId} />
                </div>
                <Modal.Body style={{ minHeight: 450 }} className="p-0">
                    <StoreLocation stores={stores} selectStoreHander={selectStoreHander} />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default PickupFromStoreAddress