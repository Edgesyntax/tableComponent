import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

// Stories
import Main from "./main.jsx";
import Styling from "./styling.jsx";
import ServerSideData from "./server-side-data.jsx";

// Readme
import MainReadme from "./readme/main.md";
import JSONReadme from "./readme/json.md";
import StylingReadme from "./readme/styling.md";
import ServerRenderReadme from "./readme/server-render.md";
import ColumnsRenderedReadme from "./readme/columns-rendered.md";
import ColumnsCustomLabelsReadme from "./readme/columns-custom-labels.md";
import ColumnsAccessorReadme from "./readme/columns-accessor.md";
import ColumnsCustomReadme from "./readme/columns-custom.md";
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
import TotalReadme from "./readme/option-total.md";
import PageReadme from "./readme/option-page.md";
import DevReadme from "./readme/option-dev.md";
import LoadingReadme from "./readme/option-loading.md";
import NoDataTextReadme from "./readme/option-noDataText.md";

// Events
import EventSortReadme from "./readme/event-sort.md";
import EventFilterReadme from "./readme/event-filter.md";
import EventLimitReadme from "./readme/event-limit.md";
import EventPageReadme from "./readme/event-page.md";
import EventStateChangeReadme from "./readme/event-state-change.md";



// Data
import tableJSON from "./tableJSON.mock.json";

storiesOf('Welcome', module)
  .add("Default", withReadme(MainReadme, () => <Main />))
  .add("Json", withReadme(JSONReadme, () => <Main data={tableJSON} />))
  .add("Styling", withReadme(StylingReadme, () => <Styling />))
  // .add("Server Side Data", withReadme(ServerRenderReadme, () => <ServerSideData />));
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
    ]}/>))
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
      { id: "accounts", label: "Remaining Balance", accessor: (obj) => obj[0] },
      { id: "user", accessor: (obj) => obj.name },
      { id: "isActive", label: "Active" }
    ]} />))
  .add("Custom Column Cell", withReadme(ColumnsCustomReadme, () => <Main columns={[
    { id: "_id" },
    { id: "balance" },
    {
      id: "age", render: (value, row) => {
        console.log(value, row)
        return <span style={{ color: "red" }}>{value}</span>
      }
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

storiesOf("Filtering", module)
  .add("Filter all columns", withReadme(FilterAllColumnsReadme, () => <Main filterable />))
  .add("Filter specific columns", withReadme(FilterSpecificColumnsReadme, () => <Main filterable={["age"]} />))
  .add("Initial Filter", withReadme(FilterInitialFilterReadme, () => <Main filterable filter={{name: "brittany", age: 100}} />))
  .add("Custom Filter Component", withReadme(FilterCustomComponentReadme, () => <Main 
    onStateChange={(response) => console.log(response)}
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
      { id: "isActive", filterMethod:(value, filter) => {
        console.log(value, filter)
        return String(value) === filter
      }}
    ]}
    filterable />));

storiesOf("Sorting", module)
  .add("Sortable", withReadme(SortingSortableReadme, () => <Main sortable={["name","balance"]}/>))
  .add("Initial Sort", withReadme(SortingInitialSortReadme, () => <Main sort={{name: "DES"}}/>))
  .add("Custom Sort Method", withReadme(SortingCustomSortMethodReadme, () => <Main
    columns={[
      { id: "_id" },
      { id: "balance" },
      { id: "age", sortMethod: (a, b) => console.log(a, b)},
      { id: "name" },
      { id: "email" },
      { id: "isActive"}
    ]} />));

storiesOf("Paging", module)
  .add("Initial Page Size", withReadme(LimitingInitialLimitReadme, () => <Main pageSize={25} />));

storiesOf("Events", module)
  .add("Sort", withReadme(EventSortReadme, () => <Main pageSize={25} onSortChange={(response) => console.log(response)} />))
  .add("Filter", withReadme(EventFilterReadme, () => <Main pageSize={25} filterable onFilterChange={(response) => console.log(response)} />))
  .add("Page size", withReadme(EventLimitReadme, () => <Main pageSize={25} onPageSizeChange={(response) => console.log(response)} />))
  .add("Page", withReadme(EventPageReadme, () => <Main pageSize={25} onPageChange={(response) => console.log(response)} />))
  .add("State Change", withReadme(EventStateChangeReadme, () => <Main pageSize={25} filterable onStateChange={(response) => console.log(response)} />));
storiesOf("Other Props", module)
  .add("Show index", withReadme(ShowIndexReadme, () => <Main showIndex/>))
  .add("Active Row", withReadme(ActiveRowReadme, () => <Main showIndex activeRow={{id: "_id", value: "5844822b3e9c1401b8db0871"}}/>))
  .add("Manual", withReadme(ManualReadme, () => <Main pageSize={25} manual />))
  .add("Total", withReadme(TotalReadme, () => <Main pageSize={25} total={400} />))
  .add("Page", withReadme(PageReadme, () => <Main pageSize={25} page={4} />))
  .add("Dev", withReadme(DevReadme, () => <Main dev filterable pageSize={50}/>))
  .add("Loading", withReadme(LoadingReadme, () => <Main loading={true} loadingText="Loading Users..." pageSize={25}/>))
  .add("No matching records", withReadme(NoDataTextReadme, () => <Main
    data={[]}
    columns={[
      {id: "balance"},
      {id: "email"},
      {id: "age"}
    ]}
    noDataText="Error finding matching records." />));
