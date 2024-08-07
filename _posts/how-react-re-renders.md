---
title: 'How React Re-renders?'
date: '2024-02-28'
coverImageId: 'https://res.cloudinary.com/daty4gssm/image/upload/q_auto,f_auto,w_1024/v1721905668/How_React_Re-renders_oe0zgo.webp'
coverImageAttribute: ''
excerpt: 'React uses components and elements to build user interfaces. When a component is updated, React re-renders the elements. If you´re not familiar with these concepts, don´t worry. We´ll cover them briefly, and if this struct a chord you´re welcome to learn more as we can explore these concepts further!'
author:
  name: Henri Remonen
featured: false
ogImage:
  url: 'https://res.cloudinary.com/daty4gssm/image/upload/q_auto,f_auto,w_1024/v1721905668/How_React_Re-renders_oe0zgo.webp'
categories:
  - 'react'
  - 'tutorials'
keywords:
  - 'frontend'
  - 'jsx'
  - 're-rendering'
  - 're-rendering in react'
  - 'react rendering'
  - 'react'
  - 'react component'
  - 'react element'
  - 'react js'
  - 'react reconciliation'
  - 'react renderer'
---

To understand React re-rendering, we should probably first check out what rendering means in React. We are familiar with React components and elements (or I certainly hope so). For a really, really quick demonstration, I will give you an example of both.

## Components and Elements in React

