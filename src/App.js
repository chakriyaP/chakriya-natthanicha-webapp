import React from "react";
import "./App.css";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/NavigationBar.js";
import Home from "./pages/Home.js";

import HistoryRice from "./pages/HistoryRice.js";
import HistotyCane from "./pages/HistotyCane.js"
import Staff from "./pages/Staff.js";
import staffEditValueDefaule from "./pages/staffEditValueDefaule"

import FirstFormCane from "./pages/FirstFormCane.js";
import SecondFormCane from "./pages/SecondFormCane.js";
import ThirdFormCane from "./pages/ThirdFormCane.js";
import ProcessCane from "./pages/ProcessCane.js"
// import CustomProgressBar from "./components/CustomProgressBar"

import FirstformRice from "./pages/FirstformRice.js";
import SecondFormRice from "./pages/SecondFormRice.js";
import ThirdFormRice from "./pages/ThirdFormRice.js";
import ProcessRice from "./pages/ProcessRice.js"
import DetailsProcesRice from "./pages/DetailsProcesRice.js"




import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {rootReducer} from './redux/reducers'


const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  return (
    <Provider store={store}>
    <Router>
      {/* <ScrollToTop> */}
      <Navbar />
      <Switch>
        <Route path="/chakriya-natthanicha-webapp/cane" component={FirstFormCane} />
        <Route path="/chakriya-natthanicha-webapp/cane2" component={SecondFormCane} />
        <Route path="/chakriya-natthanicha-webapp/cane3" component={ThirdFormCane} />
        <Route path="/chakriya-natthanicha-webapp/caneProcess"  component={ProcessCane} />

        <Route path="/chakriya-natthanicha-webapp/rice" component={FirstformRice} />
        <Route path="/chakriya-natthanicha-webapp/rice2" component={SecondFormRice}/>
        <Route path="/chakriya-natthanicha-webapp/rice3" component={ThirdFormRice}/>
        <Route path="/chakriya-natthanicha-webapp/riceProcess" component={ProcessRice}/>
        <Route path="/chakriya-natthanicha-webapp/detailsProcess" component={DetailsProcesRice}/>

        <Route path="/chakriya-natthanicha-webapp/historyRice" component={HistoryRice} />
        <Route path="/chakriya-natthanicha-webapp/histotyCane" component={HistotyCane} />
        <Route path="/chakriya-natthanicha-webapp/staff" component={Staff} />
        <Route path="/chakriya-natthanicha-webapp/staffEditValueDefaule" component={staffEditValueDefaule} />
      
        <Route path="/chakriya-natthanicha-webapp" component={Home} />
      
      </Switch>
      {/* </ScrollToTop> */}
     

      {/* <FirstFormCane/> */}
      {/* <FirstFormRice /> */}
      {/* <SecondFormRice/> */}
      {/* <ThirdFormRice/> */}
    </Router>
    </Provider>
  );
}

export default App;
