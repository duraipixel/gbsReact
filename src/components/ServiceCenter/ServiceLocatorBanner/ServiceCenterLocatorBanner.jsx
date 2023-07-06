import "components/StoreLocator/Banner/styles.scss";
import { useRef } from "react";
import { useSelector } from "react-redux";

const ServiceCenterLocatorBanner = ({
  serviceCenterData,
  setCenterID,
  setBrandId,
  setPostCode,
  filterButton,
  setFilterButton,
  pathname
}) => {
  const brands = useSelector((state) => state.footerCollection.brands);
  const postCodeRef = useRef()
  const brandRef = useRef()
  const centerRef = useRef()
  const clearFilters = () => {
    centerRef.current.value = ''
    brandRef.current.value = ''
    postCodeRef.current.value = ''
    setFilterButton(false)
    setPostCode('')
    setBrandId('')
    setCenterID('')
  }
  if (serviceCenterData) return (
    <section className={`bg-dark py-5 ${window.innerWidth > 992 ? 'mt-5' : ''}`}>
      <h1 className={`text-center text-white mb-3 h3 ${window.innerWidth > 992 ? 'mt-4' : ''}`}>
      {pathname.replace('/', '').replaceAll('-', " ")}
      </h1>
      <div className="col-md-8 mx-auto px-3">
        <div className="d-flex flex-column flex-md-row gap-2">
          <select className="form-select" ref={brandRef} onChange={(e) => { setBrandId(e.target.value); setFilterButton(true) }} >
            <option value="">Select Brand</option>
            {brands &&
              brands.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.title}
                </option>
              ))}
          </select>
          <select className="form-select" ref={centerRef} onChange={(e) => { setCenterID(e.target.value); setFilterButton(true) }}>
            <option value=""> Select {pathname.replace('/', '').replaceAll('-', " ")}</option>
            {serviceCenterData.data.map((item) => (
              <option value={item.id} key={item.id}>
                {item.title}
              </option>
            ))}
          </select>
          <input className="form-control" ref={postCodeRef} type="number" placeholder="Search by Pincode" onChange={(e) => { setPostCode(e.target.value); setFilterButton(true) }} />
          {
            filterButton ?
              <button className="btn btn-danger" onClick={clearFilters} type="button" >
                CLEAR
              </button>
              : ''
          }
        </div>
      </div>
    </section>
  )

};

export default ServiceCenterLocatorBanner;
