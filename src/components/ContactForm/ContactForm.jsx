import React, { useRef, useState } from "react";
// import { NavLink } from 'react-bootstrap'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function FormData(obj) {
    const response = await fetch("/api/contact.php", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    if (result.code !== 200) {
      toast.error(result.msg);
      return;
    }
    toast.success(result.msg);

    setLoading(false);
  }

  const FirstNameRef = useRef();
  const LastNameRef = useRef();
  const EmailRef = useRef();
  const MessageRef = useRef();

  function FormSubmitHandler(event) {
    event.preventDefault();

    const firstname = FirstNameRef.current.value;
    const lastname = LastNameRef.current.value;
    const email = EmailRef.current.value;
    const message = MessageRef.current.value;

    const obj = {
      f_name: firstname,
      l_name: lastname,
      email,
      message,
    };

    setLoading(true);
    FormData(obj);

    FirstNameRef.current.value = "";
    LastNameRef.current.value = "";
    EmailRef.current.value = "";
    MessageRef.current.value = "";
  }

  return (
    <form action="" onSubmit={FormSubmitHandler}>
      <ToastContainer />
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="mb-3">
              <label className="">First Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                name="firstname"
                ref={FirstNameRef}
                required
              />
            </div>
            <div className="mb-3">
              <label className="">Last Name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                name="lastname"
                ref={LastNameRef}
                required
              />
            </div>
            <div className="">
              <label className="">Your Email</label>
              <input
                type="text"
                placeholder="Enter your email"
                name="email"
                ref={EmailRef}
                required
              />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="">
              <label className="">Message</label>
              <textarea
                placeholder="Enter your message"
                name="message"
                ref={MessageRef}
                required
              ></textarea>
            </div>
            <button className="btn my-4 form-btn">
              {loading === true ? "waiting.." : "Sent Messages"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
