```js
import React from "react";

import Table from "tableComponent";
import data from "./table.mock.json";

const Default = () => {
  return <Table loading={true} loadingText="Loading Users..." />
}

export default Default;
```

*Mainly used for server rendered tables*
