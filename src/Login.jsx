import React, { useState } from "react";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "./firebaseConfig";
import { useNavigate } from "react-router-dom";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, pass)
            .then((userCredentials) => {
                const user = userCredentials.user.email
                console.log('Successfully signed in user:', user)
                navigate("/")
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className="test" >
            <div className="auth-form-container">
                <h2>Log in</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" id="email" name="email" />
                    <label htmlFor="password">password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter your password" id="password" name="password" />
                    <button>Log in</button>
                </form>
                <button className="link-btn" onClick={() => navigate('/register')}>Don't have an account? Register here.</button>
            </div>
        </div>
    )
}