import React, { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SubscribeForm() {
  const [email, setEmail] = useState("");

  //   async function SubFormData(obj) {
  //       await fetch("https://simpleximmigration.com/api/subscribe.php", {
  //         method: "POST",
  //         body: JSON.stringify(obj),
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //       });
  //   }
  const SubEmailRef = useRef();

  const subscribe = async () => {
    if (!email) {
      toast.error("email address is required");
      SubEmailRef.current.focus();
      return;
    }

    // const data = new FormData();
    // data.append("email", email);

    const response = await fetch("/api/subscribe.php", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    console.log("response", response);

    const result = await response.json();

    if (result.code !== 200) {
      toast.error(result.msg);
      return;
    }

    toast.success(result.msg);
    setEmail("");
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <div className="email-sub d-flex">
        <input
          type="text"
          name="sub_email"
          value={email}
          placeholder="Insert your email here"
          onInput={(e) => {
            setEmail(e.target.value);
          }}
          ref={SubEmailRef}
        />
        <button className="btn ms-3" onClick={subscribe}>
          <img src="assets/icons/arrow-right.png" alt="" className="" />{" "}
        </button>
      </div>
    </React.Fragment>
  );
}

export default SubscribeForm;
