---
title: 'React 19 - What to Expect?'
date: '2024-03-06'
coverImageId: 'https://res.cloudinary.com/daty4gssm/image/upload/q_auto,f_auto,w_1024/v1721915240/React_19_-_What_to_Expect_ht5ryx.webp'
coverImageAttribute: ''
excerpt: 'The latest version of React is just around the corner and we can expect it to be released later this year. Some of the exciting features that we can look forward to are React Forget, server actions, new hooks, and error boundaries. Keep an eye out for the launch and be prepared to take advantage of these new features!'
author:
  name: Henri Remonen
featured: false
ogImage:
  url: 'https://res.cloudinary.com/daty4gssm/image/upload/q_auto,f_auto,w_1024/v1721915240/React_19_-_What_to_Expect_ht5ryx.webp'
categories:
  - 'react'
keywords:
  - 'react'
  - 'react 19'
  - 'react compiler'
  - 'react forget'
  - 'react server actions'
  - 'react use hook'
---

React 18 has been around for two years now and everyone is waiting for the next major version to drop – React 19. A while ago, the React labs team made an update on developing the new major version, which eased the waiting a little. React 19 is coming™.

One of the React maintainers, Andrew Clark, [tweeted](https://twitter.com/acdlite/status/1758229889595977824):

“By the end of 2024, you’ll likely never need these APIs again”:

- useMemo, useCallback, memo → React Compiler

- forwardRef → ref is a prop

- React.lazy → RSC, promise-as-child

- useContext → use(Context)

- throw promise → use(promise)

- `<Context.Provider>` → `<Context>`

While some of these listed are semantic changes, there is still a lot of exciting stuff going on. This post will not cover every change incoming, but some changes I look forward to.

## React 19 Compiler - React Forget

React Compiler – also known as the React Forget which optimizes [re-rendering](https://www.hremonen.com/blog/how-react-re-renders) through auto-generating the equivalent of **memo**, **useMemo** and **useCallback** calls. You might be wondering why is this important? Well, now if you must use memorization in React, it can become a hot mess quickly. You must use the **memo**, **useMemo** and **useCallback** to optimize the application. There is a mental overhead to this. You must specifically specify and update the dependencies for the hooks, which may become harder to maintain further in the development.

The old hooks present challenges, such as code clutter, potential errors, and ongoing maintenance efforts. To address these issues, the team developed the React Compiler, aiming to optimize UI re-renders based on state changes while maintaining React’s fundamental principles. This compiler understands both JavaScript’s loose nature and React’s specific rules, like component idem potence and non-mutability of props and state.

<figure>

<iframe width="560" height="315" src="https://www.youtube.com/embed/lGEMwh32soc?si=iewjdcS3Es9_13B4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<figcaption>

React Conf 2021 - Reach Without Memo

</figcaption>

</figure>

The React Compiler project has transitioned from a research phase to a production tool, currently powering instagram.com within Meta. The team is now focused on extending its use in more Meta platforms and preparing for its first open-source release. Yay!

## React Server Actions

Server actions try to implement a proper built-in primitive for the client to send the data to the server. Actions enable to pass a function as props to a `<form>` element which will then be called on submit. The action prop can operate synchronously or asynchronously and can be defined on the client’s side. Actions can be defined on both the client and server sides. React manages the lifecycle of data submission when using actions, providing hooks like [useFormStatus](https://react.dev/reference/react-dom/hooks/useFormStatus) and [useFormState](https://react.dev/reference/react-dom/hooks/useFormState).

By default, actions are submitted within a transition, maintaining interactivity during processing. Async functions are supported, allowing for the use of async/await in transitions to show pending UI while async requests like fetch occur.

A feature called [useOptimistic](https://react.dev/reference/react/useOptimistic) is introduced for managing optimistic state updates, enabling temporary updates that revert upon final state commits.

I like to think about the actions of doing at least some of the job that I have been doing with [TanStack React Query](https://tanstack.com/query/latest) and [React Hook Form](https://react-hook-form.com/) libraries. However, these libraries are doing more than that, so we will see where this is going.

### Getting the Form Status with useFormStatus

The new hook `useFormStatus` is used to get the status of the last form submission. It returns status information for a parent `<form>` and not for any `<form>` rendered in the same component calling the hook or child components.

```jsx
const { pending, data, method, action } = useFormStatus()
```

The hook will return a JavaScript object with the following four properties:

1. **pending**: A boolean value of the submission status of the parent `<form>` element.

2. **data**:JavaScript object that contains the data the parent `<form>` is submitting.

3. **method**: a string of the used HTTP method. The method can be **‘get’** or **‘post’**, by default it is **‘get’**.

4. **action**: A reference to the action function passed as props to the parent `<form>`.

The component using this hook must be within a `<form>` element.

```jsx {14-16}
import { useFormStatus } from 'react-dom'

const Submit = () => {
  const { pending } = useFormStatus()

  return (
    <button type='submit' disabled={pending}>
      {pending ? 'Submitting' : 'Submit'}
    </button>
  )
}

const Form = ({ action }) => (
  <form action={action}>
    <Submit />
  </form>
)
```

The following will not work.

```jsx /<Submit />/
const Form = ({ action }) => (
  <form action={action}>
    ...
  </form>

  <Submit /> // Does not work
)
```

### Updating Form State with useFormState

The hook `useFormState` let’s you update state based on the result of a form action.

```jsx
const [state, formAction] = useFormState(fn, initialState, permalink?)
```

Passing useFormState an existing form action function and an initial state will return a new form action to use in the form. The latest form state gets also passed into the function that is provided on the declaration.

The hook returns an array of two items:

1. The current state of the form, which is the **initialState** before form submission and the return value of the provided **action** after submission.

2. The new **formAction** that can be passed as the **action** prop forward.

```jsx
import { useFormState } from 'react-dom'

const Form = ({ action }) => {
  const [state, formAction] = useFormState(action, null)

  return (
    <form action={formAction}>
      <Submit />
    </form>
  )
}
```

When the **form** is submitted, the **action** function is called. The returned **formAction** will become the **current state** of the form.

## Introducing the New Hook

A new hook, [use(resource)](https://react.dev/reference/react/use) is coming. This hook differs from the traditional [React rules of hooks](https://react.dev/warnings/invalid-hook-call-warning). It may be called conditionally and from inside loops, however, the function calling must still be a hook or a component like traditional React hooks.

This hook allows us to read [context](https://react.dev/learn/passing-data-deeply-with-context) or [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) values. In server components you can use **async/await** normally, such as in fetching data from the database. In client you cannot do that, that is why the `use()` hook is implemented, it allows await in the client components.

### Reading Context with use(context)

As previously we have read the value of a context with the hook [useContext()](https://react.dev/reference/react/useContext) we can now read it with the `use(context)` hook.

```jsx
// Old way of doing this

import { useContext } from 'react'

const Form = () => {
  const values = useContext(FormContext)
  // …
}
```

```jsx
// New way of doing this

import { use } from 'react'

const Form = () => {
  const values = use(FormContext)
  // …
}
```

Nothing special, the syntax has changed. Except that the `use(context)`, remember, can be used in loops or conditionally. It provides more flexibility. Using the new hook, React will search the component tree and find the closest context provider above the component that calls it.

### Suspending on the Client with use(promise)

The new `use(promise)` allows suspending on the client. Passing a promise to the hook will suspend on it until the promise resolves.

```jsx
import { use } from 'react'

const Table = ({ tableDataPromise }) => {
  const tableContent = use(tableDataPromise)
  // ...
}
```

The hook also allows for a client component to read the promise that was created by a server component.

```jsx
'use server'

const TableContainer = () => {
  const tableDataPromise = fetchTableData()

  return <Table tableDataPromise={tableDataPromise} />
}
```

When passing a Promise from server to client, its resolved values must be serializable.

Why not just resolve on the server? Well, resolving Promises in server components are blocking until the Promise is resolved. Passing the Promise to client component prevents the Promise from blocking rendering the server component.

As the component calling `use(promise)` (our `<Table />`) _suspends_ while the Promise is pending, it can be wrapped inside the React [Suspense](https://react.dev/reference/react/Suspense) element. Suspense lets you display a fallback until the children element has finished loading. For example, you could display a loading skeleton.

```jsx
'use server'

import { Suspense } from 'react'

const TableContainer = () => {
  const tableDataPromise = fetchTableData()

  return (
    <Suspense fallback={<TableSkeleton />}>
      <Table tableDataPromise={tableDataPromise} />
    </Suspense>
  )
}
```

### Dealing with Rejected Promises

Rejected Promises can be handled in two fashions using the `use(promise)` hook:

1. Using an error boundary

2. Using the Promise.catch

You cannot use the hook inside try-catch block. If you wish to display an error to the users when the Promise is rejected, an [ErrorBoundary](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary) element can be used.

```jsx
'use server'

import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

const TableContainer = () => {
  const tableDataPromise = fetchTableData()

  return (
    <ErrorBoundary fallback={<TableError />}>
      <Suspense fallback={<TableSkeleton />}>
        <Table tableDataPromise={tableDataPromise} />
      </Suspense>
    </ErrorBoundary>
  )
}
```

React does not have a batteries included ErrorBoundary component, which is why a third party solution was used here.

## Are We Going to the Refactor City?

Probably not. React has been notoriously good with keeping the major updates backward compatible. You can even take your ancient React code with class components etc. and copy and paste it into a Next.js project and probably it would work as intended. Also in the React Compiler part of the [latest update](https://react.dev/blog/2024/02/15/react-labs-what-we-have-been-working-on-february-2024), they explicitly told that the new compiler is designed to opt-out from the compilation if it’s not safe to compile.

So no, I would not stress about refactor city.
