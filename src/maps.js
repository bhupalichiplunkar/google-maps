import React, { Component } from 'react';
import axios from 'axios';

export default class GoogleMaps extends Component {
    constructor(props){
        super(props);
        this.state = {
            latLong : null
        } 
    }

    async componentDidMount(){
        let {
            pincode
        } = this.props;
        let {latLong} = this.state;
        if(pincode) {
            const latLongURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${pincode},in`;
            let data = await axios.get(latLongURL).then((response)=>{
                const {data} = response;
                return data;
            })
            latLong =  data.results[0].geometry.location;
        }
        if(latLong) {
            this.setState({latLong})
            const google = window.google;
            const map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: latLong
              });
        
            let marker = new google.maps.Marker({
              position: latLong,
              map: map,
              title: 'mymaprocks'
            });
        }
    }

    render(){
        return (
            <div id="map" style={{ height: "500px", width: "900px"}} className="map">
            </div>
        )
    }

    //N21 2EG
}