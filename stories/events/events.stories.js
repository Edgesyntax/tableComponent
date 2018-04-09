import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

// Stories
import Main from "../main.jsx";

// Readme
import EventSortReadme from "./event-sort.md";
import EventFilterReadme from "./event-filter.md";
import EventLimitReadme from "./event-limit.md";
import EventPageReadme from "./event-page.md";
import EventStateChangeReadme from "./event-state-change.md";

storiesOf("Events", module)
  .add("Sort", withReadme(EventSortReadme, () => <Main pageSize={25} onSortChange={(response) => console.log(response)} />))
  .add("Filter", withReadme(EventFilterReadme, () => <Main pageSize={25} filterable onFilterChange={(response) => console.log(response)} />))
  .add("Page size", withReadme(EventLimitReadme, () => <Main pageSize={25} onPageSizeChange={(response) => console.log(response)} />))
  .add("Page", withReadme(EventPageReadme, () => <Main pageSize={25} onPageChange={(response) => console.log(response)} />))
  .add("State Change", withReadme(EventStateChangeReadme, () => <Main pageSize={25} filterable onStateChange={(response) => console.log(response)} />));