import React from "react";
import Header from "./Header";
import { withStyles } from "@material-ui/core";

const styles = {};

class Courses extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <p>Cursos</p>
      </div>
    );
  }
}

export default withStyles(styles)(Courses);
