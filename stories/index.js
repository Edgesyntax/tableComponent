// TODO: Update all options story
// TODO: Add events story
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

// Stories
import Main from "./main.jsx";
import Styling from "./styling.jsx";
import Custom from "./custom.jsx";

// Readme
import MainReadme from "./readme/main.md";
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
import ShowIndexReadme from "./readme/showIndex.md";
import ActiveRowReadme from "./readme/activeRow.md";
import NoDataTextReadme from "./readme/noDataText.md";

// Data
import tableJSON from "./tableJSON.mock.json";

storiesOf('Welcome', module)
  .add("Default", withReadme(MainReadme, () => <Main />))
  .add("Custom", withReadme(CustomReadme, () => <Custom />))
  .add("Json", withReadme(JSONReadme, () => <Main data={tableJSON} />))
  .add("Styling", withReadme(StylingReadme, () => <Styling />));
storiesOf("Columns", module)
  .add("Rendered Columns", withReadme(ColumnsRenderedReadme, () => <Main columns={[
    {id: "balance"},
    {id: "email"},
    {id: "age"}
  ]}/>))
  .add("Custom Lables", withReadme(ColumnsCustomLabelsReadme, () => <Main
    columns={[
      {id: "balance", label: "Remaining Balance"},
      {id: "email", label: "Company email"},
      {id: "age", label: "Current Age"}
    ]}/>));

storiesOf("Filtering", module)
  .add("Filter all columns", withReadme(FilterAllColumnsReadme, () => <Main filterable={true} />))
  .add("Initial Filter", withReadme(FilterInitialFilterReadme, () => <Main filter="brittany" />));

storiesOf("Sorting", module)
  .add("Sortable", withReadme(SortingSortableReadme, () => <Main sortable={["name","balance"]}/>))
  .add("Initial Sort", withReadme(SortingInitialSortReadme, () => <Main sort={{column: 1, direction: "DES"}}/>));

storiesOf("Limiting", module)
  .add("Initial Limit", withReadme(LimitingInitialLimitReadme, () => <Main limit={25}/>));

storiesOf("All Options", module)
  .add("Show index", withReadme(ShowIndexReadme, () => <Main showIndex/>))
  .add("Active Row", withReadme(ActiveRowReadme, () => <Main showIndex activeRow={{id: "_id", value: "5844822b3e9c1401b8db0871"}}/>))
  .add("No matching records", withReadme(NoDataTextReadme, () => <Main
    data={[]}
    columns={[
      {id: "balance"},
      {id: "email"},
      {id: "age"}
    ]}
    noDataText="Error finding matching records." />));

// storiesOf("Events", module)
