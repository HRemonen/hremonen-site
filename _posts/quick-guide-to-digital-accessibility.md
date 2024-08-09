---
title: 'A Quick Guide to Digital Accessibility - Navigating the Digital Landscape'
date: '2023-12-22'
coverImageId: '/v1721913644/Navigating_the_Digital_Landscape_yzlaef.webp'
coverImageAttribute: ''
excerpt: 'Have you ever wondered what digital accessibility really means? When I first heard the term, I was somewhat unsure of what it entailed. However, as I delved deeper into the subject, I realized that accessibility is all about creating an inclusive experience for everyone, regardless of their abilities. It goes beyond just catering to those with disabilities, ensuring that all users have equal access to the same information and functionality. So why not take a closer look and learn more about how we can make the digital world more accessible for everyone?'
author:
  name: Henri Remonen
featured: false
ogImage:
  url: 'https://res.cloudinary.com/daty4gssm/image/upload/q_auto,f_auto,w_1024/v1721913644/Navigating_the_Digital_Landscape_yzlaef.webp'
categories:
  - 'accessibility'
  - 'wcag'
keywords:
  - 'accessibility'
  - 'aria'
  - 'contrast'
  - 'disability'
  - 'dom'
  - 'html'
  - 'screen reader'
  - 'w3c'
  - 'wcag'
  - 'wcag guidelines'
  - 'web content accessibility guidelines'
  - 'webaim'
  - 'webaim million'
---

## Digital Accessibility: Bridging the Gap for All Users

Expanding on the idea that accessibility goes beyond catering to mobility-impaired individuals, it’s crucial to recognize that disabilities manifest in diverse forms extending to people without permanent disabilities, encompassing a spectrum of challenges that users may encounter. Digital accessibility ensures inclusive digital design for everyone. Inclusivity means that there are no barriers preventing individuals from accessing functionality, information, or experience on digital platforms.

