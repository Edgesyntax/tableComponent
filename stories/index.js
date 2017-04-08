// TODO: Update all options story
// TODO: Add events story
import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import withReadme from 'storybook-readme/with-readme';

// Stories
import Default from "./default.jsx";
import Styling from "./styling.jsx";
import Custom from "./custom.jsx";

// Readme
import DefaultReadme from "./readme/default.md";
import CustomReadme from "./readme/custom.md";
import JSONReadme from "./readme/json.md";
import StylingReadme from "./readme/styling.md";
import ColumnsRenderedReadme from "./readme/columns-rendered.md";
import ColumnsCustomLabelsReadme from "./readme/columns-custom-labels.md";
import FilterAllColumnsReadme from "./readme/filter-all-columns.md";
import FilterInitialFilterReadme from "./readme/filter-initial-filter.md";
import SortingSortableReadme from "./readme/sorting-sortable.md";
import SortingInitialSortReadme from "./readme/sorting-initial-sort.md";
import LimitingInitialLimitReadme from "./readme/limiting-initial-limit.md";

// Data
import tableJSON from "./tableJSON.mock.yaml";

storiesOf('Welcome', module)
  .add("Default", withReadme(DefaultReadme, () => <Default />))
  .add("Custom", withReadme(CustomReadme, () => <Custom />))
  .add("Json", withReadme(JSONReadme, () => <Default data={tableJSON} />))
  .add("Styling", withReadme(StylingReadme, () => <Styling />));
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
  .add("Filter all columns", withReadme(FilterAllColumnsReadme, () => <Default filterable={true} />))
  .add("Initial Filter", withReadme(FilterInitialFilterReadme, () => <Default filter="brittany" />));

storiesOf("Sorting", module)
  .add("Sortable", withReadme(SortingSortableReadme, () => <Default sortable={["name","balance"]}/>))
  .add("Initial Sort", withReadme(SortingInitialSortReadme, () => <Default sort={{column: 1, direction: "DES"}}/>));

storiesOf("Limiting", module)
  .add("Initial Limit", withReadme(LimitingInitialLimitReadme, () => <Default limit={25}/>));

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
    
// storiesOf("Events", module)
