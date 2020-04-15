import React from "react";

import "./app.sass";
import Items from "../items";

const App = () => {
  return (
    <div className="app">
      <div className="wrap">
        <h1 className="app_title mb-5">Я сейчас читаю:</h1>
        <Items />
      </div>
    </div>
  );
};

export default App;