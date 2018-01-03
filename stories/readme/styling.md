Default styling is applied using Radium's [`Style component`].

```js
<Style
  scopeSelector=".tableComponent"
  rules={tableStylesheet}/>
```
All table styles are scoped using the `.tableComponent` prefix making it extremely easy to override the default styles.

```css
.tableComponent table {
  border-collapse: initail;
  position: relative;
}
.tableComponent th, .tableComponent tfoot td {
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
.tableComponent {
  position: relative;
}
.tableComponent table {
  border-collapse: collapse;
  position: relative;
}
.tableComponent thead button {
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
.tableComponent select {
  height: 100%;
  margin: 0;
  border: 1px solid #E1E1E1
}
.tableComponent th, .tableComponent tfoot, .tableComponent td {
  border: 1px solid #E1E1E1;
  font-weight: normal;
  padding: 2px 12px;
  font-size: inherit
}
.tableComponent th, .tableComponent tfoot {
  background-color: #f9f9f9;
}
.tableComponent tbody tr:not(.activeRow):hover {
  background-color: #f9f9f9
}
.tableComponent td {
  border: 1px solid #E1E1E1;
  padding: 2px 12px
}
.tableComponent tfoot {
  border: 0
}
.tableComponent .formControl {
  height: 100%;
  width: auto;
  margin: 0;
  border: 1px solid #E1E1E1
}
.tableComponent .formControl.filter {
  width: 100%;
}
.tableComponent i {
  pointer-events: none
}
.tableComponent .icon {
  pointer-events: none;
  width: 15px;
  display: inline-block;
  vertical-align: middle;
}
.tableComponent .activeRow {
  background: rgba(209, 67, 51, 0.1)
}
.tableComponent .index {
  background-color: #f9f9f9;
  border: 1px solid #E1E1E1;
  font-weight: normal;
  padding: 2px 12px;
  text-align: center
}
.tableComponent .activeIndex {
  background-color: #c0392b;
  color: #fff
}
.tableComponent .pages {
  display: inline-block;
  margin: 0
}
.tableComponent .activePage {
  background: #c0392b;
  border-color: #c0392b;
  color: #fff
}
.tableComponent .jsonValueText {
  color: #c0392b
}
.tableComponent .jsonNestedNodeItemString {
  color: #999
}
.tableComponent .funnel {
  fill: #E1E1E1
}
.tableComponent tbody.loading {
  position: absolute;
  top: 1px;
  bottom: 0;
  left: 1px;
  right: 0;
  background: rgba(255, 255, 255, .8);
  display: flex;
}
.tableComponent tbody.loading tr{
  background : transparent !important;
  width: 100%;
}
.tableComponent tbody.loading tr td{
  display: flex;
  padding: 0;
  justify-content: center;
  height: 100%;
  align-items: center;
  border: 0
}
```

All table brands, styles and the two buttons below are exported as objects to help style non `tableComponent` tables.

```js
const tableControls = Object.assign({}, tableStylesheet, {
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

export default tableStylesheet;
export {brand, tableControls};

```

[`Style component`]: https://github.com/FormidableLabs/radium/tree/master/docs/api#style-component