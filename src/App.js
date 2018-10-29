import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Form from './components/form.js';
import Time from './components/timeDisplay.js';

class App extends Component {
 constructor(props) {
    super(props);
    this.state = {
    selectedOption: null,
    details:{
    name: "Caravan King's Cross",
    street: "1 Granary Square, Kings Cross",
    city: { value: 'chocolate', label: 'Chocolate' },
    state: null,
    zipcode: " N1C 4AA",
    country:{Value: "United Kingdom", label: "United Kingdom"},
    website:"www.caravan.com",
    menu:"www.menu_caravan.com",
    facebook : "fb_caravan",
    insta: "insta_caravan",
    about:"test",
    category:"Cafe, Restaurant, breakfast, vegan"
},
timing:{
  weekDayOpen : {value : "09:00", label : "09:00"},
  weekDayClose : {value : "22:00", label : "22:00"},
  weekEndOpen : {value : "09:00", label : "09:00"},
  weekEndClose : {value : "16:00", label : "16:00"},
},
route : "home",
  };

    
  }

 
  handleChange = (event) => {
    
    const target = event.target;
    const value =  target.value;
    const name = target.name;
   
   let details = Object.assign({}, this.state.details);    
details[name] = value;                        
this.setState({details});
   

  }

handleTimeChange = name => value => {

  let timing = Object.assign({}, this.state.timing);   
  timing[name] = value;                        
  this.setState({timing});

};

handleSelectChange = name => value => {
   
  let details = Object.assign({}, this.state.details);    
  details[name] = value;                       
  this.setState({details});

};

   onRouteChange = (route) => {    
      
     this.setState({route: route});
  }

  render() {

    const { selectedOption, route } = this.state;

    return (
      <div className="App">
{route === "home" ? 
      <Form handleChange={this.handleChange} 
      handleSelectChange={this.handleSelectChange} 
      details={this.state.details}
      timing={this.state.timing}
      onRouteChange={this.onRouteChange}/>
    :
        <Time timing={this.state.timing} handleTimeChange={this.handleTimeChange} 
        onRouteChange={this.onRouteChange}/>
    
  }
      </div>
    

    );
  }
}

export default App;
