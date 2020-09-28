import React from 'react'
import MiniChart from 'react-mini-chart'
import './laporan.css'
import * as react from 'react-bootstrap'
import datalaporan from './datalaporan'
function laporan() {
    return (
        <div>
            <div className="laporan">
                {/* Minichart For Live Statik */}
                <div className="minichart">
                    <p style={{fontSize: '20px'}}>Statik Data</p>
                    <MiniChart strokeColor="#FF6600" activePointColor="#FF6600" dataSet={[0, -20, -343, 49.3, 300, 200, 78]}/>
                </div>
                <div className="minichart">
                    <p style={{fontSize: '20px'}}>Masukan Data</p>
                    <MiniChart dataSet={[0, -20, 100, 49.3, -90, -10, 78]}/>
                </div>
                <div className="minichart">
                    <p style={{fontSize: '20px'}}>Data Live</p>
                    <MiniChart strokeColor="#FB0000" activePointColor="#FB0000" dataSet={[0, -20, -200, 49.3, -100, 200, 78]}/>
                </div>
                <div className="minichart">
                    <p style={{fontSize: '20px'}}>Data Login</p>
                    <MiniChart strokeColor="#1B00FB" activePointColor="#1B00FB" dataSet={[0, -20, 343, 49.3, -100, 200, 78]}/>
                </div>
                <div className="data-tambah">
                    <react.Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>NO</th>
                                    <th>Timestamp</th>
                                    <th>Nama Pelaksana</th>
                                    <th>NIK</th>
                                    <th>SUMBER WO (WA, CALL, TELEGRAM, NO TIKET)</th>
                                    <th>NO SPBU</th>
                                    <th>Kerusakan</th>
                                    <th>Tindakan</th>
                                    <th>Lain-Lain</th>
                                    <th>TANGGAL</th>
                                    <th>STATUS</th>
                                    <th>AKSI</th>
                                </tr>
                            </thead>
                            <tbody>
                                {datalaporan.map((item, index) => {
                                    return(
                                        <tr key={index}>
                                            <td>{item.no}</td>
                                            <td>{item.timestamp}</td>
                                            <td>{item.namapelaksana}</td>
                                            <td>{item.nik}</td>
                                            <td>{item.sumber}</td>
                                            <td>{item.nospbu}</td>
                                            <td>{item.kerusakan}</td>
                                            <td>{item.tindakan}</td>
                                            <td>{item.lainlain}</td>
                                            <td>{item.tanggal}</td>
                                            <td>{item.status}</td>
                                            <td>
                                                <react.Button variant="danger">Delete</react.Button>
                                                <react.Button variant="primary">Edit</react.Button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </react.Table>
                                <react.Button variant="success">Tambah Laporan</react.Button>
                </div>
            </div>
        </div>
    )
}

export default laporan
