import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()

        handleLogin(email, password);

        setemail("");
        setpassword("");
    }
    return (
        <>
            <div>
                <div className="container">
                    <form className="card" onSubmit={(e) => handleSubmit(e)}>
                        <h2>Login</h2>

                        <input type="email"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            placeholder="Enter Email"  />
                        <input type="password"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                            placeholder="Enter Password" />

                        <button>Login</button>

                        <p className="footer-text">Don't have an account? Sign up</p>
                    </form>
                </div>

            </div>

        </>
    )
}

export default Login