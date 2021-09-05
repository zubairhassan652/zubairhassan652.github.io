import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, Avatar, Toolbar } from '@material-ui/core';

import MenuListOfSideDrawer from './side-menu';
import ProfilePic from '../../static/images/avatar.jpg';


export default function DrawerMenu() {


  const [state, setState] = React.useState({
    drawer: false,
  });

  const toggleDrawer = () => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, 'drawer': !state.drawer });
  };

  // const selectCompnent = () => (event) => {
  //     console.log(event.target.innerText);
      
  //     console.log(state.drawer);
  // }

  return (
    <div>
        <React.Fragment>
          <AppBar position="static">
            <Toolbar>
            <IconButton onClick={toggleDrawer()} edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            {/* <Typography variant="h6" className={classes.title}>
                Zubair's Portfolio
            </Typography> */}
            <Avatar alt="Zubair Hassan" src={ProfilePic} />
          </Toolbar>
          <Drawer anchor="left" open={state.drawer} onClose={toggleDrawer()}>
            {/* {menuList()} */}
            <MenuListOfSideDrawer toggleDrawer={toggleDrawer()} />
          </Drawer>
          </AppBar>
        </React.Fragment>
    </div>
  );
}






// const getIcons = function(iconType){
  //     let icon;
  //     switch (iconType) {
  //         case 'About':
  //             icon = <PersonIcon />
  //             break;
  //         case 'Experiance':
  //             icon = <WorkIcon />  
  //             break;  
  //         case 'Education':
  //             icon = <SchoolIcon />  
  //             break;
  //         case 'Projects':
  //             icon = <WebIcon />  
  //             break;        
  //         case 'Skills':
  //             icon = <CastForEducationIcon />
  //             break;
  //         case 'Contact':
  //             icon = <PermPhoneMsgIcon />
  //             break;
  //         default:
  //           break;    
  //     }
  //     return icon;
  // }


// const menuList = () => (
//   <div
//     className={clsx(classes.list)}
//     role="presentation"
//   //   onClick={selectCompnent()}
//   //   onKeyDown={toggleDrawer()}
//   >
//     <List>
//       <ListItem key className={classes.profile}>
//           <Avatar alt="Zubair Hassan" src={ProfilePic} />
//       </ListItem>
//     </List>

//     <Divider />

//     <List>
//       {['About', 'Experiance', 'Skills', 'Projects', 'Education', 'Contact'].map((text, index) => (
//         <ListItem button key={text} component={Link} to={text.toLowerCase()} onClick={toggleDrawer()} >
//           <ListItemIcon>{getIcons(text)}</ListItemIcon>
//           <ListItemText primary={text} />
//         </ListItem>
//       ))}
//     </List>
//   </div>
// );
