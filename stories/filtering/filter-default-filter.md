```js
import React from "react";

import Table from "tableComponent";
import data from "./table.mock.json";

const Default = () => {
  return (
    <Table
      data={data}
      filterable 
      filter={{name: "brittany", age: 100}}/>
  )
}

export default Default;
```
