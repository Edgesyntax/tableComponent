```js
import React from "react";

import Table from "tableComponent";
import data from "./table.mock.json";

const Default = () => {
  return (
    <Table
      data={data}
      sort={{column: "name", direction: "DES"}}/>
  )
}

export default Default;
```
