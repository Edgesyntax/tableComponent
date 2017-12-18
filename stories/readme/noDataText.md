```js
import React from "react";

import Table from "tableComponent";

const Default = () => {
  return (
    <Table
      data={[]}
      columns={[
        {id: "balance"},
        {id: "email"},
        {id: "age"}
      ]}
      noDataText="Error finding matching records." />
  )
}

export default Default;
```
