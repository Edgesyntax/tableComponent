import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import withReadme from 'storybook-readme/with-readme';

// Stories
import Default from "./default.jsx";
import Button from "./Button.js";

// Readme
import DefaultReadme from "./readme/default.md";

storiesOf('Welcome', module)
  .addDecorator(withReadme(DefaultReadme))
  .add("Default", () => <Default />);


storiesOf("Columns", module)
  .add("Rendered Columns", () => <Default columns={[{id: "balance"},{id: "email"},{id: "age"}]}/>)
  .add("Custom Lables", () => <Default
    columns={[
      {id: "balance", label: "Remaining Balance"},
      {id: "email", label: "Company email"},
      {id: "age", label: "Current Age"}
    ]}/>)

storiesOf("Filtering", module)
  .add("Filterable", () => <Default filterable={[]} />) // TODO: Add filterable
  .add("Initial Filter", () => <Default filter="Brittany" />)
  .add("Hide Filter", () => <Default hideFilter={true} />)

storiesOf("Sorting", module)
  .add("Sortable", () => <Default sortable={["name","balance"]}/>)
  .add("Initial Sort", () => <Default sort={{column: 1, direction: "DES"}}/>)

storiesOf("Limiting", module)
  .add("Initial Limit", () => <Default limit={25}/>)
  // .add("Hide Limit", () => <Default hideFilter={true} />) TODO: Add hide limit
storiesOf("Custom Table", module)
  .add("Render Table", () => <Default/>)
storiesOf("All Options", module)
  .add("Show index", () => <Default showIndex={true}/>)
  .add("Active Row", () => <Default showIndex={true} activeRow={{id: "_id", value: "5844822b3e9c1401b8db0871"}}/>)
// storiesOf("Pagination", module)
// storiesOf("Events", module)


// .add("Custom Columns", () => <CustomColumns />);
// noDataText="No matching records found." TODO: Empty datasets
