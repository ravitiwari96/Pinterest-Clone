import React from 'react'
import '../App.css'

function Register() {
  return (
    <div class="wrapper">
         <div class="title">
            Register
         </div>
         <form action="#">
            <div class="field">
               <input type="text" required/>
               <label>Username</label>
            </div>
            <div class="field">
               <input type="email" required/>
               <label>Email Address</label>
            </div>
            <div class="field">
               <input type="password" required/>
               <label>Password</label>
            </div>
            <div class="content">
               <div class="checkbox">
                  <input type="checkbox" id="remember-me"/>
                  <label for="remember-me">Remember me</label>
               </div>
               <div class="pass-link">
                  <a href="#">Forgot password?</a>
               </div>
            </div>
            <div class="field">
               <input type="submit" value="Register"/>
            </div>
            <div class="signup-link">
                Already registered ?<a href="/Signin">Login</a>
            </div>
         </form>
      </div>
  )
}

export default Register