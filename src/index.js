import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import routes from "./routes";

ReactDOM.render(routes, document.getElementById("app"));
registerServiceWorker();
