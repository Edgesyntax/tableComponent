```js
import React from "react";

import Table from "tableComponent";
import data from "./table.mock.json";

const Default = () => {
  return (
    <Table
      data={data}
      filterable 
      defaultFilter={{ name: "brittany", age: 100 }}/>
  )
}

export default Default;
```
