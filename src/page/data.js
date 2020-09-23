import React from 'react'
import * as react from 'react-bootstrap'
import datalaporan from './datalaporan'
import './datajs.css'

function data() {
    return (
        <div>
            <div className="data-download">
            <react.Table striped bordered hover variant="dark" responsive="sm">
                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>Timestamp</th>
                            <th>NAMA PELAKSANA</th>
                            <th>NIK</th>
                            <th>SUMBER WO (WA, CALL, TELEGRAM, NO TIKET)</th>
                            <th>NO SPBU</th>
                            <th>Kerusakan</th>
                            <th>Tindakan</th>
                            <th>Lain-Lain</th>
                            <th>TANGGAL</th>
                            <th>STATUS</th>
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
                                </tr>
                            )
                        })}
                    </tbody>
                </react.Table>
                <react.Button variant="success">Download PDF</react.Button>
            </div>
        </div>
    )
}

export default data
