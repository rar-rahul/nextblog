import React from 'react'

const Service = () => {
  return (
    <div>
          <section className="about-section py-5">
          <div className="container py-lg-5 py-md-4 py-2">
            <div className="title-heading-w3 mx-auto text-center mb-sm-5 mb-4">
              <h3 className="w3l-title-main">What I do for you</h3>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="about-single">
                  <div className="about-icon mb-4">
                    <i className="fas fa-chalkboard" />
                  </div>
                  <div className="about-content">
                    <h5 className="mb-3"><a href="#url">Web Development</a></h5>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque
                      laudan.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-md-0 mt-3">
                <div className="about-single">
                  <div className="about-icon mb-4">
                    <i className="fab fa-app-store" />
                  </div>
                  <div className="about-content">
                    <h5 className="mb-3"><a href="#url"> App development</a></h5>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque
                      laudan.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-lg-0 mt-3">
                <div className="about-single">
                  <div className="about-icon mb-4">
                    <i className="fas fa-camera-retro" />
                  </div>
                  <div className="about-content">
                    <h5 className="mb-3"><a href="#url"> Photography</a></h5>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque
                      laudan.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w3l-btn text-center">
              <a href="services.html" className="btn btn-border mt-lg-5 mt-4 me-2">
                More services <span className="fas fa-long-arrow-alt-right" /></a>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Service