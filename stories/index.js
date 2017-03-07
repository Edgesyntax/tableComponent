import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Default from "./default.jsx";
import CustomColumns from "./custom-columns.jsx";
// import Button from './Button';
// import Welcome from './Welcome';

storiesOf('Welcome', module)
  .add("Default", () => <Default />)
  .add("Custom Columns", () => <CustomColumns />);
  // .add('to Storybook', () => <Welcome showApp={linkTo('Button')}/>);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
