---
title: 'React Reconciliation and React Fiber'
date: '2024-03-27'
coverImageId: '/v1721983859/React_Reconciliation_React_Fiber_vn5o9r.webp'
coverImageAttribute: ''
excerpt: 'In our article about how React re-renders we managed to peek at how React reconciliation algorithm works. However, we did not go deep into its soul and inner parts. I wanted to write a follow-up post that will go deeper into the internals of React and more specifically – the reconciler and the React Fiber.'
author:
  name: Henri Remonen
featured: false
ogImage:
  url: 'https://res.cloudinary.com/daty4gssm/image/upload/q_auto,f_auto,w_1024/v1721983859/React_Reconciliation_React_Fiber_vn5o9r.webp'
categories:
  - 'react'
  - 'tutorials'
keywords:
  - 'fiber node'
  - 'react'
  - 'react fiber'
  - 'react fiber reconciler'
  - 'react reconciler'
  - 'react reconciliation'
  - 'react reconciliation phases'
  - 'react stack reconciler'
---

It’s highly recommended to read the article and to understand that part of React and also the difference between React components and elements.

## React Reconciler

React core has a package called the [reconciler](https://www.npmjs.com/package/react-reconciler). Reconciler is used to build renderers for certain HOST environments. Host environments are the DOM in web development and React Native in mobile development for example.

The reconciler is in charge of determining what has changed between the previous state and the next state of the application's UI. This process is further called – Reconciliation.

## Reconciliation Revised

Re-creating the whole DOM tree would be slow on each state update. As a response, React has come up with its heuristic algorithm to decide whether to re-render or not. The algorithm operates in the time complexity of O(n) where n is the number of elements in the tree. As we learned from our previous post, [React makes two assumptions](https://www.hremonen.com/blog/how-react-re-renders/#about-the-comparison) on whether to re-render an element in the tree. As a recap, the two assumptions are:

1. Two elements of different types will produce different tree

2. Key props can be used to hint at possibly stable elements

These assumptions and their implementations are also known as the diffing algorithm which is also an important part of reconciliation. So, reconciliation is just an algorithm that React uses to determine which elements of the DOM tree need to be changed. The reconciliation algorithm forges an updated UI, which is also known as the **Virtual DOM**.

### Virtual DOM

Virtual DOM is just a DOM tree that is kept in memory alongside the actual DOM in the browser. The virtual DOM is kept by [React DOM](https://react.dev/reference/react-dom) to allow for fast manipulation of the state of the UI. These UI changes are then committed to the actual DOM tree, which will be perceived by the users.

## History of the Reconciler

The current React reconciler is the React Fiber Reconciler since version 16 of React. Before the Fiber reconciler, the reconciler was a sort of stack reconciler. Since JavaScript is single threaded it can only execute a single unit of work on the main thread the old stack reconciler availed problems.

### The Old Stack Reconciler

The old reconciler was pretty much just a synchronous LIFO (Last in first out) stack that handled work single unit at a time without being able to pause and return.

Suppose we have the following situation, where we are eagerly waiting for a high-priority update such as an [input event](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event) to take place in our UI. There are lower-priority units of work blocking our high-priority update in the reconciler’s stack, which means we must process them before our input event gets handled. The reconciler would look like this:

<figure>

![Last-in-first-out stack of work units. The top most item being low priority and the bottom item being high priority.](https://res.cloudinary.com/daty4gssm/image/upload/q_auto,f_auto,w_560/v1721983981/Lifo_stack_ygx0hz.webp 'Lifo-stack')

<figcaption>

Last-in-first-out stack with units of work representing the old stack reconciler.

</figcaption>

</figure>

To update the input field, the reconciler will first go through the three units of work before our update. This could mean latency for the user which will cause frustration. Imagine starting to type to an input field and it would take like 500 ms to update the UI (of course this is an exaggerated example).

<figure>

![Representation of the LIFO stack where the newest unit of work added to the stack is processed first.](https://res.cloudinary.com/daty4gssm/image/upload/q_auto,f_auto,w_560/v1721983985/Lifo_stack_update_hcghym.webp 'Lifo-stack-update')

<figcaption>

Last-in-first-out stack handles the units of work solely based on the order in which the units of work has been put into the stack.

</figcaption>

</figure>

The old reconciler was missing a few key features:

- Have a sense of priority and have a way to interrupt work.

- UI would have been updated only once the work was ready.

### The React Fiber Reconciler

These issues led to the development of a new reconciler – the Fiber reconciler. The fiber reconciler is capable of handling priority work, interrupting ongoing lower-priority work to work on a higher-priority work off-screen, and then updating the UI once finished.

This allows the Fiber reconciler to be asynchronous rather than being synchronous like the old reconciler leading to a more performant and smarter.

### React Fiber Node

React Fiber is a JavaScript object that represents a unit of work to do. Like [react elements](https://www.hremonen.com/blog/how-react-re-renders/#components-and-elements-in-react) – Fiber nodes are created in the process of reconciliation and they differ a bit from the react elements. Fiber nodes are mutable objects that are not re-created on every re-render – as opposite of how react elements are.

React elements are converted into Fiber nodes by calling [createFiberFromTypeAndProps()](https://github.com/facebook/react/blob/769b1f270e1251d9dbdce0fcbd9e92e502d059b8/packages/react-reconciler/src/ReactFiber.js#L414) function. After the first initiation, the existing Fiber nodes are just updated with the necessary properties rather than re-creating it. React can relocate Fiber nodes based on the `key` prop and remove it completely from the tree if the corresponding React element is also removed.

React elements are the building blocks of a tree – so are Fiber nodes. Let’s demonstrate this whole thing here – it’s getting a little messy to explain in words. Suppose we have a `<div>` element with a `<h1>` and `<p>` elements as children.

```html
<div>
  <h1>Hello Component</h1>
  <p>Sibling stuff</p>
</div>
```

This structure can also be interpreted by the following React element object:

```json
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
      },
      {
        type: "p",
        key: null,
        ref: null,
        props: {
          children: "Sibling stuff"
        },
      },
    ]
  },
  ...
}
```

Which produces the following Fiber node tree in the reconciliation process:

<figure>

![React Fiber tree. Each element has children and sibling elements and a return data flow.](https://res.cloudinary.com/daty4gssm/image/upload/q_auto,f_auto/v1721983983/React_Fiber_tree_luhoml.webp 'React-Fiber-tree')

<figcaption>

The React Fiber tree where each element has its children and sibling elements and also the return data flow.

</figcaption>

</figure>

Each Fiber node consists of child nodes, sibling nodes, and return nodes. In the top level is the HOST root element which may vary on the used platform. In React DOM it is the element that **ReactDOM.createRoot()** is called with. The root element has the rest of the application as child elements which have sibling and child elements also. This goes on until every element has a Fiber node. Each Fiber node has a return relation to its parent element.

## How Reconciliation with React Fiber Works

On the first render, React will create and initialize two Fiber node trees. **current** tree and **workInProgress** tree. The current tree is a representation of the state that was when the UI was rendered and the workInProgress tree represents the future state of the UI.

Using workInProgress tree prevents React from doing simultaneous changes to the DOM while still diffing other changes further down the tree. The rendering updates are carried out in two steps:

1. Render/Reconciliation

2. Commit

Similarly, as in the re-rendering, but here, we are not interested in the **trigger** step. In the render/reconciliation step, React will build the workInProgress tree and in the commit phase, it will update the DOM accordingly.

### Render or Reconciliation Phase

In the render phase, React handles the new UI updates in a [workLoop](https://github.com/facebook/react/blob/f765f022534958bcf49120bf23bc1aa665e8f651/packages/react-reconciler/src/ReactFiberScheduler.js#L1136). If new UI updates are on the horizon the workLoop will call a function [performUnitOfWork](https://github.com/facebook/react/blob/95a313ec0b957f71798a69d8e83408f40e76765b/packages/react-reconciler/src/ReactFiberScheduler.js#L1056) with the reference of a Fiber node from the workInProgress tree that has “work” to do. After performUnitOfWork has completed the **nextUnitOfWork** variable will contain a reference to the next Fiber node or null. In the case of null, React will move on to the commit phase.

The render phase logic will be something along these lines:

1. In the **workLoop** the **performUnitOfWork** will receive a Fiber node from the **workInProgress** tree.

2. React will start working on the Fiber node by calling [**beginWork**](https://github.com/facebook/react/blob/cbbc2b6c4d0d8519145560bd8183ecde55168b12/packages/react-reconciler/src/ReactFiberBeginWork.js#L1489) function which will work on the Fiber node and return a reference to the next Fiber node or null.

3. In case of a reference to the next Fiber node, the reference will be saved into the variable **nextUnitOfWork** again (step 2) and in case of null (continue to step 4), React will know that it has reached the end of this branch.

4. React will start to process the sibling Fiber nodes by calling the [completeUnitOfWork](https://github.com/facebook/react/blob/95a313ec0b957f71798a69d8e83408f40e76765b/packages/react-reconciler/src/ReactFiberScheduler.js#L879). After every sibling node has been gone through it will go back to the parent Fiber node.

### Commit Phase

When the render/reconciliation phase is done, React has these two different Fiber node trees. The current tree and the updated workInProgress tree.

In the commit phase, React handles a lot of stuff internally like handling lifecycle methods, but in a very short and simplified version the current Fiber tree will be replaced by the workInProgress tree, and the DOM will be updated accordingly by performing DOM operations such as appends and removals.

That’s pretty much it!
