import React, {Component} from "react";

import "./item.sass";
import {Card, ProgressBar} from "react-bootstrap";

class Item extends Component {

  render() {

    const {item} = this.props;

    return (
      <li>
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              <p>Прочёл <strong>125</strong> страниц из <strong>895</strong>.</p>
              <ProgressBar animated striped variant="info" now={11} label={`${11}%`}/>
            </Card.Text>
          </Card.Body>
        </Card>
      </li>
    );
  }
}

export default Item;