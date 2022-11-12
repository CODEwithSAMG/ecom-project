import React from "react";

const Home = () => {
  return (
    <>
      <section
        id="header d-flex align-items-center pt-5 "
        style={{ marginTop: 100 }}
      >
        <div className="container-fluid nav_bg pt-5">
          <div className="row">
            <div className="col-12 mx-auto">
              <div
                className="row"
                style={{ justifyContent: "center", marginBottom: "70px" }}
              >
                <div className="col-md-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h2>
                    <strong>Grow Your Bussiness Today</strong>
                  </h2>
                  <h6 className="my-5">
                    Global Consultancy Solutions is a leading provider of Cloud,
                    Colocation & rental solutions. We offer a full range of
                    services to manage your business with high technology tool.
                    Our team of experts can help you assess your risks,
                    implement security measures, and monitor your system 24/7.
                  </h6>
                  <div className="mt-3 cljaa">
                    <a href="" className="btn-get-started">
                      Get Started
                    </a>
                  </div>
                </div>
                <div
                  className="col-lg-6 order-1 order-lg-2 header-imd animation

                        three-d-image"
                >
                  <img src="3.jpg"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="second-section">
        <h5>Our Service</h5>
        <h2>We Provide the Cloud & Rental Solution</h2>
        <p >
          Global Consultancy Solutions is a leading provider of Cloud,
          Colocation & rental solutions. We offer a full range of services to
          manage your business with high technology tool. Our team of experts
          can help you assess your risks, implement security measures, and
          monitor your system 24/7.
        </p>
        <div></div>
      </section>

      <section class="process-standard-area text-center bg-gradient text-light default-padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2">
              <div class="site-heading text-center">
                <h1 style={{ marginTop: 30 }}>Work Process</h1>
                <h2 class="area-title">
                  How we help of your business
                  <br />
                  Grow and successful
                </h2>
                <div class="devider"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="single-item col-lg-4 col-md-6">
              <div class="item">
                <div class="icon">
                  <i class="flaticon-select"></i>
                  <span>01</span>
                </div>
                <h4>Choose a Service</h4>
              </div>
            </div>
            <div class="single-item col-lg-4 col-md-6">
              <div class="item">
                <div class="icon">
                  <i class="flaticon-video-call"></i>
                  <span>02</span>
                </div>
                <h4>Request a Meeting</h4>
              </div>
            </div>
            <div class="single-item col-lg-4 col-md-6">
              <div class="item">
                <div class="icon">
                  <i class="flaticon-solution"></i>
                  <span>03</span>
                </div>
                <h4>Let’s Make it Happen</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="d-flex justify-content-center align-items-center pb-5">
        <div>
          <img src="5.png" alt="image" />
        </div>
        <div>
          <h6 style={{}}> WHY CHOOSE GLOBAL CONSULTANCY SOLUTION</h6>
          <h3> The Best of Cloud, Data Center & IT rental Solutions</h3>
          <p></p>
        </div>
      </section> */}

      <div class="overflow-hidden  default-padding bg-gray third-section">
        <div class="container">
          <div class="row align-center">
            <div class="col-lg-6 ">
              <div class="thumb wow fadeInRight" data-wow-delay="0.6s">
                <img src="5.png" alt="image" />
              </div>
            </div>
            <div class="col-lg-6 fadeInUp">
              <h5>Why Choose Global Consultancy Solution</h5>
              <h2 class="area-title">
                The Best of Cloud, Data Center &amp; IT rental Solutions
              </h2>
              <p>
                Global Consultancy Solutions is one of the best Cloud, Data
                Center &amp; IT rental solutions providers in India. We offer a
                wide range of services including data center design, data center
                construction, data centre operations and maintenance, data
                centre migration, Cloud Services , Desktop on rent, laptop on
                rent, Server on rent and more. We have a team of experienced
                professionals who are well-versed in the latest technologies and
                can provide you with the best possible Cloud, Data Center &amp;
                IT rental solutions.
              </p>
              <ul>
                <li></li>
                <li></li>
              </ul>
              <div class="contact">
                <p></p>
                <h4>
                  <i class=""></i>{" "}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
