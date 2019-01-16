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
  // initialize our state 
  // state = {
  //   data: [],
  //   id: 0,
  //   message: null,
  //   intervalIsSet: false,
  //   idToDelete: null,
  //   idToUpdate: null,
  //   objectToUpdate: null
  // };

  // componentDidMount() {
  //   this.getDataFromDb();
  //   if (!this.state.intervalIsSet) {
  //     let interval = setInterval(this.getDataFromDb, 1000);
  //     this.setState({ intervalIsSet: interval });
  //   }
  // }

  // componentWillUnmount() {
  //   if (this.state.intervalIsSet) {
  //     clearInterval(this.state.intervalIsSet);
  //     this.setState({ intervalIsSet: null });
  //   }
  // }

  // getDataFromDb = () => {
  //   fetch("/api/getData")
  //     .then(data => data.json())
  //     .then(res => this.setState({ data: res.data }));
  // };

  // putDataToDB = message => {
  //   let currentIds = this.state.data.map(data => data.id);
  //   let idToBeAdded = 0;
  //   while (currentIds.includes(idToBeAdded)) {
  //     ++idToBeAdded;
  //   }

  //   axios.post("/api/putData", {
  //     id: idToBeAdded,
  //     message: message
  //   });
  // };

  // deleteFromDB = idTodelete => {
  //   let objIdToDelete = null;
  //   this.state.data.forEach(dat => {
  //     if (dat.id == idTodelete) {
  //       objIdToDelete = dat._id;
  //     }
  //   });

  //   axios.delete("/api/deleteData", {
  //     data: {
  //       id: objIdToDelete
  //     }
  //   });
  // };

  // updateDB = (idToUpdate, updateToApply) => {
  //   let objIdToUpdate = null;
  //   this.state.data.forEach(dat => {
  //     if (dat.id == idToUpdate) {
  //       objIdToUpdate = dat._id;
  //     }
  //   });

  //   axios.post("/api/updateData", {
  //     id: objIdToUpdate,
  //     update: { message: updateToApply }
  //   });
  // };

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
    // const { data } = this.state;
    // return (
    //   <div>
    //     <ul>
    //       {data.length <= 0
    //         ? "NO DB ENTRIES YET"
    //         : data.map(dat => (
    //             <li style={{ padding: "10px" }} key={data.message}>
    //               <span style={{ color: "gray" }}> id: </span> {dat.id} <br />
    //               <span style={{ color: "gray" }}> data: </span>
    //               {dat.message}
    //             </li>
    //           ))}
    //     </ul>
    //     <div style={{ padding: "10px" }}>
    //       <input
    //         type="text"
    //         onChange={e => this.setState({ message: e.target.value })}
    //         placeholder="add something in the database"
    //         style={{ width: "200px" }}
    //       />
    //       <button onClick={() => this.putDataToDB(this.state.message)}>
    //         ADD
    //       </button>
    //     </div>
    //     <div style={{ padding: "10px" }}>
    //       <input
    //         type="text"
    //         style={{ width: "200px" }}
    //         onChange={e => this.setState({ idToDelete: e.target.value })}
    //         placeholder="put id of item to delete here"
    //       />
    //       <button onClick={() => this.deleteFromDB(this.state.idToDelete)}>
    //         DELETE
    //       </button>
    //     </div>
    //     <div style={{ padding: "10px" }}>
    //       <input
    //         type="text"
    //         style={{ width: "200px" }}
    //         onChange={e => this.setState({ idToUpdate: e.target.value })}
    //         placeholder="id of item to update here"
    //       />
    //       <input
    //         type="text"
    //         style={{ width: "200px" }}
    //         onChange={e => this.setState({ updateToApply: e.target.value })}
    //         placeholder="put new value of the item here"
    //       />
    //       <button
    //         onClick={() =>
    //           this.updateDB(this.state.idToUpdate, this.state.updateToApply)
    //         }
    //       >
    //         UPDATE
    //       </button>
    //     </div>
    //   </div>
    // );

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
