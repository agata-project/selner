import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Divider,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Toolbar,
  Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const styles = {
  appBar: {
    backgroundColor: "#EEE",
    color: "#000000"
  },
  udescColor: {
    color: "#0a9854"
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -10,
    marginRight: 15
  },
  menuList: {
    width: 250
  },
  menuItem: {
    textDecoration: "none"
  }
};

class Header extends React.Component {
  state = {
    menu: false
  };

  toggleMenu = open => () => {
    this.setState({
      menu: open
    });
  };

  render() {
    const { classes } = this.props;

    const menuItems = (
      <div className={classes.menuList}>
        <Typography
          variant="display1"
          align="center"
          className={classes.udescColor}
        >
          Bem vindo, fudido!
        </Typography>
        <Divider />
        <Link to="/" className={classes.menuItem}>
          <ListItem button>
            <ListItemIcon>
              <Icon style={styles.udescColor}>home</Icon>
            </ListItemIcon>
            <ListItemText primary="Início" />
          </ListItem>
        </Link>
        <Divider />
        <Link to="/talks" className={classes.menuItem}>
          <ListItem button>
            <ListItemIcon>
              <Icon style={styles.udescColor}>
                <i className="fa fa-chalkboard-teacher" />
              </Icon>
            </ListItemIcon>
            <ListItemText primary="Palestras" />
          </ListItem>
        </Link>
        <Divider />
        <Link to="/events" className={classes.menuItem}>
          <ListItem button>
            <ListItemIcon>
              <Icon className={classes.udescColor}>event</Icon>
            </ListItemIcon>
            <ListItemText primary="Eventos" />
          </ListItem>
        </Link>
        <Divider />
        <Link to="/courses" className={classes.menuItem}>
          <ListItem button>
            <ListItemIcon>
              <Icon className={classes.udescColor}>school</Icon>
            </ListItemIcon>
            <ListItemText primary="Cursos" />
          </ListItem>
          <Divider />
        </Link>
        <ListItem button>
          <ListItemIcon>
            <Icon style={styles.udescColor}>exit_to_app</Icon>
          </ListItemIcon>
          <ListItemText primary="Sair" />
        </ListItem>
      </div>
    );

    return (
      <AppBar position="static" className={classes.appBar}>
        <SwipeableDrawer
          className={classes.menuList}
          anchor="left"
          open={this.state.menu}
          onClose={this.toggleMenu(false)}
          onOpen={this.toggleMenu(true)}
        >
          <div tabIndex={0} role="button">
            <div>
              <List>{menuItems}</List>
            </div>
          </div>
        </SwipeableDrawer>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={this.toggleMenu(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title">Selner Talks</Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
