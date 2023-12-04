import axios from 'axios';
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

const Signup = () => {
    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("https://redbus-backend-zmne.onrender.com/signup", {
                email, password
            })
            .then((res) => {
                if ((res.data = "exist")) {
                    alert("User have not sign up");
                } else if ((res.data = "notexist")) {
                    //   history("/home", { state: { id: email } });
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
    <div className='signup'>
         <h1>Signup</h1>

         <form action='POST'>
            <input type='email' onChange={(e) => {setEmail(e.target.value)}} placeholder='Email'/>
            <input type='password' onChange={(e) => {setPassword(e.target.value)}} placeholder='password'/>

            <input type='submit' onClick={submit}/>
         </form>

         <br />

         <p>OR</p>
         <br />

         <Link to="/">Login Page</Link>
    </div>
  )
}

export default Signup