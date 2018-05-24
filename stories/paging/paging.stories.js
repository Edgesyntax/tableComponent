import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

// Stories
import Main from "../main.jsx";

// Readme
import LimitingInitialLimitReadme from "./limiting-initial-limit.md";

storiesOf("Paging", module)
  .add("Initial Page Size", withReadme(LimitingInitialLimitReadme, () => <Main defaultPageSize={50} />));