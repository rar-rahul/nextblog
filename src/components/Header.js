import React from 'react'

const Header = () => {
  return (
    <div>
          <header id="site-header" className="fixed-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg stroke">
            <h1>
              <a className="navbar-brand" href="index.html">
                <i className="fab fa-asymmetrik" /> UI Portfolio
              </a>
            </h1>
            {/* if logo is image enable this   
            <a class="navbar-brand" href="#index.html">
                <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
            </a> */}
            <button className="navbar-toggler collapsed bg-gradient" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon fa icon-expand fa-bars" />
              <span className="navbar-toggler-icon fa icon-close fa-times" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ms-lg-auto align-items-center">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="services.html">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact</a>
                </li>
                {/*/right-btn*/}
                <div className="header-btn mx-2">
                  <a className="btn btn-style btn-primary mr-lg-5" href="contact.html"> Hire Me</a>
                </div>
                {/*/right-btn*/}
              </ul>
            </div>
            {/* search */}
            <ul className="cd-header-buttons px-lg-2">
              <li>
                <a className="cd-search-trigger" href="#cd-search">
                  <span />
                </a>
              </li>
            </ul>
            <div id="cd-search" className="cd-search">
              <form action="#url" method="post">
                <input name="Search" type="search" placeholder="Click enter after typing..." />
              </form>
            </div>
            {/* //search */}
            {/* toggle switch for light and dark theme */}
            <div className="cont-ser-position">
              <nav className="navigation">
                <div className="theme-switch-wrapper">
                  <label className="theme-switch" htmlFor="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <div className="mode-container">
                      <i className="gg-sun" />
                      <i className="gg-moon" />
                    </div>
                  </label>
                </div>
              </nav>
            </div>
            {/* //toggle switch for light and dark theme */}
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header