import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
	    // const nav = document.querySelector("#header");
	    // const topOfNav = nav.offsetTop; //38
	  function fixNav() {
		  if (window.scrollY > 50 ) {
			  document.querySelector(".main-menu").style.height = "20px";
		  } else {
			  document.querySelector(".main-menu").style.height = "auto";
		  }
	  }
		  window.addEventListener("scroll", fixNav)
  }
  render() {

    return (

      <header id="header" >
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-6 col-4 header-top-left no-padding">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-sm-6 col-8 header-top-right no-padding">
                <a href="tel:+499 123 -45 -67">+499 123 -45 -67</a>
                <a href="mailto:support@ololo.com">support@ololo.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container main-menu">
          <div className="row align-items-center justify-content-between d-flex">
            <div id="logo">
              <a href="#">
                <img src="img/logo2.png" id="logo" alt="" title="" />
              </a>
            </div>
            <nav id="nav-menu-container ">
              <ul className="nav-menu">
                <li className="menu-active">
                  <a href="#">Home</a>
                </li>
                <li className="menu-has-children">
                  <a href="">Products</a>
                  <ul>
                    <li>
                      <a href="#">Show All</a>
                    </li>
                    <li>
                      <a href="#">Wireless Broadband</a>
                    </li>
                    <li>
                      <a href="#">Carrier Class Antennas</a>
                    </li>
                    <li>
                      <a href="#">Integration Platforms</a>
                    </li>
                    <li>
                      <a href="#">Brackets</a>
                    </li>
                    <li>
                      <a href="#">Discontinued Products</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="elements.html">Elements</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </nav>
            {/*// <!-- #nav-menu-container -->*/}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
