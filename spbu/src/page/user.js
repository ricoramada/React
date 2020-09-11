import React, { Component } from 'react'
import './user.css'

class user extends Component {
    render() {
        return (
            <div className="laman">
                <div className="card1">
                    <img src={ require('../gambar/r.JPG') } alt="John" style={{width: '100px'}}/>
                    <h1>Mukhamad Rico Ramada</h1>
                    <p class="title">Rekayasa Perangkat Lunak</p>
                    <p>SMK Telkom Malang</p>
                    <a className="k" href="#section"><i class="fa fa-dribbble"></i></a>
                    <a className="k" href="#section"><i class="fa fa-twitter"></i></a>
                    <a className="k" href="#section"><i class="fa fa-linkedin"></i></a>
                    <a className="k" href="#section"><i class="fa fa-facebook"></i></a>
                    <p><button className="s">Contact</button></p>
                </div>
            </div>
        )
    }
}

export default user
