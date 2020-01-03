import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function Appb(){
    return(
        <Box display ="flex" justifyContent="center">
        <React.Fragment>
      <AppBar position="static" style={{backgroundColor:'red', maxWidth: 443, position:"fixed"}}>
      <Toolbar>
      <Typography variant="h6">
          AppBar
      </Typography>
      </Toolbar>
      </AppBar>
        </React.Fragment>
        </Box>
    );
}
export default Appb;