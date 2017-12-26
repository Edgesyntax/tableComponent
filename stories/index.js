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
import FilterSpecificColumnsReadme from "./readme/filter-specific-columns.md";
import FilterInitialFilterReadme from "./readme/filter-initial-filter.md";
import FilterCustomComponentReadme from "./readme/filter-custom-component.md";
import FilterCustomFilterMethodReadme from "./readme/filter-custom-filter-method.md";
import SortingSortableReadme from "./readme/sorting-sortable.md";
import SortingInitialSortReadme from "./readme/sorting-initial-sort.md";
import SortingCustomSortMethodReadme from "./readme/sorting-custom-sort-method.md";
import LimitingInitialLimitReadme from "./readme/limiting-initial-limit.md";

// Other Option
import ShowIndexReadme from "./readme/option-showIndex.md";
import ActiveRowReadme from "./readme/option-activeRow.md";
import ManualReadme from "./readme/option-manual.md";
import PagesReadme from "./readme/option-pages.md";
import PageReadme from "./readme/option-page.md";
import DevReadme from "./readme/option-dev.md";
import NoDataTextReadme from "./readme/option-noDataText.md";

// Events
import EventSortReadme from "./readme/event-sort.md";
import EventFilterReadme from "./readme/event-filter.md";
import EventLimitReadme from "./readme/event-limit.md";
import EventPageReadme from "./readme/event-page.md";


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
  .add("Filter all columns", withReadme(FilterAllColumnsReadme, () => <Main filterable />))
  .add("Filter specific columns", withReadme(FilterSpecificColumnsReadme, () => <Main filterable={["age"]} />))
  .add("Initial Filter", withReadme(FilterInitialFilterReadme, () => <Main filterable filter={{name: "brittany", age: 100}} />))
  .add("Custom Filter Component", withReadme(FilterCustomComponentReadme, () => <Main 
    columns={[
      { id: "_id"},
      { id: "balance" },
      { id: "age" },
      { id: "name" },
      { id: "email"},
      {
        id: "isActive", label: "user status", filter: ({columnName, onChange, filter}) => (
        <select
          name={columnName}
          onChange={(event) => onChange(event)}
          value={filter}>
          <option value="">Show All</option>
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>
      )}
    ]}
    filterable />))
  .add("Custom Filter Method", withReadme(FilterCustomFilterMethodReadme, () => <Main
    columns={[
      { id: "_id" },
      { id: "balance" },
      { id: "age" },
      { id: "name" },
      { id: "email" },
      { id: "isActive"}
    ]}
    filterable />));

storiesOf("Sorting", module)
  .add("Sortable", withReadme(SortingSortableReadme, () => <Main sortable={["name","balance"]}/>))
  .add("Initial Sort", withReadme(SortingInitialSortReadme, () => <Main sort={{column: "name", direction: "DES"}}/>))
  .add("Custom Sort Method", withReadme(SortingCustomSortMethodReadme, () => <Main
    columns={[
      { id: "_id" },
      { id: "balance" },
      { id: "age", sortMethod: (a, b) => console.log(a, b)},
      { id: "name" },
      { id: "email" },
      { id: "isActive"}
    ]} />));

storiesOf("Limiting", module)
  .add("Initial Limit", withReadme(LimitingInitialLimitReadme, () => <Main limit={25} />));

storiesOf("Events", module)
  .add("Sort", withReadme(EventSortReadme, () => <Main limit={25} onSortChange={(response) => console.log(response)} />))
  .add("Filter", withReadme(EventFilterReadme, () => <Main limit={25} filterable onFilterChange={(response) => console.log(response)} />))
  .add("Limit", withReadme(EventLimitReadme, () => <Main limit={25} onLimitChange={(response) => console.log(response)} />))
  .add("Page", withReadme(EventPageReadme, () => <Main limit={25} onPageChange={(response) => console.log(response)} />));

storiesOf("Other Props", module)
  .add("Show index", withReadme(ShowIndexReadme, () => <Main showIndex/>))
  .add("Active Row", withReadme(ActiveRowReadme, () => <Main showIndex activeRow={{id: "_id", value: "5844822b3e9c1401b8db0871"}}/>))
  .add("Manual", withReadme(ManualReadme, () => <Main limit={25} manual />))
  .add("Pages", withReadme(PagesReadme, () => <Main limit={25} pages={400} />))
  .add("Page", withReadme(PageReadme, () => <Main limit={25} page={4} />))
  .add("Dev", withReadme(DevReadme, () => <Main dev filterable limit={50}/>))
  .add("No matching records", withReadme(NoDataTextReadme, () => <Main
    data={[]}
    columns={[
      {id: "balance"},
      {id: "email"},
      {id: "age"}
    ]}
    noDataText="Error finding matching records." />));
