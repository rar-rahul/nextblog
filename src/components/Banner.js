import React from 'react'

const Banner = () => {
  return (
    <div>
          <section id="home" className="w3l-banner pt-5">
        <div className="container pt-lg-5 pt-md-4">
          <div className="row pt-lg-5 pt-4">
            <div className="col-lg-7 banner-info-grid pt-lg-0 pt-5 pb-5">
              <h1 className="mb-3">Hi, I'm Rahul Raut</h1>
              <h3 className="mb-4"> <span className="typed-text" /><span className="cursor">&nbsp;</span> </h3>
              <p>I love Web development and have been working on Frontend as well as Backend Development. I Can
                </p>
              <a className="btn btn-primary btn-style mt-5 me-2" href="contact.html"> Hire Me </a>
              <a className="btn btn-style transparent-btn mt-5" href="#portfolio"> My Portfolio </a>
            </div>
            <div className="col-lg-5 text-lg-end my-image mt-lg-0 mt-4">
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Banner