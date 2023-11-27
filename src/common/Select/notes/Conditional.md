# Step 1

Use this to first check that the label is "truthy" using the double bang
Then style a <span> element to be bold (this element will act as the "currently selected option")

```js
const renderSelectedItem = (label) => {
  if (!!label) {
    return <span style={{ fontWeight: '700' }}>{label}</span>
  }
}
```
