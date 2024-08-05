---
title: 'Essential Semantic HTML'
date: '2023-12-27'
coverImage: 'https://res.cloudinary.com/daty4gssm/image/upload/q_auto,f_auto,w_1024/v1721993818/Feature_image_rkc3hy.webp'
coverImageAttribute: ''
excerpt: 'Semantic HTML is a crucial part of the markup language to get the most default functionality out of HTML. Writing semantic HTML not only makes it more readable, requires less custom logic but also comes with pre-defined accessibility features. There is not a single good reason not to write semantic HTML over non-semantic HTML.'
author:
  name: Henri Remonen
featured: false
ogImage:
  url: 'https://res.cloudinary.com/daty4gssm/image/upload/q_auto,f_auto,w_1024/v1721993818/Feature_image_rkc3hy.webp'
categories:
  - 'accessibility'
  - 'html'
  - 'seo'
keywords:
  - 'accessibility'
  - 'aria'
  - 'contrast'
  - 'css'
  - 'disability'
  - 'dom'
  - 'html'
  - 'non-semantic html'
  - 'screen reader'
  - 'semantic html'
  - 'seo'
  - 'webaim'
---

Alright, alright, alright, you gonna learn today. In this article I will focus on 'Semantic HTML - Elements with Meaning' and why it's crucial for creating an inclusive online experience.

## Semantic HTML - Elements with Meaning

