import React from "react";
import { useState } from "react";

import "./index.css";

export function MailForm() {
  const [formValidity, setFormValidity] = useState(false);
  const [inputValidity, setInputValidity] = useState(true);
  const [isEmpty, setIsEmpty] = useState(true);
  const [errorMessage, setErrorMessge] = useState("");

  function checkValidity(event) {
    if (!formValidity) {
      event.preventDefault();
      if (isEmpty) {
        setInputValidity(false);
        setErrorMessge("Whoops! It looks like you forgot to add your email");
      }
    }
  }

  function checkInput(event) {
    if (!event.target.validity.valid) {
      setIsEmpty(false);
      setFormValidity(false);
      setInputValidity(false);
      showError(event);
    } else {
      setInputValidity(true);
      setFormValidity(true);
    }
  }

  function showError(event) {
    if (event.target.validity.typeMismatch) {
      setErrorMessge("Please provide a valid email address");
    } else if (event.target.validity.valueMissing) {
      setIsEmpty(true);
      setErrorMessge("Whoops! It looks like you forgot to add your email");
    }
  }

  return (
    <form noValidate className="form-area" onSubmit={checkValidity}>
      <label className="form-area__email-label" htmlFor="email">
        <input
          onInput={checkInput}
          className={`form-area__email ${
            !inputValidity ? `input-invalid` : ``
          }`}
          type="email"
          placeholder="Your email address..."
          required
        />
        <span
          className={`${formValidity ? `error-valid` : `error-invalid`}`}
          aria-live="polite"
        >
          {errorMessage}
        </span>
      </label>
      <input className="form-area__button" type="submit" value="Notify Me" />
    </form>
  );
}
