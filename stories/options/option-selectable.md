```js
import React from "react";

import Table from "tableComponent";
import data from "./table.mock.json";

const Default = () => {
  return (
    <Table
      data={data}
      selectable 
      onSelectAllRows={(rows) => console.log(rows)}
      onRowSelection={(row) => console.log(row)}/>
  )
}

export default Default;
```
