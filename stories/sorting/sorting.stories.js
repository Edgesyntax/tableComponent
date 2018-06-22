import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

// Stories
import Main from "../main.jsx";

// Readme
import SortingSortableReadme from "./sorting-sortable.md";
import SortingDefaultSortReadme from "./sorting-default-sort.md";
import SortingCustomSortMethodReadme from "./sorting-custom-sort-method.md";

storiesOf("Sorting", module)
  .add("Sortable", withReadme(SortingSortableReadme, () => <Main sortable={["name", "balance"]} />))
  .add("Default Sort", withReadme(SortingDefaultSortReadme, () => <Main defaultSort={{ name: "DES" }} />))
  .add("Custom Sort Method", withReadme(SortingCustomSortMethodReadme, () => <Main
    columns={[
      { id: "_id" },
      { id: "balance" },
      { id: "age", sortMethod: (a, b) => console.log(a, b) },
      { id: "name" },
      { id: "email" },
      { id: "isActive" }
    ]} />));

