import React, {useState} from 'react'
import './Loginstyles.css'
import { useHistory } from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import { axios } from 'axios';
const Login = () => {
    document.title = "B15 Product Price Tracker | Login";
    const history = useHistory();
    const [user, setUser] = useState({
        email:"",
        password:"",
    });
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({...user, [name]:value})
    }
    const getData = async () => {
        const { email, password } = user;
        const response = await fetch('http://localhost:5000/signin',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email, password
            })
        })
        const data = await response.json();
        console.log(data);
        const setError = document.querySelector('.error');
        if(data.success) {
            history.push(`/tracker/${email}`);
        }
        else {
            setError.innerHTML = `Invalid credentials`;
        }
    }
    return (
        <>
        <body>
            <div className="container">
                <div className='title'>Login</div>
                <div className="inputs">
                    <input type="text" name = "email" className = 'username' placeholder="Enter Email" autoComplete='off' value = {user.email} onChange={handleInputs}/>
                    <input type="password" name = "password" className = "password" placeholder="Enter Password" value = {user.password} onChange={handleInputs}/>
                    <div className="error"></div>
                    <button className = "btn" type="button" onClick={getData}>Login</button>
                </div>
                <div className="login">
                    <p>Don't have an account! <NavLink to="/signup">Sign up</NavLink></p>
                </div>
            </div>
        </body>
        </>
    )
}
export default Login