All table styles are scoped using the `.table-component` prefix making it extremely easy to override the default styles.

```css
.table-component {
  position: relative;
  box-sizing: border-box;
}
.tc-table {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  overflow: auto;
}
.table-component .tc-thead {
  user-select: none;
  border-bottom: 1px solid #f0f0f0;
  background-color: #fafafa;
}
.table-component .tc-thead button {
  display: inline-block;
  width: auto;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: transparent;
  border: 0;
  cursor: pointer;
  white-space: nowrap;
  font: inherit;
  color: inherit
}

.table-component select,
.table-component input{
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0px 4px;
  border: 1px solid #E1E1E1;
  box-sizing: border-box;
}
.table-component input[type=checkbox] { 
  height: auto;
  width: auto;
  padding: 0;
}
.table-component select {
  width: auto;
}

.table-component .tc-th,
.table-component .tc-th button {
  text-align: center;
  text-transform: capitalize;
}
.tc-th-resizer {
  display: inline-block;
  position: absolute;
  width: 36px;
  top: 0;
  bottom: 0;
  right: -18px;
  cursor: col-resize;
  z-index: 10;
}
.table-component .tc-tr {
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #f0f0f0;
}
.table-component .tc-thead .tc-tr:last-child {
  border-bottom: 0;
}
.table-component .tc-th,
.table-component .tc-td {
  border-right: 1px solid #f0f0f0;
  min-width: 28px;
}
.table-component .tc-th:last-child,
.table-component .tc-td:last-child {
  border-right: 0;
}
.table-component .tc-tfoot {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px 6px;
  border-top: 1px solid #f0f0f0;
}
.table-component .tc-th,
.table-component .tc-td {
  position: relative;
  padding: 2px 6px;
}
.table-component .tc-td,
.table-component .tc-th-content,
.table-component .tc-thead button {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.table-component .tc-tfoot,
.table-component .index {
  background-color: #fafafa;
}
.table-component .tc-tbody {
  position: relative;
}
.table-component .tc-tbody .tc-tr:not(.active):hover {
  background-color: #fafafa
}
.table-component .tc-tr.active {
  background: rgba(209, 67, 51, 0.1)
}
.table-component i {
  pointer-events: none
}
.table-component .icon {
  pointer-events: none;
  width: 15px;
  display: inline-block;
  vertical-align: middle;
}
.table-component .index {
  text-align: center;
}
.table-component .activeIndex {
  background-color: #c0392b;
  color: #fff
}
.table-component .pages {
  display: inline-block;
  margin: 0
}
.table-component .activePage {
  background: #c0392b;
  border-color: #c0392b;
  color: #fff
}
.table-component .jsonValueText {
  color: #c0392b
}
.table-component .jsonNestedNodeItemString {
  color: #999
}
.table-component .funnel {
  fill: #f0f0f0
}
.table-component .tc-overlay {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 1px;
  bottom: 1px;
  left: 1px;
  right: 1px;
  background: rgba(255, 255, 255, .8);
  z-index: 1;
}
.table-component .tc-no-data {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, .8);
}
.table-component .tc-message-text {
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  color: #00000099;
}
```

Table brands and the two buttons below are exported as objects to help style non `tableComponent` tables.

```js
const tableControls = Object.assign({}, {
  button:{
    display: "inline-block",
    height: "20px",
    width: "auto",
    margin: 0,
    padding: 0,
    lineHeight: 0,
    overflow: "hidden",
    background: "transparent",
    border: 0,
    cursor: "pointer"
  },
  actionBtn: {
    fontSize: "1.4em",
    margin: "0",
    overflow: "hidden"
  }
});

export {brand, tableControls};

```

[`Style component`]: https://github.com/FormidableLabs/radium/tree/master/docs/api#style-component