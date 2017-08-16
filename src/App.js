import React, {Component} from 'react';
import './App.css';
import Header from './components/header';
import Summary from './components/summary';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
        <div>
          <Summary />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
