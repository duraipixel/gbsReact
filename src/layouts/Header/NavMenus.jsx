export default function NavMenus() {
    return (
        <div className="nav-menus shadow-sm">
            <div class="nav-menu-banner">
                <img src={require('../../assets/images/computer.png')} class="d-block w-100" height={120} alt="menu" />
                <div class="carousel-caption p-0">
                    <h5>What are you looking for </h5>
                    <h5>today?</h5>
                </div>
            </div>
            <div className='p-2'>
                <ul className="list-group">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                    <li className="list-group-item">A fourth item</li>
                    <li className="list-group-item">And a fifth one</li>
                </ul>
            </div>
        </div>
    )
}