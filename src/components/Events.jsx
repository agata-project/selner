import React from "react";
import Header from "./Header";
import { withStyles } from "@material-ui/core";

const styles = {};

class Events extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <p>Eventos</p>
      </div>
    );
  }
}

export default withStyles(styles)(Events);
