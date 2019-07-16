import React, { useState } from "react";
import styled from "styled-components/macro";
import { useAuthDispatch } from "../context/AuthContext";
import { useFirebase } from "../context/FirebaseContext";
import { Link } from "react-router-dom";

const Login = ({ className, history }) => {
  const [form, setForm] = useState({});
  const dispatch = useAuthDispatch();
  const firebase = useFirebase();

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await firebase.login(form.email, form.password);
    if (response) {
      dispatch({ type: "login", user: response.user });
    }
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      <label htmlFor="email">Email: </label>
      <input name="email" type="email" onChange={handleChange} />
      <label htmlFor="password">Password: </label>
      <input name="password" type="password" onChange={handleChange} />
      {/* TODO: make a button */}
      <button type="submit">Login</button>
      <div>Or</div>
      <Link to="/register">Register</Link>
    </form>
  );
};

const StyledLogin = styled(Login)`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  height: 100vh;
  margin: 100px auto;
`;

export default StyledLogin;
