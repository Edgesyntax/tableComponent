# tableComponent
A react table component designed to be flexible and performant

# Install
____
```
npm install tableComponent --save
```

# Usage
____
```js
import React from "react";
import ReactDOM from 'react-dom';
import Table from "tableComponent";

ReactDOM.render(
  <Table
  data={[
    { "name": "Raquel Wooten", "email": "raquelwooten@ecraze.com", "registered": "2015-02-23T12:56:54 +06:00", "latitude": 86.017882, "longitude": -80.094174 },
    { "name": "Diaz Barlow", "email": "diazbarlow@gazak.com", "registered": "2015-07-15T10:57:26 +05:00", "latitude": -82.476876, "longitude": 134.539503 },
    { "name": "Traci Wiggins", "email": "traciwiggins@geologix.com", "registered": "2016-07-01T09:53:59 +05:00", "latitude": -16.153468, "longitude": 147.007858 },
    { "name": "Ferguson Head", "email": "fergusonhead@comtext.com", "registered": "2015-05-07T05:12:18 +05:00", "latitude": -18.389837, "longitude": 123.649699 },
    { "name": "Audra Callahan", "email": "audracallahan@homelux.com", "registered": "2015-06-15T04:39:44 +05:00", "latitude": 32.395529, "longitude": -140.60243 }
  ]}/>,
  document.getElementById('app')
)

```

# License

[MIT](license) &copy; [Kwame Adjei][author]

[author]: https://github.com/edgeadjei
