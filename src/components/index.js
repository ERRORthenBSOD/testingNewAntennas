import React from "react";
import $ from "jquery";

class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
	  const gallery = document.querySelector('.gallery');
	  const overlay = document.querySelector('.overlay2');
	  const overlayImage = overlay.querySelector('img');
	  const overlayClose = overlay.querySelector('.close');

    function generateHTML([h, v]) {
      return `
        <div class="item h${h} v${v}">
          <img src="img/${randomNumber(12)}.jpg" id="aaa">
          <div class="item__overlay">
            <button>View →</button>
          </div>
        </div>
      `;
    }

    function randomNumber(limit) {
      return Math.floor(Math.random() * limit) + 1;
    }
	  function handleClick(e) {
		  const src = e.currentTarget.querySelector('img').src;
		  overlayImage.src = src;
		  overlay.classList.add('open');
	  }

	  function close() {
      overlay.classList.remove("open");
		  overlayImage.src= ''
    }
    const digits = Array.from({ length: 20 }, () => [
      randomNumber(4),
      randomNumber(4)
    ]).concat([
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
    ]);
    const html = digits.map(generateHTML).join("");
    gallery.innerHTML = html;
    const items = document.querySelectorAll(".item");
    items.forEach(item => item.addEventListener("click", handleClick));
    overlayClose.addEventListener("click", close);
  }

  render() {
    return (
      <div>
        <div className="videoTop">
          <div className="overlay" />
          <video
            playsInline="playsinline"
            autoPlay="autoplay"
            muted="muted"
            loop="loop"
          >
            <source
              src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
              type="video/mp4"
            />
          </video>
          <div className="container h-100">
            <div className="d-flex text-center h-100">
              <div className="my-auto w-100 text-white">
                <h1 className="display-3">Technology</h1>
                <h2>
                  Technology for fast, sustainable wireless Grow Smart. Reject
                  Noise. Save Spectrum. Learn more
                </h2>
              </div>
            </div>
          </div>
        </div>
		  <div className="overlay2">
			  <div className="overlay-inner">
				  <button className="close">× Close</button>
				  <img/>
			  </div>
		  </div>

		  <section className="gallery">
		  </section>
        <section className="banner-area" id="home">
          <div className="container">
            <div className="row fullscreen d-flex align-items-center">
              <div className="banner-content col-lg-7 col-md-6 justify-content-center ">
                <h6 className="text-uppercase">
                  Don’t look further, we are the best!
                </h6>
                <h1>Buy our antennas</h1>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim. sed do eiusmod tempor incididunt..
                </p>
                <a
                  href="#"
                  className="primary-btn header-btn text-uppercase mt-10"
                >
                  Get Started
                </a>
              </div>
              <div className="banner-img col-lg-5 col-md-6 align-self-end">
                <img className="img-fluid" src="img/banner-img.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/*// <!-- End banner Area -->*/}
        {/*//*/}
        {/*// <!-- Start service Area -->*/}
        <section className="service-area section-gap" id="service">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 pb-50 header-text text-center">
                <h1 className="mb-10">What we Offer to our Supporters</h1>
                <p>Who are in extremely love with eco friendly system.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="single-service">
                  <div className="thumb">
                    <img src="img/o1.jpg" alt="" />
                  </div>
                  <h4>Popular Uses Of The Internet</h4>
                  <p>
                    inappropriate behavior is oftenlaug hed off as “boys will be
                    boys,” women face higher conduct women face higher conduct.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-service">
                  <div className="thumb">
                    <img src="img/o2.jpg" alt="" />
                  </div>
                  <h4>Protective Preventative</h4>
                  <p>
                    inappropriate behavior is oftenlaug hed off as “boys will be
                    boys,” women face higher conduct women face higher conduct.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-service">
                  <div className="thumb">
                    <img src="img/o3.jpg" alt="" />
                  </div>
                  <h4>Download Free Songs</h4>
                  <p>
                    inappropriate behavior is oftenlaug hed off as “boys will be
                    boys,” women face higher conduct women face higher conduct.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-service">
                  <div className="thumb">
                    <img src="img/o4.jpg" alt="" />
                  </div>
                  <h4>A Discount Toner Cartridge</h4>
                  <p>
                    inappropriate behavior is oftenlaug hed off as “boys will be
                    boys,” women face higher conduct women face higher conduct.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*// <!-- End service Area -->*/}

        {/*// <!-- Start home-about Area -->*/}
        <section className="home-about-area section-gap relative">
          <div className="container">
            <div className="row align-items-center justify-content-start">
              <div className="col-lg-6 no-padding home-about-right">
                <h1>
                  We can fix all types <br />
                  of computer & mobiles
                </h1>
                <p>
                  inappropriate behavior is often laughed off as “boys will be
                  boys,” women face higher conduct standards especially in the
                  workplace. That’s why it’s crucial that, as women, our
                  behavior on the job is beyond reproach.
                </p>
                <div className="row no-gutters">
                  <div className="single-services col">
                    <span className="lnr lnr-diamond" />
                    <a href="#">
                      <h4>Expert Services</h4>
                    </a>
                    <p>
                      Usage of the Internet is becoming more common due to rapid
                      advancement of technology.
                    </p>
                  </div>
                  <div className="single-services col">
                    <span className="lnr lnr-phone" />
                    <a href="#">
                      <h4>Great Support</h4>
                    </a>
                    <p>
                      Usage of the Internet is becoming more common due to rapid
                      advancement of technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*// <!-- End home-about Area -->*/}
        {/*//*/}
        {/*// <!-- Start discount-section Area -->*/}
        <section className="discount-section-area relative section-gap">
          <div className="overlay overlay-bg" />
          <div className="container">
            <div className="row align-items-center justify-content-between no-gutters">
              <div className="col-lg-6 discount-left">
                <h1 className="text-white">Enjoy 25% Seasonal Discount!</h1>
                <p className="text-white">
                  inappropriate behavior is often laughed off as “boys will be
                  boys,” women face higher conduct standards especially in the
                  workplace. That’s why it’s crucial.
                </p>
                <a href="#" className="header-btn">
                  Order Service Now
                </a>
              </div>
              <div className="col-lg-5 discount-right">
                <h4 className="text-white">Get a free Estimate</h4>
                <form className="booking-form" id="myForm" action="#">
                  <div className="row">
                    <div className="col-lg-12 d-flex flex-column">
                      <input
                        name="name"
                        placeholder="Your name"
                        className="form-control mt-20"
                        required=""
                        type="text"
                      />
                    </div>
                    <div className="col-lg-6 d-flex flex-column">
                      <input
                        name="phone"
                        placeholder="Phone"
                        className="form-control mt-20"
                        required=""
                        type="text"
                      />
                    </div>
                    <div className="col-lg-6 d-flex flex-column">
                      <input
                        name="email"
                        placeholder="Email"
                        className="form-control mt-20"
                        required=""
                        type="email"
                      />
                    </div>
                    <div className="col-lg-12 flex-column">
                      <textarea
                        rows="5"
                        className="form-control mt-20"
                        name="message"
                        placeholder="Messege"
                        required=""
                      />
                    </div>

                    <div className="col-lg-12 d-flex justify-content-end send-btn">
                      <button className="genric-btn primary mt-20 text-uppercase ">
                        Get Estimate
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/*// <!-- End discount-section Area -->*/}
        {/*//*/}
        {/*// <!-- Start work-process Area -->*/}
        <section className="work-process-area pt-120">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content pb-60 col-lg-7">
                <div className="title text-center">
                  <h1 className="mb-10">Our Working Process</h1>
                  <p>
                    It won’t be a bigger problem to find one video game lover in
                    your neighbor. Since the introduction of Virtual Game
                  </p>
                </div>
              </div>
            </div>
            <div className="total-work-process d-flex flex-wrap justify-content-around align-items-center">
              <div className="single-work-process">
                <div className="work-icon-box">
                  <span className="lnr lnr-funnel" />
                </div>
                <h4 className="caption">Detect problem</h4>
              </div>
              <div className="work-arrow">
                <img src="img/arrow.png" alt="" />
              </div>
              <div className="single-work-process">
                <div className="work-icon-box">
                  <span className="lnr lnr-layers" />
                </div>
                <h4 className="caption">Split solution into parts</h4>
              </div>
              <div className="work-arrow">
                <img src="img/arrow.png" alt="" />
              </div>
              <div className="single-work-process">
                <div className="work-icon-box">
                  <span className="lnr lnr-paw" />
                </div>
                <h4 className="caption">Analyzing method</h4>
              </div>
              <div className="work-arrow">
                <img src="img/arrow.png" alt="" />
              </div>
              <div className="single-work-process">
                <div className="work-icon-box">
                  <span className="lnr lnr-smile" />
                </div>
                <h4 className="caption">Final result comes out</h4>
              </div>
              <div className="row">
                <div className="col" />
              </div>
            </div>
          </div>
        </section>
        {/*// <!-- End work-process Area -->*/}
        {/*//*/}
        {/*// <!-- Start faq Area -->*/}
        <section className="faq-area section-gap">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 pb-50 header-text text-center">
                <h1 className="mb-10">Frequently Asked Questions</h1>
                <p>Who are in extremely love with eco friendly system.</p>
              </div>
            </div>
            <div className="row faq-contents justify-content-center align-items-center">
              <div className="col-lg-8 faq-left">
                <div className="mn-accordion" id="accordion">
                  {/*// <!--Accordion item-->*/}
                  <div className="accordion-item">
                    <div className="accordion-heading">
                      <h3>Success</h3>
                      <div className="icon">
                        <i className="lnr lnr-chevron-right" />
                      </div>
                    </div>
                    <div className="accordion-content">
                      <p>
                        For many of us, our very first experience of learning
                        about the celestial bodies begins when we saw our first
                        full moon in the sky. It is truly a magnificent view
                        even to the naked eye. If the night is clear, you can
                        see amazing detail of the lunar surface just star gazing
                        on in your back yard.
                      </p>
                    </div>
                  </div>
                  {/*// <!--Accordion item-->*/}
                  {/*//*/}
                  {/*// <!--Accordion item-->*/}
                  <div className="accordion-item">
                    <div className="accordion-heading">
                      <h3>Info</h3>
                      <div className="icon">
                        <i className="lnr lnr-chevron-right" />
                      </div>
                    </div>
                    <div className="accordion-content">
                      <p>
                        For many of us, our very first experience of learning
                        about the celestial bodies begins when we saw our first
                        full moon in the sky. It is truly a magnificent view
                        even to the naked eye. If the night is clear, you can
                        see amazing detail of the lunar surface just star gazing
                        on in your back yard.
                      </p>
                    </div>
                  </div>
                  {/*// <!--Accordion item-->*/}
                  {/*//*/}
                  {/*// <!--Accordion item-->*/}
                  <div className="accordion-item">
                    <div className="accordion-heading">
                      <h3>danger</h3>
                      <div className="icon">
                        <i className="lnr lnr-chevron-right" />
                      </div>
                    </div>
                    <div className="accordion-content">
                      <p>
                        For many of us, our very first experience of learning
                        about the celestial bodies begins when we saw our first
                        full moon in the sky. It is truly a magnificent view
                        even to the naked eye. If the night is clear, you can
                        see amazing detail of the lunar surface just star gazing
                        on in your back yard.
                      </p>
                    </div>
                  </div>
                  {/*// <!--Accordion item-->*/}
                  {/*// <!--Accordion item-->*/}
                  <div className="accordion-item">
                    <div className="accordion-heading">
                      <h3>Warning</h3>
                      <div className="icon">
                        <i className="lnr lnr-chevron-right" />
                      </div>
                    </div>
                    <div className="accordion-content">
                      <p>
                        For many of us, our very first experience of learning
                        about the celestial bodies begins when we saw our first
                        full moon in the sky. It is truly a magnificent view
                        even to the naked eye. If the night is clear, you can
                        see amazing detail of the lunar surface just star gazing
                        on in your back yard.
                      </p>
                    </div>
                  </div>
                  {/*// <!--Accordion item-->*/}
                </div>
              </div>
            </div>
            <div
              className="row pt-120 skill-area justify-content-center"
              id="skills"
            >
              <div className="col-lg-3 single-skill mx-auto d-block">
                <div className="skills skill-1" data-percent="80" />
                <h6 className="text-uppercase">web design</h6>
              </div>
              <div className="col-lg-3 single-skill mx-auto d-block">
                <div className="skills skill-2" data-percent="75" />
                <h6 className="text-uppercase">ui / ux design</h6>
              </div>
              <div className="col-lg-3 single-skill mx-auto d-block">
                <div className="skills skill-3" data-percent="60" />
                <h6 className="text-uppercase">mobile app</h6>
              </div>
              <div className="col-lg-3 single-skill mx-auto d-block">
                <div className="skills skill-4" data-percent="90" />
                <h6 className="text-uppercase">web development</h6>
              </div>
            </div>
          </div>
        </section>
        {/*// <!-- End faq Area -->*/}
        {/*//*/}
        {/*// <!-- Start testomial Area -->*/}
        <section className="testomial-area section-gap" id="testimonail">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content pb-60 col-lg-7">
                <div className="title text-center">
                  <h1 className="mb-10 text-white">
                    Feedback from our real clients
                  </h1>
                  <p className="text-white">
                    It won’t be a bigger problem to find one video game lover in
                    your neighbor. Since the introduction of Virtual Game.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="active-testimonial-carusel">
                <div className="single-testimonial item">
                  <img className="mx-auto" src="img/t1.png" alt="" />
                  <p className="desc">
                    Accessories Here you can find the best computer accessory
                    for your laptop, monitor, printer, scanner, speaker,
                    projector, hardware and more. laptop accessory
                  </p>
                  <h5>Mark Alviro Wiens</h5>
                  <p>CEO at Google</p>
                </div>
                <div className="single-testimonial item">
                  <img className="mx-auto" src="img/t2.png" alt="" />
                  <p className="desc">
                    Accessories Here you can find the best computer accessory
                    for your laptop, monitor, printer, scanner, speaker,
                    projector, hardware and more. laptop accessory
                  </p>
                  <h5>Mark Alviro Wiens</h5>
                  <p>CEO at Google</p>
                </div>
                <div className="single-testimonial item">
                  <img className="mx-auto" src="img/t3.png" alt="" />
                  <p className="desc">
                    Accessories Here you can find the best computer accessory
                    for your laptop, monitor, printer, scanner, speaker,
                    projector, hardware and more. laptop accessory
                  </p>
                  <h5>Mark Alviro Wiens</h5>
                  <p>CEO at Google</p>
                </div>
                <div className="single-testimonial item">
                  <img className="mx-auto" src="img/t1.png" alt="" />
                  <p className="desc">
                    Accessories Here you can find the best computer accessory
                    for your laptop, monitor, printer, scanner, speaker,
                    projector, hardware and more. laptop accessory
                  </p>
                  <h5>Mark Alviro Wiens</h5>
                  <p>CEO at Google</p>
                </div>
                <div className="single-testimonial item">
                  <img className="mx-auto" src="img/t2.png" alt="" />
                  <p className="desc">
                    Accessories Here you can find the best computer accessory
                    for your laptop, monitor, printer, scanner, speaker,
                    projector, hardware and more. laptop accessory
                  </p>
                  <h5>Mark Alviro Wiens</h5>
                  <p>CEO at Google</p>
                </div>
                <div className="single-testimonial item">
                  <img className="mx-auto" src="img/t3.png" alt="" />
                  <p className="desc">
                    Accessories Here you can find the best computer accessory
                    for your laptop, monitor, printer, scanner, speaker,
                    projector, hardware and more. laptop accessory
                  </p>
                  <h5>Mark Alviro Wiens</h5>
                  <p>CEO at Google</p>
                </div>
                <div className="single-testimonial item">
                  <img className="mx-auto" src="img/t1.png" alt="" />
                  <p className="desc">
                    Accessories Here you can find the best computer accessory
                    for your laptop, monitor, printer, scanner, speaker,
                    projector, hardware and more. laptop accessory
                  </p>
                  <h5>Mark Alviro Wiens</h5>
                  <p>CEO at Google</p>
                </div>
                <div className="single-testimonial item">
                  <img className="mx-auto" src="img/t2.png" alt="" />
                  <p className="desc">
                    Accessories Here you can find the best computer accessory
                    for your laptop, monitor, printer, scanner, speaker,
                    projector, hardware and more. laptop accessory
                  </p>
                  <h5>Mark Alviro Wiens</h5>
                  <p>CEO at Google</p>
                </div>
                <div className="single-testimonial item">
                  <img className="mx-auto" src="img/t3.png" alt="" />
                  <p className="desc">
                    Accessories Here you can find the best computer accessory
                    for your laptop, monitor, printer, scanner, speaker,
                    projector, hardware and more. laptop accessory
                  </p>
                  <h5>Mark Alviro Wiens</h5>
                  <p>CEO at Google</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*// <!-- End testomial Area -->*/}
        {/*//*/}
        {/*// <!-- Start blog Area -->*/}
        <section className="blog-area section-gap" id="blog">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content pb-70 col-lg-8">
                <div className="title text-center">
                  <h1 className="mb-10">Latest posts from our blog</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 single-blog">
                <div className="thumb">
                  <img className="img-fluid" src="img/b1.jpg" alt="" />
                </div>
                <p className="meta">
                  25 October, 2017 | By <a href="#">Mark Wiens</a>
                </p>
                <a href="blog-single.html">
                  <h5>Addiction When Gambling Becomes A Problem</h5>
                </a>
                <p>
                  Computers have become ubiquitous in almost every facet of our
                  lives. At work, desk jockeys spend hours in front of their.
                </p>
                <a
                  href="#"
                  className="details-btn d-flex justify-content-center align-items-center"
                >
                  <span className="details">Details</span>
                  <span className="lnr lnr-arrow-right" />
                </a>
              </div>
              <div className="col-lg-3 col-md-6 single-blog">
                <div className="thumb">
                  <img className="img-fluid" src="img/b2.jpg" alt="" />
                </div>
                <p className="meta">
                  25 October, 2017 | By <a href="#">Mark Wiens</a>
                </p>
                <a href="blog-single.html">
                  <h5>Computer Hardware Desktops And Notebooks</h5>
                </a>
                <p>
                  Ah, the technical interview. Nothing like it. Not only does it
                  cause anxiety, but it causes anxiety for several different
                  reasons.
                </p>
                <a
                  href="#"
                  className="details-btn d-flex justify-content-center align-items-center"
                >
                  <span className="details">Details</span>
                  <span className="lnr lnr-arrow-right" />
                </a>
              </div>
              <div className="col-lg-3 col-md-6 single-blog">
                <div className="thumb">
                  <img className="img-fluid" src="img/b3.jpg" alt="" />
                </div>
                <p className="meta">
                  25 October, 2017 | By <a href="#">Mark Wiens</a>
                </p>
                <a href="blog-single.html">
                  <h5>Make Myspace Your Best Designed Space</h5>
                </a>
                <p>
                  Plantronics with its GN Netcom wireless headset creates the
                  next generation of wireless headset and other products such as
                  wireless.
                </p>
                <a
                  href="#"
                  className="details-btn d-flex justify-content-center align-items-center"
                >
                  <span className="details">Details</span>
                  <span className="lnr lnr-arrow-right" />
                </a>
              </div>
              <div className="col-lg-3 col-md-6 single-blog">
                <div className="thumb">
                  <img className="img-fluid" src="img/b4.jpg" alt="" />
                </div>
                <p className="meta">
                  25 October, 2017 | By <a href="#">Mark Wiens</a>
                </p>
                <a href="blog-single.html">
                  <h5>Video Games Playing With Imagination</h5>
                </a>
                <p>
                  About 64% of all on-line teens say that do things online that
                  they wouldn’t want their parents to know about. 11% of all
                  adult internet
                </p>
                <a
                  href="#"
                  className="details-btn d-flex justify-content-center align-items-center"
                >
                  <span className="details">Details</span>
                  <span className="lnr lnr-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/*// <!-- End blog Area -->*/}
        {/*//*/}
        {/*// <!-- Start brands Area -->*/}
        <section className="brands-area pb-120">
          <div className="container no-padding">
            <div className="brand-wrap">
              <div className="row align-items-center active-brand-carusel justify-content-start no-gutters">
                <div className="col single-brand">
                  <a href="#">
                    <img className="mx-auto" src="img/l1.png" alt="" />
                  </a>
                </div>
                <div className="col single-brand">
                  <a href="#">
                    <img className="mx-auto" src="img/l2.png" alt="" />
                  </a>
                </div>
                <div className="col single-brand">
                  <a href="#">
                    <img className="mx-auto" src="img/l3.png" alt="" />
                  </a>
                </div>
                <div className="col single-brand">
                  <a href="#">
                    <img className="mx-auto" src="img/l4.png" alt="" />
                  </a>
                </div>
                <div className="col single-brand">
                  <a href="#">
                    <img className="mx-auto" src="img/l5.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Body;
