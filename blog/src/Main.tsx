import * as React from "react";
import { List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import { Omit } from "@material-ui/types";

function Main() {
  return (
    <div>
      <header className="App-header">
        <List component="nav" aria-label="examples">
          <ListItemLink to="/CascadingDropdown" primary="Cascading Dropdown" />
          <ListItemLink to="/GroupedActions" primary="Grouped Actions" />
        </List>
      </header>
    </div>
  );
}

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
}

function ListItemLink(props: ListItemLinkProps) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef<any, Omit<RouterLinkProps, "to">>((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

export { Main };
