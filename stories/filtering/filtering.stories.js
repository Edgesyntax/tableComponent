import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

// Stories
import Main from "../main.jsx";

// Readme
import FilterAllColumnsReadme from "./filter-all-columns.md";
import FilterSpecificColumnsReadme from "./filter-specific-columns.md";
import FilterInitialFilterReadme from "./filter-initial-filter.md";
import FilterCustomComponentReadme from "./filter-custom-component.md";
import FilterCustomFilterMethodReadme from "./filter-custom-filter-method.md";

storiesOf("Filtering", module)
  .add("Filter all columns", withReadme(FilterAllColumnsReadme, () => <Main filterable />))
  .add("Filter specific columns", withReadme(FilterSpecificColumnsReadme, () => <Main filterable={["age"]} />))
  .add("Initial Filter", withReadme(FilterInitialFilterReadme, () => <Main filterable filter={{ name: "brittany", age: 100 }} />))
  .add("Custom Filter Component", withReadme(FilterCustomComponentReadme, () => <Main
    onStateChange={(response) => console.log(response)}
    columns={[
      { id: "_id" },
      { id: "balance" },
      { id: "age" },
      { id: "name" },
      { id: "email" },
      {
        id: "isActive", label: "user status", filter: ({ columnName, onChange, filter }) => (
          <select
            name={columnName}
            onChange={(event) => onChange(event)}
            value={filter}>
            <option value="">Show All</option>
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
        )
      }
    ]}
    filterable />))
  .add("Custom Filter Method", withReadme(FilterCustomFilterMethodReadme, () => <Main
    columns={[
      { id: "_id" },
      { id: "balance" },
      { id: "age" },
      { id: "name" },
      { id: "email" },
      {
        id: "isActive", filterMethod: (value, filter) => {
          console.log(value, filter)
          return String(value) === filter
        }
      }
    ]}
    filterable />));