import React from 'react';
import PropTypes from 'prop-types';
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
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = {
  appBar: {
    backgroundColor: '#EEE',
    color: '#000000'
  },
  udescColor: {
    color: '#0a9854'
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
    textDecoration: 'none'
  }
};

const MenuItem = (props) => {
  return (
    <Link to={props.path} style={styles.menuItem}>
      <ListItem button>
        <ListItemIcon>
          <Icon style={styles.udescColor}>
          { props.fa ? (
            <i className={props.icon}></i>
          ) : (
            props.icon
          )};
          </Icon>
        </ListItemIcon>
        <ListItemText primary={props.title} />
      </ListItem>
    </Link>
  );
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
          align='center'
          className={classes.udescColor}
          variant='display1'
        >
          Bem vindo, fudido!
        </Typography>
        <Divider />
        <MenuItem 
          icon='home' 
          path='/' 
          title='Início' />
        <Divider />
        <MenuItem 
          fa='true'
          icon='fa fa-chalkboard-teacher'
          path='/talks' 
          title='Palestras' />
        <Divider />
        <MenuItem 
          icon='event' 
          path='/events' 
          title='Eventos' />
        <Divider />
        <MenuItem 
          icon='school'
          path='/courses' 
          title='Cursos' />
        <Divider />
        <MenuItem 
          icon='exit_to_app'
          path='/logout' 
          title='Sair' />
      </div>
    );

    return (
      <AppBar position='static' className={classes.appBar}>
        <SwipeableDrawer
          anchor='left'
          className={classes.menuList}
          onClose={this.toggleMenu(false)}
          onOpen={this.toggleMenu(true)}
          open={this.state.menu}
        >
          <div tabIndex={0} role='button'>
            <div>
              <List>{menuItems}</List>
            </div>
          </div>
        </SwipeableDrawer>
        <Toolbar>
          <IconButton
            aria-label='Menu'
            className={classes.menuButton}
            color='inherit'
            onClick={this.toggleMenu(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='title'>Selner Talks</Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
