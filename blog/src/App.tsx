import * as React from "react";
import { Main } from "./Main";
import { CascadingDropdown } from "./CascadingDropdown";
import { Routes, Route, useLocation } from "react-router";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

function App() {
  const { pathname } = useLocation();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            aria-label="home"
            className={classes.menuButton}
          >
            {pathname !== "/" && (
              <Link to="/">
                <HomeIcon color="action" />
              </Link>
            )}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Material-Table Blog Code
          </Typography>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/CascadingDropdown" element={<CascadingDropdown />} />
        <Route path="/*" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
