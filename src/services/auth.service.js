import axios from "axios";
async function register(email, password) {
  try {
    const response = await axios.post(url("/register"), {
      email,
      password
    });
    return response;
  } catch (error) {
    console.error("Error registering account.");
  }
}

async function login(email, password) {
  try {
    const response = await axios.post(url("/login"), { email, password });
    return response;
  } catch (error) {
    console.error("Error logging in.");
  }
}

export default {
  register,
  login
};

function url(path) {
  return `${process.env.REACT_APP_API_URL}${path}`;
}
