import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="contact-us-container  text-black">
        <h2 className="text-center pt-2">Contact Us</h2>
        <div
        // className='container contact-div'
        >
          <div className="row">
            <div className="col-md-6 col-10 mx-auto ">
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Full Name
                  </label>
                  <input
                    placeholder="Global Consultancy"
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Email
                  </label>
                  <input
                    placeholder="support@globalconsultancycom"
                    type="email"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Address
                  </label>
                  <input

                    placeholder=" Sonipat jatvda house no 562/1"
                    type="number"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Phone Number
                  </label>
                  <input
                    placeholder="9050510783"
                    type="number"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>


                {/* <button type="submit" class="btn btn-primary mb-4">
                  Submit
                </button> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
