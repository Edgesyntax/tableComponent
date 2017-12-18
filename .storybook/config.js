import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'tableComponent',
  url: 'https://github.com/Edgesyntax/tableComponent',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
  sortStoriesByKind: false,
});

function loadStories () {
  require('../stories/index.js');
}
// function loadStories() {
//   require('../stories/index.js');
//   // You can require as many stories as you need.
// }

configure(loadStories, module);
