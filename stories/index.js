import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
// Stories
import Default from "./default.jsx";
import CustomColumns from "./custom-columns.jsx";

storiesOf('Welcome', module)
  .add("Default", () => <Default />)
  // .add("Custom Columns", () => <CustomColumns />);
