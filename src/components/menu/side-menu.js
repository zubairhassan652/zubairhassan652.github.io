import React from "react";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import SchoolIcon from '@material-ui/icons/School';
import WebIcon from '@material-ui/icons/Web';
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';

import ProfilePic from '../../static/images/avatar.jpg';
import { Link } from 'react-router-dom';

const getIcons = function(iconType){
    let icon;
    switch (iconType) {
        case 'About':
            icon = <PersonIcon />
            break;
        case 'Experience':
            icon = <WorkIcon />  
            break;  
        case 'Education':
            icon = <SchoolIcon />  
            break;
        case 'Projects':
            icon = <WebIcon />  
            break;        
        case 'Skills':
            icon = <CastForEducationIcon />
            break;
        case 'Contact':
            icon = <PermPhoneMsgIcon />
            break;
        default:
          break;        
    }
    return icon;
}

const useStyles = makeStyles({
  list: {
    overflowY: 'scroll',
    backgroundColor: '#cfe8fc',
    height: '100vh',
    position: "fixed",
    width: 200,
  },
  profile: {
    justifyContent: "center",
  },
});



export default function MenuListOfSideDrawer(props){

    const classes = useStyles();
    return(
    <div
      className={clsx(classes.list)}
      role="presentation"
    //   onClick={selectCompnent()}
    //   onKeyDown={toggleDrawer()}
    >
      <List>
        <ListItem className={classes.profile}>
            <Avatar alt="Zubair Hassan" src={ProfilePic} />
        </ListItem>
      </List>
  
      <Divider />
  
      <List>
        {['About', 'Experience', 'Skills', 'Projects', 'Education', 'Contact'].map((text, index) => (
          <ListItem button key={text} component={Link} to={text.toLowerCase()} onClick={props.toggleDrawer} >
            <ListItemIcon>{getIcons(text)}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
    );
  }