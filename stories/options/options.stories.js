import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

// Stories
import Main from "../main.jsx";

// Readme
import ShowIndexReadme from "./option-showIndex.md";
import SelectableReadme from "./option-selectable.md";
import ActiveRowReadme from "./option-activeRow.md";
import HeightReadme from "./option-height.md";
import DynamicFooterReadme from "./option-dynamic-footer.md";
import ManualReadme from "./option-manual.md";
import LoadingReadme from "./option-loading.md";
import NoDataTextReadme from "./option-noDataText.md";

storiesOf("Other Props", module)
  .add("Active Row", withReadme(ActiveRowReadme, () => <Main showIndex activeRow={{ id: "_id", value: "5844822b3e9c1401b8db0871" }} />))
  .add("Dynamic Footer", withReadme(DynamicFooterReadme, () => <Main data={[
    {
      "_id": "5844822be1ea02fe2b261ab1",
      "balance": "$3,422.52",
      "age": 100,
      "name": "Brittany Torres",
      "email": "brittanytorres@zenolux.com",
      "isActive": false
    }, {
      "_id": "5844822b3e9c1401b8db0871",
      "balance": "$2,122.79",
      "age": 34,
      "name": "Dorothy Phillips",
      "email": "dorothyphillips@quilm.com",
      "isActive": false
    }, {
      "_id": "5844822b26f2fd9d3a0e02db",
      "balance": "$3,519.32",
      "age": 65,
      "name": "Stacie Vasquez",
      "email": "stacievasquez@frosnex.com",
      "isActive": true
    }
  ]} dynamicFooter />))
  .add("Height", withReadme(HeightReadme, () => <Main height={400} />))
  .add("Loading", withReadme(LoadingReadme, () => <Main loading={true} loadingText="Loading Users..." pageSize={25} />))
  .add("Manual", withReadme(ManualReadme, () => <Main pageSize={25} manual />))
  .add("No matching records", withReadme(NoDataTextReadme, () => <Main
  data={[]}
  columns={[
    { id: "balance" },
    { id: "email" },
    { id: "age" }
  ]}
  noDataText="Error finding matching records." />))
  .add("Selectable", withReadme(SelectableReadme, () => <Main showIndex selectable onSelectAllRows={(rows) => console.log(rows)} onRowSelection={(row) => console.log(row)}/> ))
  .add("Show index", withReadme(ShowIndexReadme, () => <Main showIndex />))
