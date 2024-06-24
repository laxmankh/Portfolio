import { useRef } from "react";
import "./Contact.css";
import Swal from "sweetalert2";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import { BsInstagram, BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  const formRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "57d28b80-afd8-4c1a-8ce9-a14826fbe3c5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      if (res.ok) {
        const data = await res.json();
        if (data.success) {
          // Show success message using SweetAlert2
          Swal.fire({
            title: "Success!",
            text: "Message sent successfully!",
            icon: "success",
          }).then(() => {
            // Reset form fields after success message
            formRef.current.reset();
          });
        } else {
          // Handle error response if needed
          console.error("Failed to submit form:", data.error);
        }
      } else {
        // Handle HTTP error response
        console.error("HTTP error while submitting form:", res.status);
      }
    } catch (error) {
      // Handle any network or fetch error
      console.error("Error while submitting form:", error);
    }
  };

  return (
    <>
      <div className=" contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <LightSpeed>
                    <img
                      src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                      alt="ocontact"
                      className="image"
                    />
                  </LightSpeed>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 connect">
              <Rotate>
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      <h6>
                        Contact With
                        <a href="https://www.linkedin.com/in/laxman-khandagale-a15571242/">
                          <BsLinkedin color="blue" size={30} className="ms-2" />
                        </a>
                        <a href="https://github.com/laxmankh">
                          <BsGithub color="black" size={30} className="ms-2" />
                        </a>
                        <a href="https://www.facebook.com/lakhan.khandagle.94/">
                          <BsFacebook color="blue" size={30} className="ms-2" />
                        </a>
                        <a href="https://www.instagram.com/mr.lakhan_khandagle/?hl=en">
                          <BsInstagram color="red" size={30} className="ms-2" />
                        </a>
                      </h6>
                    </div>

                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    <form ref={formRef} onSubmit={onSubmit}>
                      <div className="row px-3">
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter your Name"
                          className="mb-3"
                          //   value={name}
                          //   onChange={(e) => setname(e.target.value)}
                        />
                      </div>
                      <div className="row px-3">
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter Your Email Address"
                          className="mb-3"
                          //   value={email}
                          //   onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="row px-3">
                        <textarea
                          type="text"
                          name="message"
                          placeholder="Write your message"
                          className="mb-3"
                          //   value={msg}
                          //   onChange={(e) => setMsg(e.target.value)}
                        />
                      </div>
                      <div className="row px-3">
                        <button className="button" type="submit">
                          SEND MESSAGE
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </Rotate>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