A [component](https://react.dev/learn/your-first-component), as I like to think about it, is a blueprint of a certain user interface (UI) block. Components are then used to build our UI with the blocks that are elements.

React applications are composed of these components and usually the components are re-usable. Components are just normal JavaScript functions that return an element in a form of [JSX](https://react.dev/learn/writing-markup-with-jsx), which is just React specific syntax for writing the components.

```jsx
const Component = () => (
  <div>
    <h1>Hello Component</h1>
  </div>
)

export default Component
```

Components also can take arguments just like normal JavaScript functions. These are called [props](https://react.dev/learn/passing-props-to-a-component) in React.

When the following component is called, it creates an element.

```jsx
const OtherComponent = () => {
  const element = <Component />

  return element
}

export default OtherComponent
```

It is also possible to create elements using the [createElement](https://react.dev/reference/react/createElement) function.

```jsx
const AnotherComponent = () => React.createElement(Component, null, null)
```

Elements have a type which must be a valid React component, props which is an object of the props (arguments) and child nodes. We can even print out the element in our console to check what they are about.

```js
{
  type: Component,
  key: null,
  ref: null,
  props: {},
  ...
}
```

We can see the type is a function (our component) and the key, ref and props are empty, as there are none. Based on the type React will either render the component if the type is a function or if the type is built-in HTML tag name, it will create a corresponding element and render that.

Note that the components are by convention capitalized, and this makes a difference in the type.

```jsx
const element = <Component />
const element2 = <component />

console.log(element.type) // Component - function
console.log(element2.type) // "component" - string
```

Also, a more accurate representation of react elements would be the following object.

```js
{
  "$$typeof": Symbol.for("react.element"),
  type: Component(),
  key: null,
  ref: null,
  props: {},
  ...
}
```

Each object must have the `$$typeof: Symbol.for(‘react.element’)` for [security reasons](https://github.com/facebook/react/pull/4832). However, this is not necessary for the scope of these examples. Also, it is not really advised to write elements as plain objects in your production code, use JSX or even the `React.createElement()` instead.

## Rendering in React

In React elements are immutable. They represent the UI at a certain point in time. As React likes to put it; [rendering consists of three steps](https://react.dev/learn/render-and-commit):

1. Trigger

2. Render

3. Commit

### Trigger

The very first trigger for rendering your application is when the **root** element is rendered. The root element is a HTML element that will be managed by the React DOM to build the rest of the application.

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    ...
  </React.StrictMode>
)
```

Boom! So the Root element is just a `<div>` element with the id root.

```html
<div id="root"></div>
```

Which is then passed to [ReactDOM.createRoot](https://react.dev/reference/react-dom/client/createRoot) and the elements we want to render are called inside the `root.render()`. `ReactDOM.createRoot()` takes a [DOM element](https://developer.mozilla.org/en-US/docs/Web/API/Element) as argument, which is most likely a [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement), like above, a `<div>` element.

Some libraries might call [hydrateRoot()](https://react.dev/reference/react-dom/client/hydrateRoot) instead, usually when using server side rendering where `createRoot()` is not available. Anyway, this is the big boom and will trigger the initial rendering.

### Render

After the initial trigger, the rendering will start. In a nutshell, rendering is just React calling your components recursively.

- Render the root element

- Call top level elements (the elements that are direct children of the root)

- If the elements contains child elements, recursively call them

- Each call returns an JavaScript object, which is used to determine what to render by the type

- Do this until there are no more elements to render

Let’s take this example:

```jsx
root.render(
  <React.StrictMode>
    <OtherComponent />
  </React.StrictMode>
)
```

First `ReactDOM.createRoot()` is called for the `<div>` element and the result is placed into memory as the **root** variable. React will move into the next step and `root.render()` is called.

React will call `OtherComponent()`**,** which will return the following JavaScript object.

```js
{
  type: Component,
  key: null,
  ref: null,
  props: {},
  ...
}
```

Then React will check that type of the returned object and notice that the type is a component. This leads to React calling `Component(),` which returns an object.

```js
{
  type: ”div”,
  key: null,
  ref: null,
  props: {
   children: [
      {
        type: "h1",
        key: null,
        ref: null,
        props: {
          children: "Hello Component"
        },
        ...
      },
   ]
  },
  ...
}
```

Now the tree has traversed and no more elements are telling React, “hey, we have something to call further” (meaning more nested components).

### Commit

The tree traversal will cause a DOM structure of the returned objects. Here, the structure would look like this.

```html
<div>
  <h1>Hello Component</h1>
</div>
```

React will call the `appendChild()` DOM API with the resulted DOM structure it has created, which will then result in the UI changing on users’ browser.

Now that we have covered what rendering means in React, it is time to dive into re-renders.

## React Re-rendering

In React, there are two occasions for a component to render:

1. Initial render that we discovered

2. The component or its parents state updated

State updates get carried out in the _next_ render. If the new state value is identical to the old value by the `Object.is()` comparison, re-rendering will be skipped for the component and its children.

### About the Comparison

When a state updates, React needs to figure out efficiently which elements have changed in the tree. For this, React implements a heuristic algorithm based on two assumptions:

1. Two elements of different types will produce different tree

2. Key props can be used to hint possibly stable elements

The “key” (not the prop) for this is about the type of React elements. When React compares elements, it checks the type first. The process React uses for comparison and re-rendering is called the _[diffing and reconcialiation](https://legacy.reactjs.org/docs/reconciliation.html)_. I will provide a quick demonstration of how React determines what and when to re-render or unmount.

#### Elements of Different Types

If the type of two elements are different, React will destroy the old tree and build the new tree from scratch. Basically, the same way as we already saw in the Rendering section of this article, but rather than starting from the root element, the new “root” is the element that triggered the render.

It does not matter if the element is a DOM element, `<div>`, `<a>` etc. or a component – it will still lead to full rebuild as the type has changed. Every child element is also removed, including its state.

#### Elements of the Same Type

If the type of two DOM elements are the same, React will look at the attributes and update only the changed attributes, keeping the underlying DOM node. For example, in the following situation, only the className will get updated in the DOM node.

```html
<h1 className="before">Comparison</h1>

<h1 className="after">Comparison</h1>
```

The instance of updated components stays the same to maintain the state of re-renders. If the type of two components are the same, React will update the props of the underlying component instance. Ultimately, this means React re-renders the component, taking the existing component and updating it with the new props.

```js
// Before                // After
{                        {
  type: Component,         type: Component,
  key: null,               key: null,
  ref: null,               ref: null,
  props: {},               props: {},
  ...                      ...
}                        }

Component === Component // true – re-render
```

Re-rendering a component will preserve the DOM node and state, etc.

### Batching

Possible updates are done in [batches](https://react.dev/learn/queueing-a-series-of-state-updates) as it will prevent multiple re-renders. For example, the following will not increment the count by two.

```jsx
const Batching = () => {
  const [count, setCount] = React.useState(0)

  const handleClick = () => {
    setCount(count + 1)
    setCount(count + 1)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button type='button' onClick={handleClick}>
        Increment
      </button>
    </div>
  )
}
```

## What Really Triggers a Re-render?

### State Updates

Initially rendered components can re-render on state change, okay, very cool. The most obvious state is the `React.useState`, which can be updated using the set function of its own. Updating component’s state automatically queues a render, which, as we discovered, is processed in batches.

State can mean so much more in React though, it is not just the `React.useState`, there are also context changes and hook changes, etc. Here I will go through a few of the most obvious situations that will trigger a re-render.

### Parent State Updates

Against some belief that props changing would trigger a re-render is bogus statement. Let’s consider the following example.

```jsx
const CheckBox = ({isSelected, onChange}: {isSelected: boolean, onChange: () => void}) => (
  <label htmlFor="checkbox">
    <span>I consent that my soul is yours for ever.</span>
    <input id="checkbox" type="checkbox" checked={isSelected} onChange={onChange} />
  </label>
)

const FormDisclaimer = () => {
  console.log('I was rendered!')

  return (
    <div>
      <p>
        This is a disclaimer. Please read it carefully.
      </p>
    </div>
)}

const Form = () => {
  const [checked, setIsChecked] = React.useState(false)

  return (
    <div>
      <CheckBox isSelected={checked} onChange={() => setIsChecked(!checked)} />

      <FormDisclaimer />
    </div>
  )
}
```

The `FormDisclaimer` element will be rendered on every single time the checkbox’s state change, even though it does not depend on the checked state. This is a design choice of React, because it’s hard to know whether child components depend on parents’ state.

### Context Updates

[Context Providers](https://react.dev/learn/passing-data-deeply-with-context) might help passing the same props for multiple child components and to prevent [prop drilling](https://www.geeksforgeeks.org/what-is-prop-drilling-and-how-to-avoid-it/). However, when the context’s value changes, React will update all the components reading from it!

```jsx
const Form = () => {
  const checked = React.useContext(FormContext)

  return (
    <div>
      <CheckBox isSelected={checked} onChange={() => setIsChecked(!checked)} />

      <FormDisclaimer />
    </div>
  )
}
```

If the checked value changes in the `FormContext`, all the components reading it will get updated. Of course also every children of the re-rendered components will get re-rendered.

### Hook Updates

Extracting state into [custom hooks](https://react.dev/learn/reusing-logic-with-custom-hooks) will still result in the same as just using `useState` or `useEffect` inside the component. Custom hooks, however, let you reuse the same data inside multiple components without copy pasting code. Every component using these hooks will be re-rendered on the hooks state updates.

## Conclusions

React elements are just IMMUTABLE JavaScript objects that are cheap to render. These elements are designed to be rendered and re-rendered all the time and should not be avoided. Elements are supposed to represent the UI at a certain point of time, like a frame in a movie (kinda).

Rendering comprises three steps; trigger, render, and commit. Triggering might be the big bang when the application “start” and is rendered, or it could be re-render caused by some type of state change. Committing is when the rendered elements (objects) are transformed into the final DOM node and committed to the actual DOM.

When React decides what to re-render or what to update, it uses diffing and reconciliation algorithms, which uses a shallow comparison of the types of the elements. We didn’t go deep into these algorithms, neither did we discover how to prevent re-renderings using memoization and key prop, maybe topics to cover in the future. Later, alligator.
