import React from "react";
import Header from "./Header";
import { withStyles } from "@material-ui/core";

const styles = {};

class Talks extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <p>Talks</p>
      </div>
    );
  }
}

export default withStyles(styles)(Talks);
