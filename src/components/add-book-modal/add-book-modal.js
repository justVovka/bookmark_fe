import React, {Component} from "react";
import {Button, Form, Modal} from "react-bootstrap";

import "./add-book-modal.sass";

class AddBookModal extends Component {

  render() {
    return (
      <Modal {...this.props}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formGroupTitle">
              <Form.Label>Название Книги:</Form.Label>
              <Form.Control type="text" placeholder="Введите название" />
            </Form.Group>
            <Form.Group controlId="formGroupTotalPages">
              <Form.Label>Количество страниц:</Form.Label>
              <Form.Control type="text" placeholder="Введите значение" />
            </Form.Group>
            <Button className="float-right" variant="success" type="submit">
              Сохранить
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.onHide}>
            Отмена
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AddBookModal;