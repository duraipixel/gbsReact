import { useContext } from 'react';
import { Accordion, AccordionContext, Button, useAccordionButton } from 'react-bootstrap';
import { useNavMenuQuery } from 'redux/features/homePage/navMenuService'
import { BsChevronRight, BsChevronDown } from 'react-icons/bs'
import { Link } from 'react-router-dom';

export default function NavMenus() {
    const { data, isSuccess } = useNavMenuQuery()
    if (isSuccess) return (
        <div className="nav-menus shadow">
            <div className="nav-menu-banner">
                <img src={require('../../assets/images/computer.png')} className="d-block w-100" height={120} alt="menu" />
                <div className="carousel-caption p-0">
                    <h5>What are you looking for today?</h5>
                </div>
            </div>
            <div className='p-3'>
                <Accordion defaultActiveKey="0">
                    <ul className="list-group list-group-flush">
                        {
                            data.data.map(item => (
                                <li className="list-group-item" key={item.id}>
                                    <div className='d-flex justify-content-between align-items-start'>
                                        <MenuItem item={item} />
                                        {item.child.length > 0 && <AccordionToggler eventKey={item.id} />}
                                    </div>
                                    {item.child.length > 0 &&
                                        <Accordion.Collapse eventKey={item.id}>
                                            <ul className='list-group list-group-flush'>
                                                {item.child.map(data => (
                                                    <li key={data.id} className='list-group-item'><MenuItem className="text-dark" item={data} /></li>
                                                ))}
                                            </ul>
                                        </Accordion.Collapse>
                                    }
                                </li>
                            ))
                        }
                    </ul>
                </Accordion>
            </div>
        </div>
    )
}
function MenuItem({ item, className }) {
    return (
        <Link to='/' className={`me-auto text-secondary ${className&&className}`}> {item.name} </Link>
    )
}
function AccordionToggler({ eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton(eventKey, () => callback && callback(eventKey));
  
    return (
        <Button className='btn-sm' variant='light' onClick={decoratedOnClick} >
            { activeEventKey == eventKey ? <BsChevronDown /> : <BsChevronRight />}
        </Button>
    );
}