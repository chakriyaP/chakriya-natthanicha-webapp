import React from "react";
import "./App.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import HomePage  from "./pages/Home.js"
import Nav from "./components/NavigationBar.js"

library.add(fab, faCheckSquare, faCoffee)


function App() {
  return (
    <div className="App">
      <HomePage></HomePage>
    </div>
  );
}

export default App;
