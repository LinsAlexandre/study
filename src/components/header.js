import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {colors} from "@mui/material";
//import MenuIcon from '@mui/icons-material/Menu';
import { createTheme } from '@mui/material/styles';

function Header() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#ff9800',
        caption: '#000',
      }
    },
  });
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ color: theme.palette.primary.caption, backgroundColor: theme.palette.primary.main }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/*  
              <MenuIcon />
              */}
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Gerenciamento de Projetos
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
}
 
export default Header;