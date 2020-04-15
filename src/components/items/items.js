import React, { Component } from "react";

import "./items.sass";
import Item from "../item";

class Items extends Component {

  render() {
    const { books } = this.props;
    const items = books.map(item => <Item key={item.id} item={item} />);

    return (
      <div className="cards">
        <ol>
          {items}
        </ol>
      </div>
    );
  }
}

export default Items;