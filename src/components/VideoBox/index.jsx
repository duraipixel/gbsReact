import { useState } from 'react'
import { Modal } from 'react-bootstrap';
import "./styles.css";

function VideoBox({ src, bgImage }) {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <div className='ceovds'>
                <img src={bgImage} alt="bg-pic" />
                <button className="video-play-button" onClick={() => setModalShow(true)}>
                    <span></span>
                </button>
            </div>
            <Modal onHide={() => setModalShow(false)} show={modalShow} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Body>
                    <button onClick={() => setModalShow(false)}> X </button>
                    <iframe width="100%" height={450} src={src} frameBorder="0" allowfullscreen></iframe>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default VideoBox