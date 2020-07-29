import * as React from "react";
import MaterialTable, { Column } from "material-table";
import { data, Data } from "../utils";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Menu, MenuItem } from "@material-ui/core";

const columns: Column<Data>[] = [
  {
    title: "Country",
    field: "country",
  },
  {
    title: "City",
    field: "city",
  },
];

function GroupedActions() {
  const [rows, setRows] = React.useState(data);
  const [[anchorEl, selectedRow], setAnchorEl] = React.useState<
    [null | HTMLElement, Data | Data[] | undefined]
  >([null, undefined]);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    rowData: Data | Data[]
  ) => {
    setAnchorEl([event.currentTarget, rowData]);
  };

  const handleClose = () => {
    setAnchorEl([null, undefined]);
  };

  const deleteRow = () => {
    if (selectedRow && "id" in selectedRow) {
      // Id is a choosen unique identifer
      setRows((currentRows) =>
        currentRows.filter((row) => row.id !== selectedRow.id)
      );
    }
    handleClose();
  };
  return (
    <>
      <MaterialTable
        actions={[
          {
            icon: MoreVertIcon,
            tooltip: "More",
            onClick: handleClick,
          },
        ]}
        title="Grouped Actions"
        columns={columns}
        data={rows}
      />
      <Menu
        id="more-menu"
        anchorEl={anchorEl}
        keepMounted={true}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Change Info</MenuItem>
        <MenuItem onClick={deleteRow}>Delete</MenuItem>
      </Menu>
    </>
  );
}

export { GroupedActions };
