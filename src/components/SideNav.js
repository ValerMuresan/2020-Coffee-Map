import React, { Component } from 'react';

class SideNav extends Component {
    render() {
        const locations = this.props.locations;
        if (!this.props.isOpen){
            return null
        } else {
            return(
                <div tabIndex='0' aria-label='CoffeeShops list' className='sidenav'>
                    <h2 tabIndex='0'>Coffee Shops</h2>
                    <input tabIndex='0' aria-label='search field' type="text" value={this.props.query} onChange={(event) => {this.props.searchThePlace(event.target.value.toLowerCase())}}/>
                    <ul>
                        {locations.map(location => (
                            <li key={location.venue.id}>
                            <div>
                                <h3 tabIndex='0' aria-label='Name of Coffe Shop'
                                    onClick = {() => this.props.displayInfo(location)}>
                                    {location.venue.name} 
                                </h3>    
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )
        }
    }
}
export default SideNav;
