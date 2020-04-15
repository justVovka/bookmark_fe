import React, { Component } from "react";

import "./items.sass";
import Item from "../item";

class Items extends Component {

  render() {
    return (
      <div className="cards">
        <ol>
          <Item />
        </ol>
      </div>
    );
  }
}

export default Items;