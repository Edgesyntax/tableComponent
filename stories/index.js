import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import withReadme from 'storybook-readme/with-readme';

// Stories
import Default from "./default.jsx";
import Custom from "./custom.jsx";
import Button from "./Button.js";

// Readme
import DefaultReadme from "./readme/default.md";
import ColumnsRenderedReadme from "./readme/columns-rendered.md";
import ColumnsCustomLabelsReadme from "./readme/columns-custom-labels.md";
import FilterAllColumnsReadme from "./readme/filter-all-columns.md";
import FilterInitialFilterReadme from "./readme/filter-initial-filter.md";
import SortingSortableReadme from "./readme/sorting-sortable.md";
import SortingInitialSortReadme from "./readme/sorting-initial-sort.md";
import LimitingInitialLimitReadme from "./readme/limiting-initial-limit.md";

storiesOf('Welcome', module)
  .addDecorator(withReadme(DefaultReadme))
  .add("Default", () => <Default />);

storiesOf("Columns", module)
  .add("Rendered Columns", withReadme(ColumnsRenderedReadme, () => <Default columns={[
    {id: "balance"},
    {id: "email"},
    {id: "age"}
  ]}/>))
  .add("Custom Lables", withReadme(ColumnsCustomLabelsReadme, () => <Default
    columns={[
      {id: "balance", label: "Remaining Balance"},
      {id: "email", label: "Company email"},
      {id: "age", label: "Current Age"}
    ]}/>));

storiesOf("Filtering", module)
  // .add("Filter specific columns", () => <Default filterable={[]} />) // TODO: Add filterable
  .add("Filter all columns", withReadme(FilterAllColumnsReadme, () => <Default filterable={true} />))
  .add("Initial Filter", withReadme(FilterInitialFilterReadme, () => <Default filter="brittany" />));

storiesOf("Sorting", module)
  .add("Sortable", withReadme(SortingSortableReadme, () => <Default sortable={["name","balance"]}/>))
  .add("Initial Sort", withReadme(SortingInitialSortReadme, () => <Default sort={{column: 1, direction: "DES"}}/>));

storiesOf("Limiting", module)
  .add("Initial Limit", withReadme(LimitingInitialLimitReadme, () => <Default limit={25}/>));

storiesOf("Custom Table", module)
  .add("JSX Data", () => <Custom dataType="jsx" />)
  .add("Json Data", () => <Custom dataType="json" />);

storiesOf("All Options", module)
  .add("Show index", () => <Default showIndex/>)
  .add("Active Row", () => <Default showIndex activeRow={{id: "_id", value: "5844822b3e9c1401b8db0871"}}/>)
  .add("No matching records", () => <Default
    data={[]}
    showIndex
    columns={[
      {id: "balance"},
      {id: "email"},
      {id: "age"}
    ]}
    noDataText="Error finding matching records." />);

// storiesOf("Pagination", module)

// storiesOf("Events", module)
