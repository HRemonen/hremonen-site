---
title: 'ARIA: What Every Developer Needs to Know'
date: '2024-02-07'
coverImage: ''
coverImageAttribute: ''
excerpt: ''
author:
  name: Henri Remonen
featured: false
ogImage:
  url: ''
categories:
  - 'accessibility'
  - 'aria'
  - 'semantic html'
keywords:
  - 'accessibility'
  - 'aria'
  - 'dom'
  - 'html'
  - 'semantic html'
  - 'wai aria'
  - 'wcag'
---

WAI-ARIA is an abbreviation of the Web Accessibility Initiative’s Accessible Rich Internet Applications specification. Often, we refer to this long text as just ARIA.

Today’s web pages are building advanced Web applications using [dynamic content](https://en.wikipedia.org/wiki/Dynamic_web_page). These often require custom logic to be built that is not available as a [semantic HTML](https://www.incluvate.com/blog/what-is-semantic-html/) element. Without ARIA, these custom elements are not accessible to some users with disabilities. Especially users using screen readers or only a keyboard.

## When Do We Need ARIA?

[Assistive technologies](https://www.w3.org/TR/wai-aria-1.2/#dfn-assistive-technology) can transform the presentation of the web page into a more suitable format for the user, allowing the user to interact with the web page in different ways. The assistive technologies must understand the underlying semantics to provide this possibility to the user.

[Semantics](https://www.w3.org/TR/wai-aria-1.2/#dfn-semantics) are a set of assigned [roles](https://www.w3.org/TR/wai-aria-1.2/#dfn-role), [states](https://www.w3.org/TR/wai-aria-1.2/#dfn-state), and [properties](https://www.w3.org/TR/wai-aria-1.2/#dfn-property) of the user interface and content elements. These semantics allow the assistive technologies to interact with a piece or a single element of the web page separable from the rest of the content.

[W3C states](https://www.w3.org/TR/wai-aria-1.2/#usage) that ARIA is needed when assistive technologies cannot determine the semantics of a web page or when the use cannot effectively navigate to all parts of the web page.

Consider the following [tree widged example](https://www.w3.org/TR/wai-aria-1.2/#intro_ria_accessibility). The web page has a collapsible tree widget even though there is no semantic HTML element `<tree>`. Non-disabled user will perceive a tree and it functions as one, but for a disabled user, the widget is not operable or perceivable if it does not provide semantics.

ARIA allows to incorporate the needed semantics for custom made widgets to make them accessible, usable, and recognizable by the assistive technologies.

## ARIA Comes with Rules

Before we jump any further, it is crucial to identify some ground rules.

When building these dynamic applications, we should not just be relying on ARIA. This will lead to an accessible mess and just bloat our assistive technology users with possibly redundant information. As we mentioned in our last post **no ARIA is better than bad ARIA.** To minimize the misuse [W3C has specified a set of rules for using ARIA](https://www.w3.org/TR/using-aria/#NOTES):

- Use semantic HTML elements with the semantics and behavior you need instead of re-purposing a non-semantic element and adding ARIA role, state, or property to make it accessible.

- Never change the native semantics unless you really must. It would be wise to seek for proper semantic HTML element rather than creating a `<h2>` element with a `role=”button”` and other semantics and behavior.

- All interactive ARIA controls must be usable with a keyboard. If users can interact and navigate a widget using a mouse, then you must provide an equivalent action using the keyboard.

- Never use `role=”presentation”` or `aria-hidden=”true”` on focusable elements. For example, if you have an image that functions as a button. Using aria-hidden would hide the element for accessible technologies but still it would be focusable. Hidden element must not receive focus.

- All interactive elements must have an accessible name. For example, input element must have an accessible name. This can be provided by using the input <label> element correctly, or by giving the `<input>` element an aria-label property.

## How ARIA Enhances Accessibility in Web Applications

ARIA can be thought as a framework for HTML. It is used for adding attributes that enhance the ability to identify features for user interaction, their relationship, and the current state. ARIA describes navigation techniques to mark regions and common web page structures such as menus, content, banners. enabling keyboard users to easily navigate among these regions.

When considering the usage of ARIA attributes, it is paramount to keep in mind the rules of ARIA.

### Supercharging HTML with ARIA

The ARIA defines additional [HTML attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes) that supercharge the native HTML. These attributes apply to elements for additional semantics and improved accessibility. There are three main “categories” for these attributes: roles, states, and properties.

#### **Roles**

The [role attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles) is set on an HTML element to define its function or identity. Providing explicit role aids assistive technologies to identify what the element is and how to handle it. Assistive technologies can present and support interaction with the element of the same role consistently across applications.

[A role is a promise](https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/#principle-1-a-role-is-a-promise). You promise to the user that by specifying a certain role, you also ship it with the corresponding expected functionality. I cannot say “hey this `<div>` is a button” with just adding `role=”button”` to it.

```
<div role="button">Do buttony stuff</div>
```

HTML

Now you have made the user expect it to do buttony stuff, but it does no such thing.

#### **States and Properties**

Often, states and properties are referred as the same. They are maintained distinct to clarify subtle differences.

States refer to properties that are subject to change often because of user interaction such as `aria-checked`.

However, properties such as `aria-labelledby` are less likely to change throughout the applications lifecycle than the values of states. There are some properties that are subject to change often, such as `aria-valuetext.`

The example shows how these can create an accessible accordion widget using HTML and ARIA.

```
<div id="accordion1" class="accordion">
  <h2>
    <button
      type="button"
      aria-expanded="true"
      aria-controls="accordion1body"
      id="accordion1title">
      <span class="accordion-title">
        How to get started with ARIA
      </span>
    </button>
  </h2>
  <div
    id="accordion1body"
    role="region"
    aria-labelledby="accordion1title"
    class="accordion-body"
  >
    <div>
    	{...}
    </div>
  </div>
</div>
```

HTML

Here the aria-expanded is the state of the accordion that is true or false depending on whether the accordion body is expanded. This is the state of the accordion. There could also be another state: aria-hidden that would also show if the element were visible, but the aria-expanded does the job.

The body section is labelled by some other element group, and thus it has the aria-labelledby property. This references the element that expands and collapses the body region.

## How ARIA is Connected to the Accessibility Tree

[We peeked at the accessibility tree](https://www.incluvate.com/blog/start-fostering-the-accessibility-tree/) in the previous blog post, and it is the structure that is affected by these attributes.

As the first rule of ARIA states, use semantic HTML elements when possible. However, sometimes there is a barrier as we saw with the accordion and tree widgets – there is no semantic HTML element that provides this functionality.

ARIA attributes affect the information (accessibility tree) that is exposed to the accessibility APIs by giving the name, role, state, and properties to make the needed accessible objects.

By providing ARIA, we must also fulfill the expected behavior using JavaScript and CSS, because ARIA does not cause browsers to provide the needed keyboard behavior or styling.

### Hiding Content from the Accessibility Tree

Hiding content from the accessibility tree is also possible with using ARIA. Similar to how we would visually hide information using CSS using [visibility: hidden or display: none](https://www.freecodecamp.org/news/css-display-none-and-visibility-hidden-the-difference/).

```
.visibility-hidden {
  visibility: hidden;
}

.display-none {
  display: none;
}
```

CSS

ARIA provides aria-hidden attribute which signals whether the element should be rendered into the accessibility tree.

Aria-hidden should not be used in the following scenarios:

- The HTML [hidden attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden) is added.

- The element or any of the element’s parent is hidden with `display: none` **OR** `visibility: hidden`.

In these scenarios, aria-hidden is redundant as these also removes the element from the accessibility tree. Use aria-hidden only when you want to hide elements for assistive technology but elements that must be visible for normal users.

Usually `aria-hidden=”true”` is used when hiding things like decorative, repeated, or offscreen content. For example, if we have an icon button somewhere in our code.

```
<button>
  <svg aria-hidden="true" tabIndex={-1}>
    <!-- svg content here -->
  </svg>
  Do buttony stuff
</button>
```

HTML

We might add the `aria-hidden=”true”` because often the icon is decorative. When hiding elements that might receive focus, it is paramount to also block the element from receiving focus using negative tab index. Hidden elements are not announced upon focus which could cause confusion for assistive technology users.

Dealing with SVGs has its own quirks. I will not go into deep tour how to make your SVGs accessible in this article, however I plan to write about it in the future.
