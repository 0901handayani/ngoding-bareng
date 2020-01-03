import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Box from '@material-ui/core/Box';

 
  
function Navbar (){

    return (
        <Box display ="flex" justifyContent="center">
        <React.Fragment>
        <BottomNavigation position="static" style={{backgroundColor:'red', marginTop:540, width:'440px', position:"fixed"}}>
        <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
        </React.Fragment>
        </Box>
    )
}
export default Navbar ;