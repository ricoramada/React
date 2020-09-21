import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';
import datatempat from './tempatspbu';
import './maps.css'

class Maps extends Component {
    render() {
        return (
            <div className="containermaps">
                <div className="maps">
                    <Map google={this.props.google} initialCenter={{lat: -7.651733, lng: 111.530217}} zoom={9}>
                        <Marker onClick={this.onMarkerClick}
                                name={'Telkom Witel'} 
                                position={{lat: -7.651733, lng: 111.530217}}/>
                        {datatempat.map((item, index) => {
                          return(
                            <Marker key={index} onClick={this.onMarkerClick}
                                    name={item.nama} 
                                    position={item.posisi}/>
                          )
                        })}
                        <InfoWindow onClose={this.onInfoWindowClose}>
                        </InfoWindow>
                    </Map>
                </div>
            </div>
        );
    }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBhNKoO0zok-G32_cVLTOEeXqu4l5cPtDU'
})(Maps)
