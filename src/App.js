import logo from './logo.svg';
import { ArrayVisualier } from './components/searchVisualiser/searchVis';
import './App.css';
import React, {Component} from 'react';
import NavBar from './components/navBar/navbar';

class App extends Component {
  state = {  } 
  render() { 
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <div className='container'>
          <ArrayVisualier  />
      </div>
    </React.Fragment>
    );
  }
}
 
export default App;
