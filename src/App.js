import React from 'react';
import Home from "./pages/Home";
import GlobaslStyle from "./components/GlobalStyles";
import {Route} from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <GlobaslStyle />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
};

export default App;

