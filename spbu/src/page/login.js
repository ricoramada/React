import React, { Component } from 'react'
import './login.css'

export class login extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                        <div className="col-md-6">
                        <h2>Login Sistem</h2>
                            <form>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Username </label>
                                     <input type="email" className="form-control" placeholder="Masukan username anda"  required/>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" placeholder="Password" />
                                </div>
                                    <button type="submit" class="btn btn-primary btn-lg btn-block">Submit</button>
                            </form>
                        </div>
                </div>
            </div>
        )
    }
}

export default login
