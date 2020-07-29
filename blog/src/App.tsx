import * as React from "react";
import { Main } from "./Main";
import { CascadingDropdown } from "./CascadingDropdown";
import { GroupedActions } from "./GroupedActions";
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
import GitHubIcon from "@material-ui/icons/GitHub";
import { Link as RouterLink } from "react-router-dom";

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
              <RouterLink to="/">
                <HomeIcon color="action" />
              </RouterLink>
            )}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Material-Table Blog Code
          </Typography>
          <IconButton
            edge="end"
            aria-label="github"
            className={classes.menuButton}
          >
            <a href="https://github.com/Domino987/material-table-blog">
              <GitHubIcon color="action" />
            </a>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/CascadingDropdown" element={<CascadingDropdown />} />
        <Route path="/GroupedActions" element={<GroupedActions />} />
        <Route path="/*" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
