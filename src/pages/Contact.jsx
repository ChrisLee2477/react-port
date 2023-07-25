// import Form from "react-bootstrap/Form";
import { useState } from "react";
import { validateEmail } from "../utils/helper";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, name, and text
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setText(inputValue);
    }
    // if (validateEmail(email)) {
    //   setErrorMessage("");
    // }

    // if (!validateEmail(email)) {
    //   setErrorMessage("Enter a vaild email");
    //   // We want to exit out of this code block if something is wrong so that the user can correct it
    //   return;
    //   // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    // }
  };

  const handleVerifcatrion = () => {
    if (validateEmail(email)) {
      setErrorMessage("");
    }

    if (!validateEmail(email)) {
      setErrorMessage("Enter a vaild email");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (text === "") {
      setErrorMessage("Please add a message");
      return;
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    console.log(name);

    if (name.length === 0) {
      setErrorMessage("Please add a name");
      return;
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName("");
    setText("");
    setEmail("");
  };

  return (
    <>
      <div className="container text-center">
        <form className="form mb-3" onSubmit={handleFormSubmit}>
          <input
            className="mb-3"
            value={email}
            name="email"
            onChange={handleInputChange}
            onBlur={handleVerifcatrion}
            type="email"
            placeholder="Email"
          />
          <input
            className="mb-3"
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
          />
          <textarea
            className="mb-3"
            value={text}
            name="text"
            onChange={handleInputChange}
            onBlur={handleVerifcatrion}
            rows={3}
            placeholder="Description of job"
          />
          <button type="submit">Submit</button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </>
  );
}
