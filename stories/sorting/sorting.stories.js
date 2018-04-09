import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

// Stories
import Main from "../main.jsx";

// Readme
import SortingSortableReadme from "./sorting-sortable.md";
import SortingInitialSortReadme from "./sorting-initial-sort.md";
import SortingCustomSortMethodReadme from "./sorting-custom-sort-method.md";

storiesOf("Sorting", module)
  .add("Sortable", withReadme(SortingSortableReadme, () => <Main sortable={["name", "balance"]} />))
  .add("Initial Sort", withReadme(SortingInitialSortReadme, () => <Main sort={{ name: "DES" }} />))
  .add("Custom Sort Method", withReadme(SortingCustomSortMethodReadme, () => <Main
    columns={[
      { id: "_id" },
      { id: "balance" },
      { id: "age", sortMethod: (a, b) => console.log(a, b) },
      { id: "name" },
      { id: "email" },
      { id: "isActive" }
    ]} />));

