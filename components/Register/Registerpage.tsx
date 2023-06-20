import React from 'react';
import { GoogleLogin } from 'react-google-login';
import styles from './Registerpage.module.css';
const Registerpage: React.FC = () => {

    return (
        <div className={styles.loginContainer}>
            <div className={styles.leftColumn}>
                <h1 className={styles.hleftColumn}>...</h1>
                <p className={styles.pleftColumn}>GlowTracker is a comprehensive web app designed to help you achieve and maintain radiant, healthy skin. By combining skincare tracking, nutritional monitoring, and weight management, GlowTracker offers a holistic approach to enhancing your skin's natural glow.</p>
            </div>
            <div className={styles.rightColumn}>
                <p className={styles.prightColumn}>Already a member? <a href="/login">Login now </a></p>

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
                    <p className={styles.pemailField}>Name</p>
                    <input className={styles.inputemailField} type="text" />
                </div>
                <div className={styles.emailField}>
                    <p className={styles.pemailField}>Email Address</p>
                    <input className={styles.inputemailField} type="text" />
                </div>
                <div className={styles.pwdField}>
                    <p className={styles.ppwdField}>Password</p>
                    <input className={styles.inputpwdField} type="text" placeholder="6+ characters" />
                </div>
                <div className={styles.checkbox}>
                    <label className={styles.checkboxLabel}>
                        <input
                            className={styles.checkboxInput}
                            type="checkbox"
                        />
                        <span className={styles.checkboxCustom}></span>
                        creating an account means you are okay with our Terms of Service...
                    </label>
                </div>
                <div className={styles.registerButton}>
                    <button className={styles.btnregisterButton}>Create Account</button>
                </div>



            </div>
        </div>
    );
};

export default Registerpage;
