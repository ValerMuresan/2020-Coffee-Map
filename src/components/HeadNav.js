import React, { Component } from 'react';
import hamburger from '../images/hamburger.png';
// hamburger.png took from https://icons8.com/icons/set/menu-icon#

class HeadNav extends Component {
    render() {
        return (
            <div>
                <header className='headnav'>
                    <div 
                        tabIndex="0" 
                        className="hamburgerBtn" 
                        aria-label='Toggle list of coffee shops'>
					    <img src={hamburger} alt="Menu icon" onClick={() => this.props.menuControl()}/>
				    </div>
                    <h1 tabIndex='0' className='title'>Lecco's Coffee Shops </h1>
                </header>
            </div>
        )
    }
}
export default HeadNav;