import React, {Component} from "react";

import "./item.sass";
import {Card, ProgressBar} from "react-bootstrap";
import ConsiderService from "../../services/consider-service";

class Item extends Component {

  considerService = new ConsiderService();

  render() {
    const {item} = this.props;
    const percents = this.considerService.calculatePercents(item.totalPages, item.myPage);
    const progressVariantColor = percents > 95 ? "success" :
                                 percents > 66 ? "info" :
                                 percents > 33 ? "warning" :
                                 "danger";

    return (
      <li>
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              Прочёл <strong>{item.myPage}</strong> страниц из <strong>{item.totalPages}</strong>.
            </Card.Text>
              <ProgressBar animated striped variant={progressVariantColor} now={percents} label={`${percents}%`}/>
          </Card.Body>
        </Card>
      </li>
    );
  }
}

export default Item;