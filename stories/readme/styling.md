Default styling is applied using Radium's [`Style component`].

```js
<Style
  scopeSelector=".tableComponent"
  rules={tableStylesheet}/>
```
All table styles are scoped using the `.tableComponent` prefix making it extremely easy to override the default styles.

```css
.tableComponent table {
  borderCollapse: initail
}
.tableComponent th, .tableComponent tfoot td {
  backgroundColor: #d1f2f4,
  borderColor: #E1E1E1
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
table {
  borderCollapse: collapse;
}
th, tfoot td {
  backgroundColor: #f9f9f9;
  borderStyle: solid;
  borderWidth: 1px;
  borderColor: #E1E1E1;
  fontWeight: normal;
  padding:2px 25px;
  fontSize: inherit;
}
tr:not(.activeRow):hover {
  backgroundColor: #f9f9f9;
}
td {
  border: 1px solid #E1E1E1;
  padding:2px 12px;
}
thead button {
  display: inline-block;
  width: auto;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: transparent;
  border: 0;
  cursor: pointer;
  whiteSpace: nowrap;
  font: inherit;
  color: inherit;
}
select {
  height: 100%;
  margin: 0;
  border: 1px solid #E1E1E1;
}
i {
  pointerEvents: none;
}
.activeRow {
  background: rgba(209, 67, 51, 0.1);
}
.index {
  backgroundColor: #f9f9f9;
  border: 1px solid #E1E1E1;
  fontWeight: normal;
  padding:2px 12px;
  textAlign:center;
}
.activeIndex {
  backgroundColor: #c0392b;
  color: #fff;
}
.pages {
  display: inline-block;
  margin: 0;
}
.activePage {
  background: #c0392b;
  borderColor: #c0392b;
  color: #fff;
}
.jsonValueText {
  color: #c0392b;
}
.jsonNestedNodeItemString {
  color: #999;
}
.funnel {
  fill: #E1E1E1;
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