import { useDispatch, useSelector } from "react-redux"
import { setCompareStatus } from "redux/features/compareSlice";
import './CompareProduct.scss'
import { HiXMark } from "react-icons/hi2";
function CompareProduct() {
    const products = useSelector((state) => state.compareProducts)
    const dispatch = useDispatch()
    return (
        <div className={`compare-menu-bar animate__animated animate__slideInUp ${products.status ? 'show' : 'hide'}`} >
            <button className="float-end btn btn-sm">
                <HiXMark color="#f00008" size={25} onClick={() => dispatch(setCompareStatus({ status: false, value: [] }))} />
            </button>
            <div className="container p-0">
                <div className="d-md-flex align-items-center">
                    <div className="compare-card-group">
                        <div className="compare-card">
                            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664431264/Croma%20Assets/Computers%20Peripherals/Laptop/Images/257040_0_yigvy6.png/mxw_1536,f_auto" alt="" />
                            <p class="product-title">Acer Nitro 5 Intel Core i5 11th Gen (15.6 inch, 8GB, 1TB and 256GB, Windows 11, NVIDIA GTX 1650, IPS Display, Black, UN.QEHSI.004)</p>
                            <b className="small">₹62999</b>
                        </div>
                        <div className="compare-card">
                            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664431264/Croma%20Assets/Computers%20Peripherals/Laptop/Images/257040_0_yigvy6.png/mxw_1536,f_auto" alt="" />
                            <p class="product-title">Acer Nitro 5 Intel Core i5 11th Gen (15.6 inch, 8GB, 1TB and 256GB, Windows 11, NVIDIA GTX 1650, IPS Display, Black, UN.QEHSI.004)</p>
                            <b className="small">₹62999</b>
                        </div>
                        <div className="compare-card">
                            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1668663197/Croma%20Assets/Computers%20Peripherals/Laptop/Images/262706_0_wog1el.png/mxw_1536,f_auto" alt="" />
                            <p class="product-title">Acer NITRO 5 AN515-58 Intel i5 12th Gen (15.6 inch, 16GB, 512GB, Windows 11, NVIDIA GeForce RTX 3050, FHD IPS Display, Obsidian Black, UN.QFHSI.006 )</p>
                            <b className="small">₹82990</b>
                        </div>
                    </div>
                    <div className="d-flex flex-md-column ms-md-3">
                        <button className="rounded-0 w-100 btn btn-primary mb-md-3">Compare</button>
                        <button className="rounded-0 w-100 btn btn-outline-dark">Clear all</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompareProduct