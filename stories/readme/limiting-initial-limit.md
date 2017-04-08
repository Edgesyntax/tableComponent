```js
import React from "react";

import Table from "tableComponent";
import data from "./table.mock.yaml";

const Default = () => {
  return (
    <Table
      data={data}
      limit={25} />
  )
}

export default Default;
```
