## Steps

Review / evaluate what you are trying to make. Depending on what you are making this will
have an effect on the kind of contract you might want to make.

What I am making?
Answer: A `Select` Component

Is this component reusable?
Answer: Yes

---

What are the props? ie: array, object literal, string, id, name etc

---

Do I see a list of items? YES / NO?

If YES, then we might want to use an array as a potential prop

Do I see the ability to select (focus on select) multiple items? YES / NO?

If YES, then we will need a way to manage the active items, which means we might
need an identifier - `options` as the "manager" of the state.

If NO to the question of "the ability to select multiple...", you will want to use either a string or an object-literal
This is because there can only ever be one `active` item and we will want to pass that `active`data (or in other words `receive` that data) as a prop.

---

What "active state" javascript "type" will we use? (this is how we manage which items are selected / not selected)
If there are multiple selected on the UI, we need to send back the entire array to store the previous 'state' of that array. If there is only one item selected, we can use an object literal or string.
Answer: We will use an array for our "active state" component. We will name this property: "options"

---

What is the name of your component?
Answer: <Select />

---

What does our component look like if we were to render it right now?
Answer:

```js
<Select options={[]} />
```

---

How will we allow the component to communicate with its parent? (ie: passing infomation to the parent)
Note: The parent manages the state of a reusable component (not all state, but the active states, some state will be reserved for the component itself)
Answer: using a callback method, we will name it: callback

---

What does our component look like now?
Answer:

```js
<Select options={[]} callback={() => {}} />
```

---

How do we want to manage our state on the parent side?

Answer:

This is our contract:

```js
const [state, setState] = useState({
`<name of component>` : `<data from child component>`

})
```

---

How will we differenciate between the states of `<name of component>` if we have more than one reusable component on the screen?
Answer: We will pass an additional prop called: 'name' to the component, this then allows the child component to pass this `name` ONLY when the
callback function is executed

---

```js
const handleCallback = ({ name, data }) => {
  // this is where we update the state
  // it could be a local state/redux
  // name & data are part of the contract
}
```

// hard-coded example

```js
callback({
  name: 'ABC-COMPONENT',
  data: [],
})

// real-life example
callback({
  name: name,
  data: [],
})
```

What does our component look like now?
Answer:

```js
<Select name="ABC-COMPONENT" options={[]} callback={() => {}} />
```

---

What will our component look like at the start?
Answer:

```js
const Component = ({ name, callback, options }) => {
  return <div>Component</div>
}

export { Component }
```

---

How should I begin with building the actual re-usable component?
Answer:

- Start with rendering out the options. <div>{label}</div> etc.
- Create elements which you can click on (using onClick)
- Create a local state for expanding / contracting the options view (useState(false))
- Create a "header" group of elements, (this element will have a "click" which should update the expanded state "toggle")
- Conditionally render the "renderOptions()" based on the "expanded" state
- Add an `onClick` event to each rendered `option`, execute a simple `console.log(item)` of the item clicked.
- Create a special callback handler (in the reusable component). Prior to passing the payload to the parent, we need a "handler" that will
  will perform the necessary array adjustments in preparation for executing the `callback()` function with the payload.

```js
// Function which updates the options array - specifically changing the `active` key against the `label` you clicked on
const updatedOptions = (label, options) => {
  const result = options.map((curr) => {
    if (curr.label === label) {
      return { ...curr, active: !curr.active }
    }
    return curr
  })
  return result
}

const Select = ({ name, callback, options }) => {
  // Example below for "special" handler, this method will be executed when the user "clicks" on any of the `renderOptions()` items.
  const specialHandler = (item) => {
    const payload = {
      name: name,
      data: updatedOptions(item.label, options),
    }
    callback(payload)
  }
}
```
