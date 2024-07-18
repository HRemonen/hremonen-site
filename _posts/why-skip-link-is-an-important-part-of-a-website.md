---
title: 'Why Skip Link is an Important Part of a Website'
date: '2024-03-13'
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
  - 'wcag'
keywords:
  - 'accessibility'
  - 'skip link'
  - 'skip link a11y'
  - 'skip link accessibility'
  - 'skip link best practices'
  - 'skip link html'
  - 'wcag'
---

When you are using a mouse, you don’t think about getting to the main content. You can dive straight into it by scrolling. However, have you ever used a website with only a keyboard? It’s true that you can scroll through the webpage using arrow keys using the keyboard. But if you’d like to interact with any interactive elements, you need to get the focus on to that element.

That’s when you typically have to use the tab key in order to navigate different focusable elements. Taking an example of [Firefox’s Accessibility features support page](https://support.mozilla.org/en-US/kb/accessibility-features-firefox#main-content), if the page would not provide a skip-link, it would take the user 16 tab steps to get to the first link inside the table of contents. Exhaustive!

![Mozilla support page](images/mozilla-support-page.png 'mozilla-support-page')

So there must be a better solution to this, right? Absolute, and thankfully there is. It is called the skip link!

## The Skip Link

A skip link is a navigational link that is usually hidden until it receives the focus. The skip link should provide a way for the users to skip the navigational elements to get to the main content of the web page. Usually skip links are a blessing in navigational heavy applications. These applications often require tabbing multiple times to get to the main content. Which might be exhaustive to the users.

Revising our earlier example of the Mozilla Firefox support page. The page actually provided a way to skip the navigational elements. The _“Skip to main content”_ is a link that takes the user to whatever section of the page that is defined by the developers.

![Mozilla support Web page with the skip link navigation visible](images/Skip-link-visible.png 'Skip-link-visible')

In this example, the skip link takes us to the first element of the breadcrumbs navigation. Actually, this is a kind of disappointment for me, because this saved us a whopping four key presses.

![After the skip link the user is taken to the start of the breadcrumb navigation](images/After-skip-link-1024x67.png 'After-skip-link')

It would have been better to take the user straight to the start of the article. Now there are still the breadcrumbs, the aside (search, search button, Firefox checkbox, Version selector, OS selector, “Was this article helpful” ratings) and the Firefox logo to tab through before the title. Anyway, back to the bread (pun intended) for now.

Remember that [assistive technologies mimic the usage of keyboard navigation](https://www.incluvate.com/blog/what-is-keyboard-accessibility/#why-is-keyboard-accessibility-important)? Even pressing down the tab key for 16 times hurt my hand. Imagine what’s it like for users using their head to tap on a switch or a stick in their mouth to press keys to do the same thing. That would be excruciating.

## What Makes a Good Skip Link

The skip link element should be the first element inside the **<body>** before any navigational elements whatsoever. This way it is the first interaction a user gets with the page and will not be missed.

Skip link text should show the purpose, be concise, and state the action of what it does. Not what it skips. There are many texts that are sufficient, but I would prefer the widely used _“Skip to main content”_.

While one skip link might be good enough, there are still websites (such as the Mozilla Firefox support pages) that provide multiple skip links. For example, our Mozilla example also provides links to language selection and skip to the search. However, as with anything, not overdoing things is the best way. Skip links should provide an efficient way of getting somewhere. It won’t be efficient when you have 10 different skip links.

### About Breadcrumbs

Back to my rant about the Mozilla page example. Should skip links also skip the breadcrumbs?

Definitely.

Let’s take the following statement from the Web Content Accessibility Guidelines [technique G1](https://www.w3.org/WAI/WCAG22/Techniques/general/G1):

> “The objective of this technique is to provide a mechanism to bypass blocks of material that are repeated on multiple Web pages by skipping directly to the main content of the Web page.”

Hmm. Skip over material that is repeated on multiple Web pages. Okay interesting, let’s go further.

> “A Web page includes a variety of navigation techniques on each page: a breadcrumb trail, a search tool, a site map, and a list of related resources. The first link on the page is titled "Skip to Main Content". A user activates the link to skip over the navigation tools.”

The guidelines are self-explanatory, if the navigational elements are repeated on every page, then the skip link should skip those elements. And I couldn’t agree more. It becomes tedious to go over the breadcrumbs and aside content on every single page.

## Should Skip Link be Visible

There really isn’t any universal guideline to this. You might either always leave the link visible or it to be visible when receiving focus. It is paramount not to hide the link completely by using CSS **display: none** or the **visibility:** **hidden** attributes, as they will remove the link from keyboard navigation. Generally, I suggest styling the link as accessible as possible so that it serves its purpose adequately.

Visible skip links are the most obvious. They must also be the first element inside the **<body>** element, like every other skip link element. Temporarily hiding skip links is a widely adopted method. The skip link becomes visible on keyboard focus and otherwise, is hidden using CSS. This way it would be good to style the skip link so that it really grabs the users’ attention so that users’ navigating does not miss the link.

Whatever the selected implementation method is, it is paramount to check and verify the following functionality:

- Skip link should be accessible (keyboard focusable, sufficient color contrast etc.

- Skip link should be visible on focus at least

- When the skip link is activated, the focus is moved to the main content area

## Implementing Skip Link in HTML

From our findings above, the skip link just consists of two elements. The link and the content to skip to.

The content to skip to is usually the **<main>** element. However, depending on your sites structure and other elements such as the breadcrumbs etc., you might want to skip to a more specific section of your page.

First, we must distinguish the section we want to skip to. This is done by giving the **id** attribute to the element.

```
// This does not have to be <main>, it can be any element that you want to skip to
<main id="main-content">
  // ...
</main>
```

JSX

Secondly, create the link to that specific element. The link should be a anchor tag **<a>** with a **href** attribute. The **href** attribute is going to point to the **id** that we gave our element.

```
<body>
  <a href="#main-content">Skip to main content</a>
  // Rest of the page such as navigation, header, main, footer, etc.
</body>
```

JSX

Here we see that the link is the first element in the **<body>**. That’s it, now the **<a>** element could be styled as pleased, keeping an eye on the rules we discussed.