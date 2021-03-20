import React from 'react';
import { Link } from 'react-router-dom';


const LoginUser = () => {
    return (
        <div>
            <div class="main">
            <section className="signup">
            <div className="container">
                <div className="signup-content">
                    <form method="POST" id="signup-form" className="signup-form">
                        <h2 className="form-title">Loge In</h2>
                        <div className="form-group">
                            <input type="email" className="form-input" name="email" id="email" placeholder="Your Email"/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-input" name="password" id="password" placeholder="Password"/>
                            <span toggle="#password" className="zmdi zmdi-eye field-icon toggle-password"></span>
                        </div>
                        <div className="form-group">
                            
                            <label for="agree-term" className="label-agree-term"><span></span><a href="/" className="term-service">Forgotten password?</a></label>
                        </div>
                        <div className="form-group">
                            <input type="submit" name="submit" id="submit" className="form-submit" value="Sign In"/>
                        </div>
                    </form>
                    <p className="loginhere">
                        Create New Account ? <Link to="/login" className="loginhere-link"> Sign Up</Link>
                    </p>
                </div>
            </div>
        </section>
        </div>
        </div>
    );
};

export default LoginUser;