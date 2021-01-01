import React from 'react';
import Home from "./pages/Home";
import GlobaslStyle from "./components/GlobalStyles";
import {Route} from "react-router-dom";

function App() {
  return (
    <div>
      <GlobaslStyle />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
};

export default App;

