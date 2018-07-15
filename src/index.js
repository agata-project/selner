import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Courses from "./components/Courses";
import Events from "./components/Events";
import Talks from "./components/Talks";

// import "./router/index";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/courses" component={Courses} />
      <Route path="/events" component={Events} />
      <Route path="/talks" component={Talks} />
    </div>
  </Router>,
  document.getElementById("app")
);
registerServiceWorker();
