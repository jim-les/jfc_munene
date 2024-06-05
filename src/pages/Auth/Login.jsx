import React from 'react';
import './Login.css';
import Weblogo from '../../assets/logo.png';
// import usericon from @mui/icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { TextField } from '@mui/material';

const Login = () => {
    return (
        <div className='login_page'>
            <div className="login_form_card">
                <div className="div_web_logo">
                    <img src={Weblogo} alt="" />
                </div>
                <form>

                    <div className="form_group">
                        <AccountCircleIcon />
                        <input type="email" id="username" name="username" placeholder='username' required/>
                    </div>
                    <div className="form_group">
                        <input type="password" id="password" name="password" placeholder='password' required/>
                    </div>
                    {/* forgot password right */}
                    <div className="form_group" style={{textAlign: "right"}}>
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button type="submit">Log In</button>
                </form>
            </div>
            
        </div>
    )
}

export default Login
