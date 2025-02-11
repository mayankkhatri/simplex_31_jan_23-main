import React, { useState, useRef } from "react";
import "./sideform.css";
import Form from "react-bootstrap/Form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sideform = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const countryRef = useRef();

  async function submitQuery(e) {
    e.preventDefault();

    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      country: countryRef.current.value,
    };

    const response = await fetch("/api/lead.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data }),
    });

    const result = await response.json();

    if (result.code === 500) {
      {
        /* Changed from == to === for strict equality check */
      }
      toast.error(result.msg);
      return;
    }

    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
    countryRef.current.value = "";
    toast.success(result.msg);
  }

  return (
    <React.Fragment>
      <ToastContainer />
      <div className="sideform">
        <h4>Query for Visa Application</h4>
        <Form action="" onSubmit={submitQuery}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="text"
              ref={nameRef}
              placeholder="Enter Your Name"
              autoFocus
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Control
              type="email"
              ref={emailRef}
              placeholder="Enter Your Email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Control
              type="text"
              ref={phoneRef}
              placeholder="Enter Your Number"
              required
            />
          </Form.Group>
          <Form.Select className="mb-3" ref={countryRef} required>
            <option value="">Select Country</option>
            <option value="Australia">Australia</option>
            <option value="Canada">Canada</option>
            <option value="Germany">Germany</option>
            <option value="Sweden">Sweden</option>
            <option value="Austria">Austria</option>
            <option value="HongKong">HongKong</option>
            <option value="US">US</option>
            <option value="UK">UK</option>
            <option value="Singapore">Singapore</option>
            <option value="Dubai">Dubai</option>
          </Form.Select>
          <button className="mb-3">Submit</button>
          <p className="terms text-white">
            By submitting, you acknowledge that you have read and understood the
            Data Protection Notice and consent to the collection, use and
            disclosure of your personal data for the purpose set out in the
            notice.
          </p>
        </Form>
      </div>
    </React.Fragment>
  );
};

export default Sideform;
