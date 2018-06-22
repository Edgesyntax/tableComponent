import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

// Stories
import Main from "../main.jsx";

// Readme
import PagingDefaulPageSizeReadme from "./paging-default-page-size.md";
import PagingDefaulPageReadme from "./paging-default-page.md";
import PagingCountReadme from "./paging-count.md";

storiesOf("Paging", module)
  .add("Default Page Size", withReadme(PagingDefaulPageSizeReadme, () => <Main defaultPageSize={50} />))
  .add("Default Page", withReadme(PagingDefaulPageReadme, () => <Main pageSize={25} defaultPage={4} />))
  .add("Count", withReadme(PagingCountReadme, () => <Main pageSize={25} count={400} />));