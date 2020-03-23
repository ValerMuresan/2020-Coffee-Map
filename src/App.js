import React, { Component } from 'react';
import './css/styles.css';
import Main from './components/Main';

class App extends Component {
  initMap = () => {
     let map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 45.850000, lng: 9.400000 },
        zoom: 12
      });
      window.mapRef = map;
    }
/*    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
  async defer></script>
*/
  buildTheScript = () => {
      const getScript = window.document.createElement('script');
      getScript.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDlN7aQHbGpkK85nmc_tDFZEGcuq999SwA&callback=initMap";
      getScript.async = true;
      getScript.defer = true;
      return getScript;
  }
  onLoadScript() {
    const scriptFun = this.buildTheScript();
    const scriptsFromThePage = document.getElementsByTagName('script');
    const script = scriptsFromThePage[0];
    console.log(scriptsFromThePage);
    console.log(script.parentNode);
    script.parentNode.insertBefore(scriptFun, script);
    window.initMap = this.initMap;
  }
  render() {
    this.onLoadScript();
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;