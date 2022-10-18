import { Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar, Toolbar, Box, IconButton, Stack,
  Typography, List, ListItemIcon, ListItemText, ListItemButton, Collapse
} from "@mui/material";
import { useCallback, useState } from "react";

export default function NavBar() {

  const [open, setOpen] = useState(false);

  const handleClick = useCallback(async () => {
    setOpen(!open);
  }, [setOpen, open])

  return (
    <>
      <AppBar id="navbar">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <List component={Stack} direction="row" spacing={1}>
              <ListItemButton>
                <ListItemText>
                  Home
                </ListItemText>
              </ListItemButton>
              <ListItemButton>
                <ListItemText>
                  Projecten
                </ListItemText>
              </ListItemButton>
              <ListItemButton>
                <ListItemText>
                  CV
                </ListItemText>
              </ListItemButton>
            </List>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <List>
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
        <List id="mobileNav-list" component="div" disablePadding sx={{ borderTop: '1px solid black', backgroundColor: '#A30000', display: { xs: 'flex', md: 'none' } }}>
          <ListItemButton sx={{ pl: 4 }} >
            <ListItemText id="mobileNav-text">Home</ListItemText>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} >
            <ListItemText id="mobileNav-text">Projecten</ListItemText>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} >
            <ListItemText id="mobileNav-text">CV</ListItemText>
          </ListItemButton>
        </List>
      </Collapse>
    </>
  )
}