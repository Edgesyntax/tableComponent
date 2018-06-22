import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

// Stories
import Main from "../main.jsx";
import Styling from "./styling.jsx";
import ServerSideData from "./server-side-data.jsx";

// Readme
import MainReadme from "./main.md";
import JSONReadme from "./json.md";
import StylingReadme from "./styling.md";
import ServerRenderReadme from "./server-render.md";

// Data
import tableJSON from "./tableJSON.mock.json";

storiesOf('Welcome', module)
  .add("Default", withReadme(MainReadme, () => <Main />))
  .add("Json", withReadme(JSONReadme, () => <Main data={tableJSON} />))
  .add("Styling", withReadme(StylingReadme, () => <Styling />))
  .add("Server Side Data", withReadme(ServerRenderReadme, () => <ServerSideData />));



