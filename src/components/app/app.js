import React, {Component} from "react";

import "./app.sass";
import Items from "../items";
import ApiService from "../../services/api-service";

class App extends Component {

  state = {
    books: []
  };

  apiService = new ApiService();

  componentDidMount() {
    this.apiService.getData()
      .then((res) => this.setState({
          books: res.data
        })
      )
  }

  render() {
    return (
      <div className="app">
        <div className="wrap">
          <h1 className="app_title mb-5">Я сейчас читаю:</h1>
          <Items books={this.state.books} />
        </div>
      </div>
    );
  };
}

export default App;