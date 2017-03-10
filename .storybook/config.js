import {configure, setAddon} from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';

setOptions({
  name: 'tableComponent',
  url: 'https://github.com/kadirahq/storybook-addon-options', // TODO: use github url
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
  sortStoriesByKind: false,
});

const loadStories = () => require('../stories');

configure(loadStories, module);
