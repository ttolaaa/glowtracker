import React from 'react';
import { GoogleLogin } from 'react-google-login';
import styles from './Loginpage.module.css';
import Link from 'next/link';
const Loginpage: React.FC = () => {

    return (
        <div className={styles.loginContainer}>
            <div className={styles.leftColumn}>
                <h1 className={styles.hleftColumn}>...</h1>
                <p className={styles.pleftColumn}>GlowTracker is a comprehensive web app designed to help you achieve and maintain radiant, healthy skin. By combining skincare tracking, nutritional monitoring, and weight management, GlowTracker offers a holistic approach to enhancing your skin's natural glow.</p>
            </div>
            <div className={styles.rightColumn}>
                <p className={styles.prightColumn}>Not a member? <a href="/register">Register now </a></p>

                {/* <h1>Sign in to Nomu-diet</h1> */}
                <h1 className={styles.hrightColumn}>...</h1>
                <div className={styles.googleButtonContainer}>
                    <GoogleLogin
                        clientId="YOUR_GOOGLE_CLIENT_ID"
                        buttonText="Sign in with Google"
                        cookiePolicy="single_host_origin"
                    />
                </div>
                <div className={styles.orContainer}>
                    <div className={styles.orLine}></div>
                    <p className={styles.or}>or</p>
                    <div className={styles.orLine}></div>
                </div>
                <div className={styles.emailField}>
                    <p className={styles.pemailField}>Email Address</p>
                    <input className={styles.inputemailField} type="text" />
                </div>
                <div className={styles.pwdField}>
                    <p className={styles.ppwdField}>Password</p>
                    <input className={styles.inputpwdField} type="text" />
                </div>
                <div className={styles.forgetPwd}>
                    <p className={styles.pforgetPwd}>
                        <a href='/forgetpassword'>Forget Password?</a>
                    </p>
                </div>
                <div className={styles.loginButton}>
                    <Link href='/userpage'>
                    <button className={styles.btnloginButton} >Login</button>
                    </Link>
                </div>



            </div>
        </div>
    );
};

export default Loginpage;
