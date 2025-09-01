import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        // console.log("Login clicked");
        // console.log("Email:", email, password);
        let result = await fetch("http://localhost:5000/login", {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        // console.log();

        if (result[0].name) {
            localStorage.setItem("user", JSON.stringify(result));
            // alert("Login Successful");
            navigate("/"); // Use navigate to redirect to home page
            // window.location.href = "/"; // Redirect to home page

        } else {
            alert("Please enter valid details");
        }

    }

    return (
        <div className='register'>
            <div className="register_box">
                <h1 className='h1_tag'>Log In</h1>
                <input type="text" placeholder='Enter Email' className='inputBox' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Enter Password' className='inputBox' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="signUp" onClick={handleLogin}>Log In</button>
            </div>
        </div>
    )
}

export default Login
