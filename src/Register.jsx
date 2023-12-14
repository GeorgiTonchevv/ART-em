import React, { useState } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "./firebaseConfig";
import { useNavigate } from "react-router-dom";

export const Register = (props) => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    
    const handleSubmit = (e) => {
         e.preventDefault()
        createUserWithEmailAndPassword(auth, email, pass)
          .then((userCredentials) => {
            const user = userCredentials.user.email
            console.log('Successfully registered user:', user)
            navigate("/")
          })
          .catch(error => console.log(error.message))
    } 
    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input value={name} name="name" id="full name"></input>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter your password" id="password" name="password" />
                <button>Register</button>
            </form>
            <button className="link-btn" onClick={() => navigate('/login')}>Already have an account? Log in.</button>
        </div>
    )
}