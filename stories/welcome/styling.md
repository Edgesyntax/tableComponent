All table styles are scoped using the `.table-component` prefix making it extremely easy to override the default styles.

```css
.table-component table {
  border-collapse: initail;
  position: relative;
}
.table-component th, .table-component tfoot td {
  background-color: #d1f2f4;
  border-color: #E1E1E1;
}
```

**Brand Colors**
```js
{
  primaryColor    : "#c0392b",
  secondaryColor  : "#f9f9f9",
  borderColor     : "#E1E1E1"
}
```
**CSS Styles**
```css
.table-component {
  position: relative;
}
.tc-table {
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.1);
  overflow: auto;
}
.tc-tbody {
  overflow: auto;
}
.table-component .tc-thead {
  user-select: none;
}
.table-component .tc-thead button {
  background: transparent;
  border: 0;
  cursor: pointer;
  font: inherit;
  outline: none;
}

.table-component select {
  height: 100%;
  margin: 0;
  border: 1px solid #E1E1E1
}

.table-component .tc-th-content {
  text-align: center;
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
  border-bottom: 1px solid #E1E1E1;
}
.table-component .tc-th,
.table-component .tc-td {
  border-right: 1px solid #E1E1E1;
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
.table-component .tc-th,
.table-component .tc-tfoot,
.table-component .index {
  background-color: #f9f9f9;
}
.table-component .tc-tbody .tc-tr:not(.active):hover {
  background-color: #f9f9f9
}
.table-component .tc-tr.active {
  background: rgba(209, 67, 51, 0.1)
}

.table-component .formControl {
  height: 100%;
  width: auto;
  margin: 0;
  border: 1px solid #E1E1E1;
  box-sizing: border-box;
}
.table-component .formControl.filter {
  width: 100%;
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
  flex: 0 0 auto;
  width: 50px;
}
.table-component .index.select {
  width: 30px;
  padding: 2px 0;
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
  fill: #E1E1E1
}
.table-component .tc-loading {
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