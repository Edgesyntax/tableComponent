```js
import React from "react";

import Table from "../dist/table.js";
import data from "./table.mock.yaml";

const Default = () => {
  return (
    <Table
      data={data}
      columns={[
        {id: "balance"},
        {id: "email"},
        {id: "age"}
      ]}/>
  )
}

export default Default;
```
