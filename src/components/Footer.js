import React from 'react'

const Footer = () => {
  return (
    <div>
          <footer className="text-center">
        <div className="footer py-5">
          <div className="container py-md-4">
            <div clss="footer-logo">
              <a className="logo" href="index.html">
                <i className="fab fa-asymmetrik" /> UI Portfolio
              </a>
            </div>
            <div className="footer-contact-info mt-4">
              <ul>
                <li>
                  <a href="tel:+12 345 678 900" className="contact-text-sub">
                    <span className="fas fa-phone me-2" />+12 345 678 900</a>
                </li>
                <li>
                  <a href="mailto:info@example.com" className="contact-text-sub">
                    <span className="fas fa-envelope me-2" />info@example.com </a>
                </li>
                <li>
                  <p className="contact-text-sub"> 
                    <span className="fas fa-map-marker me-2" />208 Avenue street, UK - 62617.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container py-4">
          <div className="row footer-grids">
            <div className="col-lg-6 copyright text-lg-start text-center align-center">
              <p>© 2022 UI Portfolio. All Rights Reserved | Design by <a href="http://w3layouts.com/"> W3layouts</a> </p>
            </div>
            <div className="col-lg-6 text-lg-end text-center mt-lg-0 mt-4">
              <div className="social">
                <ul>
                  <li><a href="#url"><span className="fab me-2 fa-facebook-f" /></a></li>
                  <li><a href="#url"><span className="fab me-2 fa-twitter" /></a></li>
                  <li><a href="#url"><span className="fab me-2 fa-google-plus" /></a></li>
                  <li><a href="#url"><span className="fab me-2 fa-pinterest" /></a></li>
                  <li><a href="#url"><span className="fab me-2 fa-vk" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer