import React from "react";
import { useState } from "react";

import "./index.css";

export function MailForm() {
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessge] = useState("");

  function checkValidity(event) {
    if (!event.target.validity.valid) {
      setIsValid(false);
      showError(event);
      event.preventDefault();
    } else {
      setIsValid(true)
    }
  }

  function showError(event) {
    if (event.target.validity.valueMissing) {
      setErrorMessge("Whoops! It looks like you forgot to add your email");
    } else if (event.target.validity.typeMismatch) {
      setErrorMessge("Please provide a valid email address");
    }
  }

  return (
    <form noValidate className="form-area" onSubmit={checkValidity}>
      <label className="form-area__email-label" htmlFor="email">
        <input
          onInput={checkValidity}
          className={`form-area__email ${!isValid ? `input-invalid` : ``}`}
          type="email"
          placeholder="Your email address..."
          required
        />
        <span
          className={`${isValid ? `error-valid` : `error-invalid`}`}
          aria-live="polite"
        >
          {errorMessage}
        </span>
      </label>
      <input className="form-area__button" type="submit" value="Notify Me" />
    </form>
  );
}
