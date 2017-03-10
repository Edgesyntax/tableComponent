// React Modules
import React from "react";

// Application Modules
import Table from "../dist/table.js";
import minTableMock from "./minTable.mock.yaml";

const Default = (props) => <Table data={minTableMock} {...props}></Table>

export default Default;
