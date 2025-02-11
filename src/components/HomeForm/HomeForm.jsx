import React, { useRef } from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";

function HomeForm(props) {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
  });

  const { name, email, phone, country, message } = data;

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async () => {
    const response = await fetch("/api/lead.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    let result = await response.json();
    if (result.code) {
      console.log(result.msg);
      return;
    }

    console.log(result);
    alert("Form submitted successfully!");
    setData({
      name: "",
      email: "",
      phone: "",
      country: "",
    });
  };

  const NameRef = useRef();
  const NumberRef = useRef();
  const EmailRef = useRef();
  const MessageRef = useRef();
  const CountryRef = useRef();

  function HomeFormSubmitHandler(event) {
    event.preventDefault();

    // Removed unused obj variable
    handleSubmit();
  }

  return (
    <Form onSubmit={HomeFormSubmitHandler}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control
          type="text"
          name="name"
          value={name}
          onChange={handleInput}
          placeholder="Enter Your Name"
          autoFocus
          ref={NameRef}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Control
          type="email"
          name="email"
          value={email}
          onChange={handleInput}
          placeholder="Enter Your Email"
          autoFocus
          ref={EmailRef}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Control
          type="number"
          name="phone"
          value={phone}
          onChange={handleInput}
          placeholder="Enter Your Number"
          autoFocus
          ref={NumberRef}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control
          as="textarea"
          rows={3}
          name="message"
          value={message}
          onChange={handleInput}
          placeholder="Enter Your Message"
          ref={MessageRef}
          required
        />
      </Form.Group>
      <Form.Select
        className="mb-3"
        name="country"
        value={country}
        onChange={handleInput}
        required
        ref={CountryRef}
      >
        <option value="none" selected>
          Select Country
        </option>
        <option>Australia</option>
        <option>Canada</option>
        <option>Germany</option>
        <option>Sweden</option>
        <option>Austria</option>
        <option>HongKong</option>
        <option>US</option>
        <option>UK</option>
        <option>Singapore</option>
        <option>Dubai</option>
      </Form.Select>
      <button type="submit">Save Changes</button>
    </Form>
  );
}

export default HomeForm;
