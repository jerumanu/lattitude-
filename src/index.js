import  React from "react"
import ReactDOM from 'react-dom'
import  SeasonDisplay  from  './SeasonDisplay'





class App extends React.Component{

    state = {lat : null , errorMassage: "" }; 


  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(position => this.setState({lat:position.coords.latitude}),
    err => this.satState({errorMassage:err.errorMassage}));


  }


  render(){
    return (
    
  <SeasonDisplay lat={this.state.lat} />
    )
  }
};

ReactDOM.render(<App />, document.querySelector('#root'));