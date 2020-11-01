import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

import './app.sass';
import Items from '../items';
import ApiService from '../../services/api-service';
import AddBookModal from '../add-book-modal';
import Loader from '../loader';

class App extends Component {
  state = {
    books: [],
    showModal: false,
    isLoading: false,
  };

  apiService = new ApiService();

  componentDidMount() {
    this.apiService.getData().then((res) => {
      const books = Object.values(res);
      this.setState({
        books,
        isLoading: true,
      });
    });
  }

  handleClose = () => {
    this.setState({ showModal: false });
  };

  handleShow = () => {
    this.setState({ showModal: true });
  };

  render() {
    return (
      <div className="app">
        <div className="wrap">
          <Button
            className="float-right"
            variant="primary"
            onClick={this.handleShow}
          >
            Добавить новую книгу
          </Button>
          <AddBookModal show={this.state.showModal} onHide={this.handleClose} />

          <h1 className="app_title mb-5">Я сейчас читаю:</h1>
          {this.state.isLoading ? (
            <Items books={this.state.books} />
          ) : (
            <Loader />
          )}
        </div>
      </div>
    );
  }
}

export default App;
