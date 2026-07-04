import { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  const [login,setLogin]=useState(true);
  return (

    <div className="container">
      <div className="card">
        <h1>Login Form</h1>
        <div className="tabs">
         <button
          className={login ? "active":""}
          onClick={()=>setLogin(true)}
          >
            Login
          </button>
          <button
          className={!login ? "active":""}
          onClick={()=>setLogin(false)}
          >
            Signup
          </button>
        </div>

        <form>
          {!login && (
            <input
            type="text"
            placeholder="Full Name"
            />
          )}

          <input
          type="email"
          placeholder="Email Address"
          />

          <input
          type="password"
          placeholder="Password"
          />

          {login && (
            <p className="forgot">
              Forgot password?
            </p>
          )}

          <button className="submit">
            {login ? "Login":"Signup"}
          </button>
        </form>

        <p className="bottom">
          {login ? (
            <>
              Not a member?
              <span
              onClick={()=>setLogin(false)}
              >
                Signup now
              </span>
            </>

          ):(
            <>
            Already have an account?
            <span
            onClick={()=>setLogin(true)}
            >
              Login
            </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
export default LoginForm;