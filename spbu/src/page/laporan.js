import React from 'react'
import MiniChart from 'react-mini-chart'
import './laporan.css'

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


            </div>
        </div>
    )
}

export default laporan
