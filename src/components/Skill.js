import React from 'react'

const Skill = () => {
  return (
    <div>
         <section className="w3l-skills py-5" id="skills">
          <div className="container py-lg-5 py-md-4 py-3">
            <div className="row">
              <div className="col-lg-6 pe-lg-5">
                <img src="assets/images/about1.jpg" alt="" className="img-fluid" />
              </div>
              <div className="col-lg-6 mt-lg-0 mt-5 w3l-content-6 px-lg-4 align-self-center">
                <h6 className="w3l-title-small mb-2">My skills</h6>
                <h3 className="w3l-title-main">My Featured skills</h3>
                <p className="mt-4">I Specialize in Branding and Strategy, and am passionate about creating Awesome
                  Portfolio work. And I always ready to impress the audience with my Creativity. </p>
                <div className="progress-info mt-5">
                  <h6 className="progress-tittle">UI/UX Design</h6>
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>
                    </div>
                  </div>
                </div>
                <div className="progress-info">
                  <h6 className="progress-tittle">Ideas &amp; Technology
                  </h6>
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '95%'}} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}>
                    </div>
                  </div>
                </div>
                <div className="progress-info">
                  <h6 className="progress-tittle">Branding Design</h6>
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '55%'}} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100}>
                    </div>
                  </div>
                </div>
                <div className="progress-info mb-0">
                  <h6 className="progress-tittle">Responsive Web Design</h6>
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Skill