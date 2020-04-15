import React, {Component} from "react";

import "./app.sass";
import Items from "../items";
import {v4} from "uuid";

class App extends Component {

  books = [
    {id: v4(), title: "React In Action", totalPages: 898, myPage: 25},
    {id: v4(), title: "JavaScript for Beginners", totalPages: 435, myPage: 376},
    {id: v4(), title: "CSS for Professionals", totalPages: 450, myPage: 225},
  ];

  render() {
    return (
      <div className="app">
        <div className="wrap">
          <h1 className="app_title mb-5">Я сейчас читаю:</h1>
          <Items books={this.books} />
        </div>
      </div>
    );
  };
}

export default App;