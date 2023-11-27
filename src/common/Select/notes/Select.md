# Describing Props

Prop name: `options`
Prop type: `array`
Prop description: The data below will be understood as the options the user will see as "clickable" options

```js
;[
  { label: 'Travel', value: 'Travel' },
  { label: 'Food / Beverage', value: 'Food / Beverage' },
  { label: 'Automotive', value: 'Automotive' },
  { label: 'Education', value: 'Education' },
]
```

Each item is an object literal of a label key and a value key.

We need to pass a particular "shape" of information back to the parent component this is known as the "contract" the handler of this information

What is the parent component? see below:

```js
const App = () => <Select options={[]} />
```

The above very simply represents the `<Select />` component being returned out of the parent `<App />` component. The `<App />` component will "handle" the information passed from and to the `<Select />` component. The `callback` function is the method by which we allow our components to communicate with each other.

The "contract" we have come up with is the below structure:

```js
{ name: "<name of select component>", data: { label: 'Bob', value: 123 } }
```

We use the `name` key's value to determine which "slice" of state to update on the parent. The `data` key is an object with two keys of `label` and `value` which will be used to represent which item is selected from within the `<Select />` component.

The below code will be needed within our `onClick` callback.

```js
// What is item? Item will be provided during each iteration during our options.map
const label = item.label
const value = item.value
callback({ name: 'Select1', data: { label: label, value: value } })
```

The output might look like this:

```js
 <div
  key={item.label}
  onClick={() => {
    // Step 2
    const label = item.label;
    const value = item.value;
    callback({ name: "Select1", data: { label: label, value: value } });
  }}
>

```