Writing accessible content requires the concise use of correct **HTML tags**. There are a lot of different [HTML tags](https://www.w3schools.com/tags/ref_byfunc.asp) also referred to as **elements**. We divide HTML elements into non-semantic and semantic elements.

<figure>

![Comparison between non-semantic and semantic HTML page layout](https://res.cloudinary.com/daty4gssm/image/upload/q_auto,w_560/v1721993887/Semantic_html_jidkrs.svg 'Semantic-html')

<figcaption>

Comparison between non-semantic and semantic HTML.

</figcaption>

</figure>

**Non-semantic elements** are more like general elements that do not have any specific definition for example `<div>` or `<span>` elements does not provide any semantic information about the content, making it harder for screen readers and search engines to parse the web page. Identifying these elements often requires the use of the **“id”** **attribute** to specify their use case.

**[Semantic HTML elements](https://www.w3schools.com/html/html5_semantic_elements.asp)** are elements that define their contents. These elements describe parts of the webpage such as `<header>`, `<nav>,` `<main>`, `<footer>`, which makes the element’s content to be self-explanatory. Semantic HTML elements can, of course, contain non-semantic elements inside.

While you might fool most of your users by using a `<div>` element as a button with the correct CSS, it is still not quite adequate for the purpose. Using this would not be accessible as screen readers or keyboards could not identify the `<div>` element as a button even though you might have given it `type=”button”` and an **on click handler**. Using a `<button>` element would provide default styling, functionality, and built-in keyboard functionality making button elements accessible using the **Tab** key and activated with the **Space**, **Return**, or **Enter** keys. None of the functionalities would not have been achieved with the `<div>` faux button without custom logic.

## Logical Structure Aids Accessibility

[W3C suggest distinguishing different web page regions](https://www.w3.org/WAI/tutorials/page-structure/regions/) so that browsers and assistive technologies can identify them. These regions use semantic HTML elements as follows:

- **Page Header (`<header>`)** includes the web page’s introductory information, such as logo, site name, and search functionality.

- **Page Footer (`<footer>`)** is like a header element but located on the bottom of a web page. Might include site-wide information such as contact, copyright, privacy policies, or disclaimers.

- **Page Navigation (`<nav>`)** identifies a navigation menu. A single page might have multiple navigation menus which are identified using [labeling regions](https://www.w3.org/WAI/tutorials/page-structure/labels/).

- **Page Main (`<main>`)** identifies the dominant content of the web page inside `<body>` of a document. A web page might only have one `<main>` element declared.

- **Complementary Content (`<aside>`)** includes supporting content for the `<main>` element, such as a table of contents or a sidebar.

Concise regions and well-structured web pages are essential for users with special needs. The same W3C article outlines the following benefits:

- **People with cognitive and learning disabilities** can more easily find and prioritize content on the page.

- **People using screen readers** can skip to the main content directly and navigate to sections that are important to them.

- **Keyboard users** can browse pages and their sections more efficiently. Otherwise, users have to press the tab key multiple times to navigate through all links in each section.

- **People using software that only shows the main content** of a web page, such as people with cognitive disabilities, will receive better results if the page structure is correctly marked up.

- **People with visual impairments**, including people with low vision, have cues that provide orientation on the page and in the content.

- **Mobile web users** often have access to a so-called “reader” or “reading” mode that will only show the main content of the page if it is correctly marked up.

### Headings Define the Outline of a Web Page

Headings outline your web page’s content with a glance. Using the correct heading elements in the correct order not only makes it easier to read but also aids browsers, plug-ins, and assistive technologies to provide in-page navigation for their users. The most important heading should be `<h1>` and a page should not include more than one `<h1>` element.

<figure>

![Demonstration of Incorrect heading structure](https://res.cloudinary.com/daty4gssm/image/upload/q_auto,f_auto,w_560/v1721993829/incorrect_heading_structure_m4hzv4.webp 'incorrect-heading-structure')

<figcaption>

Demonstration of incorrect heading structure.

</figcaption>

</figure>

Skipping headings was one of **[the most common WCAG errors](https://www.hremonen.com/blog/quick-guide-to-digital-accessibility)** with 42 percent of the top million websites failing to implement correct heading indentation. The web page should only “skip” heading ranks when closing subsections.

<figure>

![Demonstration of correct heading structure.](https://res.cloudinary.com/daty4gssm/image/upload/q_auto,f_auto,w_560/v1721993829/correct_heading_structure_r0l07y.webp 'correct-heading-structure')

<figcaption>

Demonstration of correct heading structure.

</figcaption>

</figure>

Headings should not be used to highlight content. If you need to achieve a high visibility for a text, you should use styles to achieve a similar visual effect. Vice versa, if it is a heading, do not use `<p>` and style it to look like a heading. Use an appropriate heading rank. In the demonstrations above we can see clearly how the correct use of heading ranks makes the web site's structure clear.

## Other Benefits of Semantic HTML

Semantic HTML ensures the use of the correct HTML elements, as they are indented as much as possible. Semantic HTML is not hard to write, it requires knowledge of available elements though and a bit of planning to get it right. Using the correct elements for their intended purposes also bears greater benefits from more accessible content.

**Understandable and maintainable codebases** – Using the right elements for the task makes it easier to understand what you are trying to do. Consider the mentioned situation where someone would have used a `<div>` element as a button. Someone reading the code would not know just by glancing at the element that the div is indeed a button. Using a `<div>` element as a button would need custom on click logic, which increases the complexity.

**SEO benefits** – Search engines will scrape your `<header>`, `<nav>`, `<main>`, `<footer>`, `<h1>`, …, `<h6>`, `<a>`, etc. Using semantic elements, you ensure that the search engines will parse your site correctly and be able to associate relevant content together in the search results. In the video **[Does semantic HTML help Search identify and evaluate content?](https://www.youtube.com/watch?v=5HtRKM4ILGc&ab_channel=GoogleSearchCentral)** John Mueller from Google clarifies that _“Yes, semantic HTML does help to understand a page.”_ and relieves _“However, it is not a magical multiplier for making a website rank higher.”_ So semantic HTML is not a secret SEO sauce, it is rather a way for search engines to visualize the important bits of your content.

## Conclusion

Do not settle for `<div>` to be your only option. Check if there is a more specific semantic element that would

- have the correct functionality out of the box.

- make your web page more structured.

Do not mix structure and style. We know that everyone is implementing large texts on every page nowadays, but that does not mean that they are using `<h1>` element when a `<p>` element would be sufficient. The same goes for buttons. Do not use `<div>` as buttons even though you could with a bit of extra work, but for what benefit? Learn to use class name attributes and **CSS** for what they are implemented. Do not patch your lack of competence with incorrect HTML elements, which leads to spaghetti code and horrendous user experience.

Aim for a clear, structured, and semantic design that will not only help your users navigate, better SEO accuracy, and keep your developer and user experience high.
