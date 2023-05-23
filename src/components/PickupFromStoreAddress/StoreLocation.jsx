import NoDataComponent from "components/NoDataComponent/NoDataComponent"

function StoreLocation({ stores, selectStoreHander }) { 
    return (
        <ul className='list-group list-group-flush'>
            {
                stores.map(item => (
                    <li className="list-group-item list-group-item-action d-flex justify-content-between p-3" key={item.id}>
                        <div className="col-lg-10">
                            <h3>{item.title}</h3>
                            <div className="align-c gap-3">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"></path></g></svg>
                                {item.address}
                            </div>
                            <div className="align-c gap-3">
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                {item.group_contacts}
                            </div>
                            <div className="align-c gap-3">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 17 17" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g></g><path d="M0 2v13h17v-13h-17zM8.494 9.817l-6.896-6.817h13.82l-6.924 6.817zM5.755 8.516l-4.755 4.682v-9.383l4.755 4.701zM6.466 9.219l2.026 2.003 1.996-1.966 4.8 4.744h-13.677l4.855-4.781zM11.201 8.555l4.799-4.725v9.467l-4.799-4.742z"></path></svg>
                                {item.group_emails}
                            </div>
                        </div>
                        <div>
                            <button onClick={() => selectStoreHander(item)} className="btn btn-sm btn-outline-primary">Select location</button>
                        </div>
                    </li>
                ))
            }
            {stores.length === 0 && <NoDataComponent />}
        </ul>
    )
}

export default StoreLocation