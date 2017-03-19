import React, {Component} from 'react';
import './App.css';
import Header from './components/header';
import Summary from './components/summary';
// import Contact from './components/contact';
import Footer from './components/footer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <Header />
                </div>
                <div>
                    <Summary />
                </div>
                {/* <div>
                    <Contact />
                </div> */}
                <div>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default App;
