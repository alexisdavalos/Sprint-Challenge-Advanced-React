import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import Users from './components/Users';
import './App.css';
import './index.css'
//Todo
// STEP 1
// Class component that fetches data from the server you now have running - the data can be fetched from http://localhost:5000/api/players
// STEP 2 
// Display the player data you receive from the API
// STEP 3
// Build a custom hook and use it in your app - this can be a localStorage hook, a fetch hook, a dark mode hook, or any other hook you would like
// STEP 4 
// Write a "reasonable" amount of unit tests for your React components. What does "reasonable amount" mean? That is up to you to decide. Be ready to defend your choice to your TL 

class App extends React.Component {
  //Component Constructor Function
  constructor(){
    super()
    this.state = {
      Users: []
    }
  }
  //Component Life Cycle Mount Function
  componentDidMount(){
    this.fetchData();
    console.log('Component Mounted | Fetch Data()')
  }
  //Fetch User Data
  fetchData(){
    axios.get('http://localhost:5000/api/players')
    .then(response =>{
      console.log(response.data)
      this.setState({
        ...this.state.Users,
        Users: response.data
      })
      console.log('Fetching Data from API...', this.state.Users)
    })
    .catch(err => {
      console.log(err);
    })

  }
  //Renders App
  render(){
    return (
      <div className="App">
        <header  data-testid='header' className="App-header">
          <Users Users={this.state.Users}/>
        </header>
      </div>
    );
  }
  
}

export default App;
