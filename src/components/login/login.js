import React, { Component } from "react";


export default class Login extends Component {
  render() {
    return (
        <form className='form-login' action="" method=''>
            <h3 className='form-title'>Welcome back to Login Page</h3>
            <fieldset>
                <div className='form-group'>
                    <input type="text" name='name' placeholder='Username'/>
                </div>
                <div className='form-group'>
                    <input type="password" name='password' placeholder='Password'/>
                </div>
                <div className='submit'>
                    <button className='submit-btn' type='submit'>ENTER</button>
                </div>
            </fieldset>
        </form>
    )
  }
}
