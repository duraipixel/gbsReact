import React from 'react'
import ceovideo from "assets/images/bg-6.jpg";
import VideoBox from 'components/VideoBox';

function CeoMessage() {
  return (
    <div>
      <section className="ceo-msg">
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
              <div className='small-content text-center'>
                <h1>CEO's Message</h1>
                <p>My Guru ‘Mahatria’ once said, “Whatever we do, we should be #1 on<br />
                  that. Yes…!I should make GBS as #1 player in IT Industry in India.”</p>
                  <VideoBox bgImage={ceovideo} src="https://www.youtube.com/embed/SxfleFw5_y4" />
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CeoMessage