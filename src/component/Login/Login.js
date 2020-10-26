import React from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../../firebase';



function Login() {
    const histort = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const signIn = e => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                histort.push('/')
            })
            .catch(error => alert(error.message))
    }
    const register = e => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    histort.push('/')
                }

                //console.log(auth);
            }).catch(error => alert(error.message))
    }

    return (

        <div className="login">
            <Link to="/">
                <img className="login_logo" src="https://i.pinimg.com/originals/f8/88/1e/f8881ef6016ed4be9286d1ae8f9b240f.png" alt="" />

            </Link>

            <div className="login_container">
                <h3>Sign In</h3>


                <form >
                    <h5>E-mail</h5>
                    <input type="text" name="" value={email} onChange=
                        {e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="text" name="" value={password} onChange=
                        {e => setPassword(e.target.value)} />

                    <div className="logio_b">
                        <button type='submit' className="login_signInButton" onClick={signIn}>Sign In</button>



                        <button onClick={register} className="login_registerButton">Create Your Account</button>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default Login
