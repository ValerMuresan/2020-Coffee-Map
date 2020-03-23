import React, { Component} from 'react';
import SideNav from './SideNav';
import * as PlacesApi from './FoursquareApi';
import Markers from './Markers';
import HeadNav from './HeadNav';
import google from '../images/google.png';
//google.png taken from https://icons8.com/icons/set/google
import udacity from '../images/udacity.png';
//udacity.png taken from https://iconscout.com/icon/udacity
import react from '../images/react.png';
//react.png taken from https://www.iconfinder.com/search/?q=react
import foursquare from '../images/foursquare.png';
//foursquare.png taken from https://www.iconfinder.com/icons/1298742/foursquare_icon
import googlemaps from '../images/googlemaps.png';
//googlemaps.png taken from https://www.iconfinder.com/icons/1916065/brand_brands_google_logo_logos_maps_icon


class Main extends Component {
     constructor(props) {
        super(props)
        this.state = {
            locations: [],
            query: '',
            selectedLocations: [],
            displaySideNav: false,
        }
    }
    componentDidMount() {
        PlacesApi.getPlaces().then(data => 
          this.setState({ locations: data, selectedLocations: data })) 
          .catch((err) => 
          { console.log(`Can't get the request cause an error appeared! ${err}`)})
          console.log(`Data`);
    }
    clickManage = (location) => {
        for(let i = 0; i < window.icons.length; i++){
            if(location.venue.id === window.icons[i].title){
                let detail = this.buildDetailBox(location);
                window.infowindow.setContent(detail);
                window.infowindow.open(window.mapRef, window.icons[i]);  
            }
        } 
    }
    buildDetailBox = (location) => {
    return (
    `<h3 tabIndex='0' aria-label='Name of Coffe Shop'>${location.venue.name}</h3>
        <p tabIndex='0' aria-label='Address'>Address: ${location.venue.location.address}</p>
        <p tabIndex='0' aria-label='Address'>Coords:<br> lat:${location.venue.location.lat},<br> lng:${location.venue.location.lng}</p>
        <ul className='helpers'>
            <span className='powered'>powered by</span>
            <li tabIndex='0' className='google' arial-label='google icon' >
                <a href='https://www.google.com/'><img src=${google} alt='Google icon'/></a>
            </li>
            <li tabIndex='0' className='udacity' arial-label='udacity icon'>
                <a href='https://www.udacity.com/'><img src=${udacity} alt='Udacity icon' /></a>
            </li>
            <li tabIndex='0' className='react' arial-label='reactJs icon'>
                <a href='https://reactjs.org/'><img src=${react} alt='ReactJs icon' /></a>
            </li>
            <li tabIndex='0' className='foursquare' arial-label='foursquare icon'>
                <a href='https://foursquare.com/'><img src=${foursquare} alt='Foursquare icon'/></a>
                    </li>
            <li tabIndex='0' className='googlemaps' arial-label='googlemaps icon'>
                <a href='https://www.google.com/maps'><img src=${googlemaps} alt='Googlemaps icon' /></a>
            </li>
        </ul>`
    )   
    }
    searchThePlace = (query) => {
        this.setState({query});
        if (query) {
        this.setState({
            locations: this.filterPlaces(query, this.state.locations)
        });
        } else {
            this.setState({ 
                query: '',
                locations: this.state.selectedLocations});
        }
    };
    filterPlaces = (query, locations) => {
        return locations.filter(location => location.venue.name.toLowerCase().includes(query));
    }
    menuControl = () => {
        document.querySelector('.sidenav')
        this.setState({ displaySideNav: !this.state.displaySideNav })
    }

    render() {
        console.log(this.state.locations);
        return (
        <div className='main'>
            <HeadNav 
            menuControl={this.menuControl.bind(this)}/>
            <SideNav 
            locations={this.state.locations} 
            displayInfo={this.clickManage} 
            query={this.state.query} 
            searchThePlace={this.searchThePlace}
            isOpen={this.state.displaySideNav}/>
            <Markers
            locations={this.state.locations} 
            buildDetailBox={this.buildDetailBox}/>
        </div>
        );
    }
}
export default Main;
