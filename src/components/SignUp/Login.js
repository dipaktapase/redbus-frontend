import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("https://redbus-backend-zmne.onrender.com/api/login", {
          email,
          password,
        })
        .then((res) => {
          if ((res.data = "exist")) {
            history("/home", { state: { id: email } });
          } else if ((res.data = "notexist")) {
            alert("User have not sign up");
          }
        })
        .catch((err) => {
          alert("Wrong details");
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="login">
      <h1>Login</h1>

      <form action="POST">
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
        />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />

        <input type="submit" onClick={submit} />
      </form>

      <br />

      <p>OR</p>
      <br />

      <Link to="signup">Signup Page</Link>
    </div>
  );
};

export default Login;
