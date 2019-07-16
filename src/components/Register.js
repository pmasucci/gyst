import React, { useState } from "react";
import styled from "styled-components/macro";
import authService from "../services/auth.service";
import { useAuthDispatch } from "../context/AuthContext";

const Register = ({ className, history }) => {
  const [form, setForm] = useState({});
  const dispatch = useAuthDispatch();

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (form.password === form.confirmPassword) {
      try {
        const user = await authService.register(form.email, form.password);
        dispatch({ type: "login", user: user.data });
        history.push("/");
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("passwords must match");
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
