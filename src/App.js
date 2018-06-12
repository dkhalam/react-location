import React, { Component } from 'react';
import './App.css';
// import the Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper } from 'google-maps-react' 
// import child component
import MapContainer from './MapContainer'
class App extends Component {
  render() {
    return (
      <div>
        <h1>David's San Diego Hotspots with Google Maps and React</h1>

        <MapContainer google={this.props.google} />

        <p>Created using Google Maps API and Create-React-App</p>
      </div>
    );
  }
}
// OTHER MOST IMPORTANT: Here we are exporting the App component WITH the GoogleApiWrapper. You pass it down with an object containing your API key
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBrliU3HqKp4PDJsmSVkn2y0Y7615tvmj0',
})(App)