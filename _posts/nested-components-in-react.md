---
title: 'Nested Components are an Anti-Pattern in React'
date: '2024-03-20'
coverImage: ''
coverImageAttribute: ''
excerpt: ''
author:
  name: Henri Remonen
featured: false
ogImage:
  url: ''
categories:
  - 'react'
  - 'tutorials'
keywords:
  - 'eslint react no-unstable-nested-components'
  - 'react component'
  - 'react eslint'
  - 'react reconciliation'
  - 'react unstable component'
---

To give a definitive answer on why creating components inside another component is bad, is this; It will cause the nested component to be created on every re-render, thus losing its sub-tree and state, leading to performance issues, unexpected behavior, and other bugs. If you’re still interested, we will see why this is the case.

## The Problem of Nested Components

You’ve heard it before and perhaps you have done it yourself – declared a component inside another component. Let’s first imagine an example of this situation. For just educative purposes, I’ve created this example component called `UnstableComponent`, which then declares a new component inside of its function scope – the `ChildComponent`.

```
const UnstableComponent = () => {
  const ChildComponent = () => (
    <div>
      <p>Child Component</p>
    </div>
  );

  return (
    <div>
      <ChildComponent />
    </div>
  );
}
```

JSX

Okay, so this is what the headline is all about. Creating a component inside another component is indeed an anti-pattern. This will lead to nasty bugs and confusing code and we’ll see why in a second.

From one of our previous articles about [React re-rendering](https://www.incluvate.com/blog/how-react-re-renders/#components-and-elements-in-react), we learned that the React JSX syntax for components is just a syntax sugar for JavaScript functions.

In our example, calling a component like `<ChildComponent/>` is just a way of saying `React.createElement(ChildComponent, null, null)` which returns an object representation of the element.

```
{
  "$$typeof": Symbol("react.element"),
  type: ChildComponent(),
  key: null,
  ref: null,
  props: {},
  _owner: {…},
  _store: {…},
  …
}
```

JavaScript

To determine if an element has changed between renders, react uses what is called _diffing and reconciliation_ algorithm. We also [scratched this comparison logic](https://www.incluvate.com/blog/how-react-re-renders/#about-the-comparison) in the mentioned article about React re-rendering. A very crude example of what happens:

React will do a comparison of the elements to determine if anything has changed.

Note that React would first check if there is no `prevElement`, meaning that the `newElement` would be a completely new element. This is just a disclaimer that my example is not 100 % accurate in the implementation details.

```
if (prevElement.type !== newElement.type || !shallowEqual(prevElement.props, newElement.props)) {
  flagRender(prevElement)
}
```

JavaScript

Here, in our case, the types are the same; `ChildComponent()`,so we are comparing two references to the same object. In JavaScript, functions are just objects, and the objects can be compared. JavaScript will find the referenced memory location and get the value that is stored in that memory slot. From that, it will continue to conclude if the compared objects are the same.

When React tries to perform the comparison `prevElement.type !== newElement.type` it will compare two different object references.

```
const prevElement = <ChildComponent />
const newElement = <ChildComponent />

console.log(elA === elB) // false
```

JSX

Here, React will see a new type on every render and destroy the entire sub-tree’s DOM nodes and state for the `ChildComponent`. Therefore, React can’t perform optimization for this kind of code.

## The Solution

While the solution might be obvious; Do NOT declare components inside other components. Easy fix would just be to extract the nested component to its own declaration.

```
const ChildComponent = () => (
  <div>
    <p>Child Component</p>
  </div>
);

const UnstableComponent = () => (
  <div>
    <ChildComponent />
  </div>
);
```

JSX

This way, the `ChildComponent` is not created on every `UnstableComponent` re-render and will preserve its sub-tree and state.

It is also good practice to enable the [Eslint rule for unstable nested components](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md) in your code base. The rule will warn about such oversights.

<figure>

![](images/Eslint-no-unstable-nested-components-warning-message.png 'Eslint-no-unstable-nested-components-warning-message')

<figcaption>

Eslint warning about nested unstable components inside VS Code.

</figcaption>

</figure>