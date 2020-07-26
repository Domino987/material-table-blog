import * as React from "react";
import MaterialTable, { Column } from "material-table";
import { Select, MenuItem } from "@material-ui/core";

interface Data {
  id: string;
  country: string;
  city: string;
}

const Countries = ["Germany", "USA"];

const Cities: Record<string, string[]> = {
  Germany: ["Aachen", "Köln", "Berlin"],
  USA: ["New York", "Washington", "Manhatten"],
};

function getCities(country: string) {
  return Cities[country] ?? [];
}

const columns: Column<Data>[] = [
  {
    title: "Country",
    field: "country",
    editComponent: ({ value, onRowDataChange, rowData }) => (
      <Select
        value={value}
        onChange={(event) => {
          onRowDataChange({
            ...rowData,
            country: (event.target.value as string) ?? "",
            city: "",
          });
        }}
      >
        {Countries.map((country) => (
          <MenuItem key={country} value={country}>
            {country}
          </MenuItem>
        ))}
      </Select>
    ),
  },
  {
    title: "City",
    field: "city",
    editComponent: ({ value, onChange, rowData }) => (
      <Select
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
        }}
      >
        {getCities(rowData.country).map((country) => (
          <MenuItem key={country} value={country}>
            {country}
          </MenuItem>
        ))}
      </Select>
    ),
  },
];

const data: Data[] = [
  {
    id: "0",
    country: "Germany",
    city: "Aachen",
  },
  {
    id: "1",
    country: "USA",
    city: "New York",
  },
];

function CascadingDropdown() {
  const [rowData, setData] = React.useState(data);
  return (
    <MaterialTable
      columns={columns}
      data={rowData}
      title="Cascading Dropdown"
      editable={{
        onRowAdd: async (newData) => {
          newData.id = String(Math.random() * 1000);
          setData([...data, newData]);
        },
        onRowUpdate: async (newData, oldData) => {
          if (oldData) {
            setData((prevData) => {
              const dataUpdate = [...prevData];
              const index = dataUpdate.findIndex((d) => d.id === oldData.id);
              dataUpdate[index] = newData;
              return dataUpdate;
            });
          }
        },
        onRowDelete: async (oldData) => {
          if (oldData) {
            setData((prevData) => {
              const dataDelete = [...prevData];
              const index = dataDelete.findIndex((d) => d.id === oldData.id);
              dataDelete.splice(index, 1);
              return dataDelete;
            });
          }
        },
      }}
    />
  );
}

export { CascadingDropdown };
