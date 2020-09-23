import React, { Component } from 'react'
import './user.css'
import * as ImIcons from 'react-icons/im'
import * as AiIcons from 'react-icons/ai'

class user extends Component {
    render() {
        return (
            <div className="laman">
                <div className="card1">
                    <div style={{width: '200px',height: '200px',margin: 'auto',overflow: 'hidden',border: '2px solid black', borderRadius: '50%'}}>
                        <img src={ require('../gambar/r.JPG') } alt="John" style={{width: '200px'}}/>
                    </div>
                    <h1>Mukhamad Rico Ramada</h1>
                    <p class="title">Rekayasa Perangkat Lunak</p>
                    <p>SMK Telkom Malang</p>
                     {/* eslint-disable-next-line */}
                        <a className="a" href="#section" target="_blank"><AiIcons.AiOutlineTwitter/> Twitter</a>
                        {/* eslint-disable-next-line */}
                        <a className="a" href="https://www.facebook.com/rico.ramada.31/" target="_blank"><ImIcons.ImFacebook2/> Facebook</a>
                    <hr/>
                    <p><button className="s">Contact</button></p>
                </div>
                <div className="card2">
                    <h1 style={{marginRight: '120px'}}>Profile</h1>
                    <p style={{marginRight: '120px'}}>profile bisa diedit</p>
                    <hr/>
                    <div className="input">
                        <div className="inputitem">
                        <label for="name">Nama</label>
                        <input type="text" className="form-control" placeholder="Nama" value="Mukhamad Rico Ramada"/>
                        </div>
                        <div className="inputitem">
                        <label for="name">Email</label>
                        <input type="text" className="form-control" placeholder="Email" value="mukhamad_rico_27rpl@student.smktelkom-mlg.sch.id"/>
                        </div>
                        <div className="inputitem">
                        <label for="name">Jabatan</label>
                        <input type="text" className="form-control" placeholder="Jabatan" value="Siswa"/>
                        </div>
                        <div className="inputitem">
                        <label for="name">Negara</label>
                        <input type="text" className="form-control" placeholder="Negara" value="Indonesia"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default user
