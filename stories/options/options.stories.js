import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

// Stories
import Main from "../main.jsx";

// Readme
import ShowIndexReadme from "./option-showIndex.md";
import SelectableReadme from "./option-selectable.md";
import ActiveRowReadme from "./option-activeRow.md";
import HeightReadme from "./option-height.md";
import ManualReadme from "./option-manual.md";
import TotalReadme from "./option-total.md";
import PageReadme from "./option-page.md";
import DevReadme from "./option-dev.md";
import LoadingReadme from "./option-loading.md";
import NoDataTextReadme from "./option-noDataText.md";

storiesOf("Other Props", module)
  .add("Active Row", withReadme(ActiveRowReadme, () => <Main showIndex activeRow={{ id: "_id", value: "5844822b3e9c1401b8db0871" }} />))
  .add("Dev", withReadme(DevReadme, () => <Main dev filterable pageSize={50} />))
  .add("Height", withReadme(HeightReadme, () => <Main showIndex height={400} />))
  .add("Loading", withReadme(LoadingReadme, () => <Main loading={true} loadingText="Loading Users..." pageSize={25} />))
  .add("Manual", withReadme(ManualReadme, () => <Main pageSize={25} manual />))
  .add("No matching records", withReadme(NoDataTextReadme, () => <Main
  data={[]}
  columns={[
    { id: "balance" },
    { id: "email" },
    { id: "age" }
  ]}
  noDataText="Error finding matching records." />))
  .add("Page", withReadme(PageReadme, () => <Main pageSize={25} page={4} />))
  .add("Selectable", withReadme(SelectableReadme, () => <Main showIndex selectable onSelectAllRows={(rows) => console.log(rows)} onRowSelection={(row) => console.log(row)}/> ))
  .add("Show index", withReadme(ShowIndexReadme, () => <Main showIndex />))
  .add("Total", withReadme(TotalReadme, () => <Main pageSize={25} total={400} />));
