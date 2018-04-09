import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'tableComponent',
  url: 'https://github.com/Edgesyntax/tableComponent',
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonPanel: true,
  showSearchBox: false,
  addonPanelInRight: true,
  sortStoriesByKind: false,
});

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  // req.keys().forEach(filename => req(filename));
  require("../stories/index.story.js");
}

configure(loadStories, module);