Digital accessibility should be of high priority for people or organisations that want to develop high-quality and highly adopted web services, and not exclude people from using their product. [United Nations Convention on the Rights of Persons with Disabilities](https://social.desa.un.org/issues/disability/crpd/convention-on-the-rights-of-persons-with-disabilities-crpd) defines access to the web as a basic human right.

## Identifying Accessible Digital Services: A Dive into WCAG Compliance

[Many aspects of accessibility is fairly easy to implement](https://www.w3.org/WAI/fundamentals/accessibility-intro/#making). The best way to implement accessible services is to take accessibility into account from the very beginning of the development process, so you don't have to go back and do the same work again.

[Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG21/) (WCAG) is a set of guidelines and standards developed to ensure that digital content is accessible to individuals with disabilities. These guidelines are crucial for creating inclusive online experiences, enabling people with diverse abilities to navigate and interact with digital services seamlessly. The guidelines are intended to be used as a combination of automated tests and human assessment by web designers and application developers, among others.

WCAG is managed by the [Web Accessibility Initiative](https://www.w3.org/WAI/) (WAI), which is part of the [World Wide Web Consortium](https://www.w3.org/) (W3C). The W3C is an international community that develops web standards to ensure the long-term growth of the World Wide Web. WAI, specifically, focuses on promoting web accessibility for people with disabilities.

At the top level of the WCAG are the principles. The WCAG identify four guideline principles, often referred to as POUR: Perceivable, Operable, Understandable and Robust. Below these are general guidelines and testable success criteria that define three levels: A (lowest), AA and AAA (highest), with many countries' [governmental policies](https://www.w3.org/WAI/policies/) based on level AA. The guidelines also provide a collection of adequate techniques and advisory techniques as well as documented typical errors.

<figure>

![Web Content Accessibility Guidelines 2.2 hierarchy.](https://res.cloudinary.com/daty4gssm/image/upload/q_auto,f_auto,w_560/v1721913655/Web_Content_Accessibility_Guidelines_hierarchy_sddrbk.webp 'Web-Content-Accessibility-Guidelines-hierarchy')

<figcaption>

Hierarchy of the WCAG 2.2

</figcaption>

</figure>

The primary goal of WCAG is to provide a comprehensive and universal framework for web developers, designers, and content creators to make their websites and web applications more accessible. It addresses a wide range of disabilities, including visual, auditory, cognitive, and motor impairments.

The WCAG principles cover the following aspects:

### [Perceivable](https://www.w3.org/WAI/WCAG22/quickref/#principle1)

The Perceivable principle focuses on making information and user interface components accessible to all users. This involves providing alternatives for non-text content, such as images and multimedia, to ensure that individuals who may not perceive such content visually can still understand and interact with it.

The perceivable principle emphasizes that we should create adaptable content that can be presented in various ways, accommodating different user preferences and needs. Techniques include using descriptive text for images, providing captions for videos, and ensuring a clear and adaptable presentation of information.

Providing sufficient color contrast, relevant hover and focus actions, ensuring that text is resizable without loss of content or functionality, and avoiding content that could be hard to interact with or receive are key considerations in implementing the Perceivable principle.

### [Operable](https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=241%2C242#principle2)

The Operable principle addresses the usability and navigability of web content. It emphasizes that all users, including those with disabilities, should be able to interact with and navigate through the content. This involves making sure that all functionality is available but not limited to a keyboard, allowing users to navigate and interact without time constraints, and avoiding design elements that could cause physical discomfort or seizures.

Keyboard accessibility, consistent navigation, and providing users with enough time to read and complete tasks are key considerations in implementing the Operable principle.

### [Understandable](https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=241%2C242#principle3)

The Understandable principle focuses on ensuring that information and operation of the user interface are clear and comprehensible to all users. This involves making text readable and understandable, providing input assistance to prevent and correct errors, and designing consistent and predictable navigation and functionality. The goal is to create a user experience that is intuitive and straightforward, reducing the likelihood of confusion or misinterpretation.

Techniques include using plain language, offering error prevention and correction mechanisms, providing predictable functionalities, and maintaining a consistent design throughout the website or application.

### [Robust](https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=241%2C242#principle4)

The Robust principle addresses the need for web content to be robust and compatible with a wide range of technologies, including current and future assistive technologies. This involves using valid and well-formed code, ensuring compatibility with various browsers and platforms, and designing with an eye toward long-term sustainability.

By adhering to the Robust principle, web developers can future-proof their content and contribute to a more inclusive digital environment, where users can access information using a diverse set of tools and technologies.

## How is Accessibility Evaluated

[Accessibility evaluation](https://www.w3.org/WAI/test-evaluate/) aims to ensure that an online service is accessible to all users. Evaluation early in the development process and throughout the development process is important to ensure that accessibility guidelines are properly addressed. With early and ongoing evaluation, accessibility problems can be identified quickly, making them easier to address and problems easier to fix.

Automated evaluation tools help in accessibility testing. However, these tools alone cannot determine whether the tested website meets the required accessibility criteria. Accessibility is therefore assessed in a variety of ways, including user evaluation, expert review and compliance testing.

Automated evaluation tools analyse the source code of a web service and compare it with the success criteria of web content accessibility guidelines. However, this method cannot identify all accessibility problems, but nevertheless provides a good starting point for a more detailed evaluation.

There are many automated evaluation tools, at the time of writing the [W3C lists 166 tools](https://www.w3.org/WAI/ER/tools//index.html) that can be used to investigate the accessibility of a web service. One of these is the [WAVE tool](https://wave.webaim.org/) developed by [WebAIM](https://webaim.org/), which is available directly from the WebAIM website, as a browser extension or through a programming interface for a fee.

Automated evaluation tools provide a repeatable testing environment, however, the best results are achieved by manual testing with the right users. User evaluation usually focuses on usability tests, asking participants to to perform various functions on a web service. The evaluators monitor the behaviour of the participants and their interaction with the service, and can then summarise the results. However, user evaluation is not easy and is often slow and expensive.

Expert reviews are carried out manually to check whether the online service meets a set of success criteria. Manual verification also includes screening techniques, where a website is used in a way that artificially degrades certain capabilities. The use of manual screening techniques is convenient throughout the design process, as they can be used to identify potential design problems early on.

## Common Shortcomings in Digital Accessibility: Lessons from the WebAIM Million Report

[The WebAIM Million](https://webaim.org/projects/million/) project gathers accessibility information from the top million web pages every year and creates statistics about the shortcomings, over 96 percent of the tested web pages have automatically detected WCAG 2 errors.

### The Shortcomings

- Home page complexity has grown over the years, and the more complex the web page, the more WCAG errors it has.

- Low contrast text for over 80 percent of the web pages and, on average, every page had 30 distinct instances of low contrast text.

- The most common issues included missing form labels, empty alternative text, or link values. Every tenth image had unhelpful, repetitive alternative text. Every third form input was not properly labeled.

- 42 percent of the pages failed to implement correct HTML heading indentation skipping heading levels.

- Pages with ARIA averaged more errors than those without.

- Government, social media, education, and health averaged better results. Adult content is the worst and shopping coming in at the 3rd last.

## The Accessibility Paradox: Breaking a Barrier of Misconceptions

The study conducted in ["Implementing Recommendations From Web Accessibility Guidelines: Would They Also Provide Benefits to Nondisabled Users"](https://journals.sagepub.com/doi/abs/10.1177/0018720816640962) concluded that WCAG is rarely implemented in practice. This is partly due to the belief that the guidelines are not beneficial for the existing customer base.

How could the existing user base consist of people with disabilities if the service is not accessible to them? I don’t entirely condemn not focusing on accessibility. I am sure that there are services that people with disabilities would hardly use, which is why investing in accessibility would not necessarily bring new customers, however there are benefits beyond attracting new customers to accessibility.

This will also be covered in a later to come article about the "side effects" of accessibility.

### Benefits of Adoption

The article concluded also that a high level of accessibility led to better performance and improved user ratings, providing benefits to users without disabilities. Implementing accessible design not only makes the website accessible to those with disabilities but also results in better user experience and customer satisfaction for the existing users, making the code more maintainable and readable for future development.

[WHO estimates that 1.3 billion](https://www.who.int/news-room/fact-sheets/detail/disability-and-health) people experience significant disability leading to a [global estimate of the disability market is nearly $7 trillion](https://www.w3.org/WAI/business-case/). Benefits beyond extended market reach includes driving innovation, enhancing existing brand, and minimising legal risk.
