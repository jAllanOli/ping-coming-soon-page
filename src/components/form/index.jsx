import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import "./index.css"

const schema = yup.object({
    email: yup.string().email("Please provide a valid email address").required("Whoops! It looks like you forgot to add your email")
})

export function MailForm() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
      })

    return (
      <form className="form-area" noValidate onSubmit={handleSubmit()}>
        <label className="form-area__email-label" htmlFor="email">
          <input
          className="form-area__email"
            type="email"
            placeholder="Your email address..."
            {...register("email", { required: true})}
          />
          <span className="error" aria-live="polite">{errors.email?.message}</span>
        </label>
        <input className="form-area__button" type="submit" value="Notify Me" />
      </form>
    );
  }
