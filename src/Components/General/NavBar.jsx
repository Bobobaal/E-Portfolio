import { Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar, Toolbar, Box, IconButton, Stack,
  Typography, List, ListItemIcon, ListItemText, ListItemButton, Collapse, Container
} from "@mui/material";
import { useCallback, useState } from "react";

export default function NavBar() {

  const [open, setOpen] = useState(false);

  const handleClick = useCallback(async () => {
    setOpen(!open);
  }, [setOpen, open]);

  return (
    <>
      <AppBar id="navbar">
        <Toolbar component={Container}>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <List component={Stack} direction="row" spacing={1}>
              <ListItemButton className="navBar-listItem" component="a" href="./home">
                <ListItemText>
                  Home
                </ListItemText>
              </ListItemButton>
              <ListItemButton className="navBar-listItem" component="a" href="./projecten">
                <ListItemText>
                  Projecten
                </ListItemText>
              </ListItemButton>
              <ListItemButton className="navBar-listItem">
                <ListItemText>
                  CV
                </ListItemText>
              </ListItemButton>
            </List>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <List className="mobileNav-Button">
              <ListItemButton onClick={handleClick} disableRipple={true}>
                <ListItemIcon>
                  <IconButton
                    size="large"
                    disableRipple={true}
                  >
                    <MenuIcon id="navbar-menuIcoon" />
                  </IconButton>
                </ListItemIcon>
              </ListItemButton>
            </List>
          </Box>
          <Typography
            component="a"
            href="/home"
            id="navbar-naam"
            color='inherit'
            sx={{
              display: { xs: 'flex' },
            }}
          >
            Dieter Van Meerbeeck
          </Typography>
        </Toolbar>
      </AppBar>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component={Stack} direction="column" disablePadding sx={{ display: { xs: 'flex', md: 'none' } }}>
          <ListItemButton className="mobileNav-listItem" component="a" href="./home">
            <ListItemText>Home</ListItemText>
          </ListItemButton>
          <ListItemButton className="mobileNav-listItem" component="a" href="./projecten">
            <ListItemText>Projecten</ListItemText>
          </ListItemButton>
          <ListItemButton className="mobileNav-listItem">
            <ListItemText>CV</ListItemText>
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
}