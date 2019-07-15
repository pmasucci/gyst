import React, { useState } from "react";
import styled from "styled-components/macro";
import authService from "../services/auth.service";

const Register = ({ className }) => {
  const [form, setForm] = useState({});

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (form.password === form.confirmPassword) {
      authService.register(form.email, form.password);
    } else {
      console.log("passwords must match");
    }
  }
  return (
    <form className={className} onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input name="email" type="email" onChange={handleChange} />
      <label htmlFor="password">Password:</label>
      <input name="password" type="password" onChange={handleChange} />
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input name="confirmPassword" type="password" onChange={handleChange} />
      <button>Register</button>
    </form>
  );
};

const StyledRegister = styled(Register)`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  height: 100vh;
  margin: 100px auto;
`;

export default StyledRegister;
