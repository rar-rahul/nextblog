import React from 'react'

const Portfolio = () => {
  return (
    <div>
         <section className="w3-gallery py-5" id="portfolio">
        <div className="container py-lg-5 py-md-4 py-2">
          <div className="title-heading-w3 mx-auto text-center mb-sm-5 mb-4">
            <h3 className="w3l-title-main mb-2">My Success Work</h3>
          </div>
          <div className="row portfolio-area clearfix p-0 m-0">
            <div className="col-lg-4 col-md-6 portfolio-item2 content" data-id="id-1" data-type="cat-item-1">
              <span className="image-block">
                <a className="image-zoom" href="assets/images/blog1.jpg" data-gal="prettyPhoto[gallery]">
                  <div className="content-overlay" />
                  <img src="assets/images/blog1.jpg" className="img-fluid w3layouts agileits" alt="portfolio-img" />
                  <div className="content-details fadeIn-bottom">
                    <h3 className="content-title">Architecture</h3>
                    <p className="content-text">This is a short description</p>
                  </div>
                </a>
              </span>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item2 content mt-md-0 mt-4" data-id="id-2" data-type="cat-item-2">
              <span className="image-block">
                <a className="image-zoom" href="assets/images/blog2.jpg" data-gal="prettyPhoto[gallery]">
                  <div className="content-overlay" />
                  <img src="assets/images/blog2.jpg" className="img-fluid w3layouts agileits" alt="portfolio-img" />
                  <div className="content-details fadeIn-bottom">
                    <h3 className="content-title">Corporate</h3>
                    <p className="content-text">This is a short description</p>
                  </div>
                </a>
              </span>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item2 content mt-lg-0 mt-4" data-id="id-3" data-type="cat-item-3">
              <span className="image-block">
                <a className="image-zoom" href="assets/images/blog3.jpg" data-gal="prettyPhoto[gallery]">
                  <div className="content-overlay" />
                  <img src="assets/images/blog3.jpg" className="img-fluid w3layouts agileits" alt="portfolio-img" />
                  <div className="content-details fadeIn-bottom">
                    <h3 className="content-title">Ecommerce</h3>
                    <p className="content-text">This is a short description</p>
                  </div>
                </a>
              </span>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item2 content mt-4" data-id="id-4" data-type="cat-item-4">
              <span className="image-block">
                <a className="image-zoom" href="assets/images/blog4.jpg" data-gal="prettyPhoto[gallery]">
                  <div className="content-overlay" />
                  <img src="assets/images/blog4.jpg" className="img-fluid w3layouts agileits" alt="portfolio-img" />
                  <div className="content-details fadeIn-bottom">
                    <h3 className="content-title">Mobile UI</h3>
                    <p className="content-text">This is a short description</p>
                  </div>
                </a>
              </span>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item2 content mt-4" data-id="id-5" data-type="cat-item-5">
              <span className="image-block">
                <a className="image-zoom" href="assets/images/blog5.jpg" data-gal="prettyPhoto[gallery]">
                  <div className="content-overlay" />
                  <img src="assets/images/blog5.jpg" className="img-fluid w3layouts agileits" alt="portfolio-img" />
                  <div className="content-details fadeIn-bottom">
                    <h3 className="content-title">Fashion</h3>
                    <p className="content-text">This is a short description</p>
                  </div>
                </a>
              </span>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item2 content mt-4" data-id="id-7" data-type="cat-item-6">
              <span className="image-block">
                <a className="image-zoom" href="assets/images/blog6.jpg" data-gal="prettyPhoto[gallery]">
                  <div className="content-overlay" />
                  <img src="assets/images/blog6.jpg" className="img-fluid w3layouts agileits" alt="portfolio-img" />
                  <div className="content-details fadeIn-bottom">
                    <h3 className="content-title">Real Estate </h3>
                    <p className="content-text">This is a short description</p>
                  </div>
                </a>
              </span>
            </div>
          </div>
          {/*end portfolio-area */}
        </div>
        {/* //gallery container */}
      </section>
    </div>
  )
}

export default Portfolio