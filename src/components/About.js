import React from 'react'

const About = () => {
  return (
    <div>
         <section className="w3l-about py-5" id="about">
          <div className="container py-md-5 py-2">
            <div className="row w3l-row">
              <div className="col-lg-5 my-image pe-lg-5 mb-lg-0 mb-md-5 mb-4">
                <img src="assets/images/about.jpg" alt="" className="img-fluid" />
              </div>
              <div className="col-lg-7 w3l-about-info px-lg-4 align-center">
                <h6 className="w3l-title-small mb-1">My Biography</h6>
                <h3 className="w3l-title-main mb-2">A Lead Full Stack Developer &amp; Web Developer based in India</h3>
                <p className="my-4 pe-lg-5">I love web development have been working as a full stack developer with new technology! Contact me and we will discuss your projects!</p>
                <div className="my-info mt-4">
                  <div className="single-info"><span>Name:</span>
                    <p>Rahul Raut</p>
                  </div>
                  <div className="single-info"><span>From:</span>
                    <p>Nagpur, India</p>
                  </div>
                  <div className="single-info"><span>Email:</span>
                    <p><a href="mailto:rartech23@mail.com">rartech23@mail.com</a></p>
                  </div>
                 
                </div>
                <ul className="follow-social mt-lg-5 mt-4">
                  <li>
                    <h5 className="me-md-3">Follow me on </h5>
                  </li>
                 
                  <li><a href="https://in.linkedin.com/company/w3layouts"><span className="fab fa-linkedin-in" /></a>
                  </li>
                  <li><a href="https://www.facebook.com/w3layouts/">
                      <span className="fab fa-facebook-f" /></a></li>
                </ul>
                <div className="w3l-btn">
                  <a href="contact.html" className="btn btn-style btn-primary mt-lg-5 mt-4 me-md-2">Hire me</a>
                  <a href="#download-cv" className="btn btn-style btn-secondary mt-lg-5 mt-4">Download CV</a>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default About