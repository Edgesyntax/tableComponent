```js
import React from "react";

import Table from "tableComponent";
import data from "./table.mock.json";

const Default = () => {
  return (
    <Table
      data={data}
      columns={[
        { id: "_id" },
        { id: "balance" },
        { id: "age" },
        { id: "name" },
        { id: "email" },
        { id: "isActive", filterMethod:(value) => console.log(value)}
      ]}
      filterable />
  )
}

export default Default;
```
