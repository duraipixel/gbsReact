import banner from "assets/images/banner-1.jpg";
import ReactTypingEffect from "react-typing-effect";

function AboutBanner() {
  return (
    <div>
      <section className="p-0 mt-lg-5">
        <div className='col-lg-12 col-md-12 col-sm-12 position-relative'>
          <img className='w-100' src={banner} alt="banner-pic" />
          <ReactTypingEffect
            className="about-text"
            text={["Excellence", "Resilience", "Determination", "Leadership", "Passion", "Ambitious", "Humility"]}
            typingDelay={500}
            eraseDelay={500}
            cursorRenderer={cursor => <span className="text-dark fw-light">{cursor}</span>}
          />
        </div>
      </section>
    </div>
  )
}

export default AboutBanner