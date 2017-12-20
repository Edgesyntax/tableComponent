```js
import React from "react";

import Table from "tableComponent";
import data from "./table.mock.json";

const Default = () => {
  return <Table manual />
}

export default Default;
```
**Prevents table from managing internal state i.e, Filtering, Sorting, Limiting, Pagination**

*Mainly used for server rendered tables*
