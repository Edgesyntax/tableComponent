```js
import React from "react";

import Table from "tableComponent";
import data from "./table.mock.json";

const Default = () => {
  return <Table defaultPage={4} />
}

export default Default;
```

*Mainly used for server rendered tables*
