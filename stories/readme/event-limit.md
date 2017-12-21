```js
import React from "react";

import Table from "tableComponent";
import data from "./table.mock.json";

const Default = () => {
  return <Table 
    limit={25} 
    onLimitChange={(response) => console.log(response)} />) />
}

export default Default;
```

Open browser console to view response
