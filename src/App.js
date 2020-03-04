import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

class App extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      title: 'Spencer Sherk',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Hello, I\'m Spencer Sherk, \n Software Developer based in NYC.',
        projects: ' projects',
        projDesc: 'A selection of projects I\'ve worked on',
        contact: ' contact',
        about: ' about',
        aboutDesc: 'Recent Graduate with a BA in Computer Science from NYU',

      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Talk'
      }
    }
  }

  render() {

    const styleContainer = {
      backgroundColor: '#F6F7F7',
    }

    return (
      <Router>
        <Container className="p-0" fluid={true} style={styleContainer}>
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} projects={this.state.home.projects} contact={this.state.home.contact} about={this.state.home.about} projDesc={this.state.home.projDesc} aboutDesc={this.state.home.aboutDesc} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          
          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;