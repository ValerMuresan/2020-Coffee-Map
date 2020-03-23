import React, { Component } from 'react';
import marker from '../images/place-marker.png';
//place-marker.png taken from https://icons8.com/icons/set/map-marker

class Markers extends Component {
icons = [];
addIcons = (locations) => {
    
    if(window.google){
        let infowindow = new window.google.maps.InfoWindow();
        for (let i = 0; i < locations.length; i++) {
            const point = marker;
            let icon = new window.google.maps.Marker({
                animation: null,
                position: {
                    lat: locations[i].venue.location.lat,
                    lng: locations[i].venue.location.lng
                },
                icon: point, 
                map: window.mapRef,
                title: locations[i].venue.id
            });
            icon.addListener('click', () => {
                toggleBounce();
                let detail = this.props.buildDetailBox(locations[i]);
                infowindow.setContent(detail);
                infowindow.open(window.mapRef, icon);
                //stopBounce();
            });
            const toggleBounce = () => {
                if (icon.getAnimation() !== null) {
                  icon.setAnimation(null);
                } else {
                  icon.setAnimation(window.google.maps.Animation.BOUNCE);
                }
                setTimeout(() => { icon.setAnimation(null) }, 1000);
              }
              /*
            const stopBounce = () => {
                icon.setAnimation(null);
            }
             */
            this.icons.push(icon);
        }
        window.infowindow = infowindow;
        window.icons = this.icons;
    }
};
clearIcons = () => {
    for (let i = 0; i < this.icons.length; i++){
        this.icons[i].setMap(null);
    } 
}
render() {
    this.clearIcons();
    this.addIcons(this.props.locations);
   
    return ( 
    <div id='map' />
    )
}
}
export default Markers;