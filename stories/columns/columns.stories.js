import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

// Stories
import Main from "../main.jsx";

// Readme
import ColumnsRenderedReadme from "./columns-rendered.md";
import ColumnsCustomLabelsReadme from "./columns-custom-labels.md";
import ColumnsAccessorReadme from "./columns-accessor.md";
import ColumnsWidthReadme from "./columns-width.md";
import ColumnsCustomReadme from "./columns-custom.md";

storiesOf("Columns", module)
  .add("Rendered Columns", withReadme(ColumnsRenderedReadme, () => <Main columns={[
    { id: "balance" },
    { id: "email" },
    { id: "age" }
  ]} />))
  .add("Custom Lables", withReadme(ColumnsCustomLabelsReadme, () => <Main
    columns={[
      { id: "balance", label: "Remaining Balance" },
      { id: "email", label: "Company email" },
      { id: "age", label: "Current Age" }
    ]} />))
  .add("Accessor", withReadme(ColumnsAccessorReadme, () => <Main
    data={[
      {
        "_id": "5844822be1ea02fe2b261ab1",
        "accounts": [
          {
            "balance": "$3,422.52"
          }
        ],
        "user": {
          "age": 100,
          "name": "Brittany Torres",
          "email": "brittanytorres@zenolux.com"
        },
        "isActive": false
      },
      {
        "_id": "5844822b3e9c1401b8db0871",
        "accounts": [
          {
            "balance": "$2,122.79"
          },
          {
            "balance": "$1,162.92"
          }
        ],
        "user": {
          "age": 34,
          "name": "Dorothy Phillips",
          "email": "dorothyphillips@quilm.com"
        },
        "isActive": false
      },
      {
        "_id": "5844822b26f2fd9d3a0e02db",
        "accounts": [
          {
            "balance": "$3,519.32"
          }
        ],
        "user": {
          "age": 32,
          "name": "Stacie Vasquez",
          "email": "stacievasquez@frosnex.com"
        },
        "isActive": true
      }
    ]}
    filterable
    columns={[
      { id: "balance", label: "Remaining Balance", accessor: (row) => row.accounts[0].balance },
      { id: "user", accessor: (row) => row.user.name },
      { id: "isActive", label: "Active" }
    ]} />))
  .add("Custom Width", withReadme(ColumnsWidthReadme, () => < Main
    columns={[
      { id: "balance", label: "Remaining Balance", minWidth: 100 },
      { id: "email", label: "Company email", width: 300 },
      { id: "age", label: "Current Age", minWidth: 100, width: 40, maxWidth: 100 }
    ]} />))
  .add("Custom Column Cell", withReadme(ColumnsCustomReadme, () => <Main columns={[
    { id: "_id" },
    { id: "balance" },
    {
      id: "age", render: (value, row) => <span style={{ color: "red" }}>{value}</span>
    },
    { id: "name" },
    { id: "email" },
    { id: "isActive", label: "status", render: (value, row) => <span>{value === true ? "Active" : value === false ? "Inactive" : ""}</span> },
    {
      id: "action", render: (value, row) => {
        return (
          <center>
            <button> edit </button>
            <button> delete </button>
          </center>
        )
      }
    }
  ]} />))
