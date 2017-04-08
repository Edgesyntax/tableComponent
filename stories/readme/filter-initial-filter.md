```js
import React from "react";

import Table from "tableComponent";
import data from "./table.mock.yaml";

const Default = () => {
  return (
    <Table
      data={data}
      filter="brittany"/>
  )
}

export default Default;
```
