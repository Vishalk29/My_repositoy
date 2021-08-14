import React, { Component } from "react";
import "./App.css";
import {CardList} from "../src/Component/Card-list/Card-list.component";
import {SearBox} from "../src/Component/SearchBox/SearchBox.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Monster: [],
      searchfiled:" ",
    };
    
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ Monster: users }));
  }
  // CREATING A ARROW FUNCTION
  handleChanges = (e) =>  this.setState({ searchfiled:e.target.value});
  
  
  render() {
     
    // Concept destructure
  const {Monster ,searchfiled} = this.state;

  // To filering the text what we entering we use filter()and include() method
  const filterUser = Monster.filter((Monster) => 
  Monster.name.toLowerCase().includes(searchfiled.toLowerCase())
  );
  console.log(filterUser);

    return (
      <div className="App">
      <h1>Monster Game</h1>
      <SearBox
      placeholder="Search monster"
      handlechange={this.handleChanges}
      />
      <CardList Monster={filterUser}/>
      </div>
      
    );
  }
}

export default App; 
