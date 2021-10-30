import React from 'react';
// import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
// import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
// import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaGoogle } from "@react-icons/all-files/fa/FaGoogle";
import { IoArrowBackOutline } from "react-icons/io5";
import './Login.css';
import { Link } from 'react-router-dom';
import Navbar from '../Home/Navbar';
import Footer from '../Footer/Footer';
import useFirebase from '../../Hooks/useFirebase';



const Login = () => {
    const { handleGoogleSignIn, user } = useFirebase();



    console.log(user.displayName);
    // back button working -----------------
    const goBack = () => {
        window.history.go(-1)
    }

    return (
        <div>
            <Navbar />
            <div className="form-warp">
                <IoArrowBackOutline onClick={goBack} className="twitter-icon" />
                <div className="form-container">
                    <div className="log-in-head">
                        <img src="https://i.imgur.com/h8Q1fwq.png" alt="" />
                        <h1>login</h1>
                    </div>

                    <form>
                        <div className="email">
                            <label htmlFor="email">Email</label><br />
                            <input type="email" name="email" id="email" placeholder="email" required />
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label><br />
                            <input type="password" name="password" id="password" placeholder="password" autoComplete="off" required />
                        </div>


                        <div className="register-reset">
                            <div className="checkbox">
                                <input type="checkbox" name="checkbox" id="checkbox" />
                                <label htmlFor="checkbox">Dont have any account !</label>
                            </div>
                            <Link to="/login">forgot password</Link>
                        </div>


                        <div className="submit-button">
                            <button type="submit">login</button>
                        </div>
                    </form>
                    {/* <p className="message"> {message}</p> */}
                    <div className="icons">
                        <FaGoogle onClick={handleGoogleSignIn} className="google-icon" />
                        {/* <FaFacebook className="facebook-icon" />
                        <FaGithub className="github-icon" />
                        <FaTwitter className="twitter-icon" /> */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;