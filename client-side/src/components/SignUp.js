import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();


    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/')
        }
    })

    const handleSubmit = async () => {
        console.log('fsfsfdsfsfsf sfs')
        let result = await fetch('http://localhost:5000/register', {
            method: 'post',
            body: JSON.stringify({ name, password, email }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.log("result", result);
        localStorage.setItem("user", JSON.stringify(result));
        navigate('/');

    }

    return (
        <div className="register">
            <h1>Register</h1>
            <input className="inputBox" value={name} type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
            <input className="inputBox" type="text" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="inputBox" type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className="signUp" type="button" onClick={handleSubmit}>Sign Up</button>
        </div>
    )
}

export default SignUp