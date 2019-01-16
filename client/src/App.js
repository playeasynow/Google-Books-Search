import React, { Component } from 'react';
import axios from "axios";
import logo from './book.png';
import './App.css';
import NoMatch from "./pages/NoMatch";
import Saved from "./pages/Saved";
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Gallery from './components/Gallery/Gallery.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav/index.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      items: []
    };
  }

  search() {
    const API_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
    fetch(`${API_URL}${this.state.query}`)
      .then(response => response.json())
      .then(json => {
        let { items } = json;
        this.setState({ items })
      }); // todo: Add a catch method here in case the API call fails
  }

  render() {

    return (
      <div className="App container">
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link active text-dark" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">Saved</a>
          </li>
        </ul>
        {/* <Router>
          <div>
          <Nav />
          <Switch> */}
            {/* <Route exact path="/" component={Gallery} /> */}
            {/* <Route exact path="/saved" component={Saved} /> */}
            {/* <Route component={NoMatch} /> */}
          {/* </Switch>
          </div>
        </Router> */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Google Books</h1>
        </header>
        <div className="container main-content">
          <FormGroup>
            <InputGroup>
              <FormControl type="text" placeholder="Search for a book"
                onChange={event => this.setState({ query: event.target.value })}
                onKeyPress={event => {
                  if ('Enter' === event.key) {
                    this.search();
                  }
                }} />
              <InputGroup.Addon onClick={() => this.search()}>
                <Glyphicon glyph="search"></Glyphicon>
              </InputGroup.Addon>
            </InputGroup>
          </FormGroup>
          <Gallery items={this.state.items} />
        </div>
      </div>
    );
  }
}

export default App;
