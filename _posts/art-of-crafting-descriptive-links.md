---
title: 'Art of Crafting Descriptive Links'
date: '2024-01-17'
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
  - 'html'
keywords:
  - 'accessible href'
  - 'accessible links'
  - 'accessible links-alt-text'
  - 'accessible links-wcag'
  - 'descriptive links'
  - 'href accessibility'
  - 'html accessible links'
  - 'hypertext links'
  - 'information scent'
---

## **Why Do We Need Descriptive Links?**

Links are a way of navigating through the web. Providing descriptive links not only makes the user experience better but also gives more context on what to expect from the destination page.

### **Information Scent**

[Nielsen Norman Group](https://www.nngroup.com/about/) wrote an article about [information scent](https://www.nngroup.com/articles/information-scent/), which concluded that users navigate links based on the link label, the context in which the link is shown, and their personal prior experiences.

In information scent, the link label is the most important component. The link label should provide the most accurate and succinct description of the destination page. Giving a relevant link label for the user’s goal will lead to a high probability of the user navigating the link.

### \***\*Descriptive Links Are Accessible\*\***

Let’s look at the following code:

```
<p>
    Look at the WCAG 2.2 quick reference
    <a href="https://www.w3.org/WAI/WCAG22/">here</a>
    .
</p>
```

HTML

Now, the readability is suboptimal for all users. The link text does not provide any additional or useful information about the destination page. Yes, we’re able to infer the destination page’s content from the surrounding text. Despite that, it is tedious.

Keyboard users navigating the web page must read the whole paragraph surrounding the link to gain context where the link is heading.

Screen reader users might navigate the page using the links. It does not help to pull out the link list and find links with these ambiguous texts. Like the keyboard user, the screen reader user needs to read the surrounding paragraph to gain context.

While the link itself is accessible, you can focus and tab on it. That’s not all that it takes. The link does not leave information scent for the user, certainly; it is not perceivable or operable by individuals with disabilities. We can say that the link is not accessible.

I will add the following YouTube video from **Portland Community College** where **Mario Eiland** discuss why you should use descriptive links.

<figure>

https://www.youtube.com/watch?v=9rgI-kLvelc&ab\_channel=PortlandCommunityCollege

<figcaption>

Why Use Descriptive Links? - Portland Community College.

</figcaption>

</figure>

## **What Makes a Link Accessible**

Accessible links are easily perceivable and operable by individuals. By following [semantic HTML](https://www.incluvate.com/blog/what-is-semantic-html/) and [assuring keyboard accessibility](https://www.incluvate.com/blog/how-to-ensure-keyboard-accessibility/) we can make our links mostly operable, but semantic HTML does not provide us with the link text. As we found out above, undescriptive links are not accessible. We must follow a set of rules to make the links accessible.

### **Link Accessibility in WCAG 2.2**

We have identified the [four WCAG principles](https://www.incluvate.com/blog/quick-guide-to-digital-accessibility/#identifying-accessible-digital-services-a-dive-into-wcag-compliance) in our very first blog post.

Looking at the WCAG 2.2 for link accessibility, [the operable principle](https://www.w3.org/WAI/WCAG22/quickref/#principle2) defines the following two direct success criteria for links.

- **[2.4.4 Link Purpose (In Context)](https://www.w3.org/WAI/WCAG22/quickref/#link-purpose-in-context) – Level A.** The purpose of each link can be understood by users either by reading the link text alone or by considering its programmatically determined context, except in cases of ambiguity. The goal is to aid informed user decision-making about link navigation. Authors must provide descriptive names or context for all links to enhance user comprehension. The criterion highlights the importance of link text for users of assistive technologies, promoting clarity without additional context, and advocating consistency in link text for similar destinations. Exceptions are allowed for intentionally unknown link purposes, as in a game. The benefits include improved navigation for users with motion impairment, cognitive limitations, and visual disabilities, enabling them to skip irrelevant links and understand link purposes by exploring context.

- **[2.4.9Link Purpose (Link Only)](https://www.w3.org/WAI/WCAG22/quickref/#link-purpose-link-only) - Level AAA .** Guaranteeing that the meaning of each link is apparent based on its text alone, except in cases of ambiguity. The goal is to aid user understanding, enabling them to make informed decisions about whether to follow a link. Authors are tasked with providing descriptive link names to achieve this. The criterion acknowledges that, for some pages, making links unambiguous by default may not suit all users, and it allows for mechanisms that offer flexibility. The benefits encompass assisting users with motion impairment, preventing disorientation for those with cognitive limitations, and aiding users with visual disabilities in maintaining context.

## **What Makes a Link Descriptive?**

In our earlier example of a poor link text, we used the text “here”. Now you have your users thinking about where exactly is here. What is the purpose, what is the content, what is the context?

Descriptive link text is something that is, well, firstly descriptive but also meaningful. It should introduce keywords that describe the destination. Perhaps using the heading as a link text, if the destination is an article of some sort or a study. It is necessary to describe the content you are linking to, specifying whether it is a video or a picture, for example. “Watch this music video from AC/DC” or “Learn about edible mushrooms through pictures”. These texts give so much more context and description than something like “Watch here” or “Learn more”. Get comfortable, and include the link to the text describing what to expect.

### **How to Implement Descriptive Links**

- **Link text.** Avoid non-informative link phrases such as “click here”, “here”, “more”, “read more”, etc. In fact, these phrases should be avoided from the text completely. There is no need to specify “Click here for …” because by default links are clicked. This would be the same as labeling a button as “add to cart button”.

- **URLs.** As shown in the video above, plain URLs do not create a great user experience. They are not readable to humans and screen readers read them character at a time which may cause discomfort. It is best to stick to a human-readable format.

- **Text length.** While there is not really a minimum length for a link text, it should not be empty by any means or too short to describe the destination. The link text may be as short as a single character when used to index alphabets, for example. These are edge cases where the context should be clear enough to describe the links even when the text is short. Similarly, there is no length cap for a link, but it should be clear that the longer the text, the more tedious it is to read. Stay with the most concise text you can produce.

- **Images.** When providing an image as a link, [the alternative text of the image should describe the link, not the image](https://www.incluvate.com/blog/how-to-ensure-keyboard-accessibility/#defining-alternative-texts). However, providing image links, there are also [WAI image accessibility guidelines](https://www.w3.org/WAI/tutorials/images/functional/) to consider.

## **TL; DR/Recap**

Users navigate the web based on links and information scent. Information scent is a combination of users’ feelings about the link text and previous experiences. These factors decide if the user navigates the link or not.

Semantic HTML and keyboard accessibility guidelines will get you so far. Semantic HTML will not guarantee quality and concise link text that is useful for the users. The author is responsible for writing the link text. Undescriptive links will make the user experience less ideal, as users who rely on navigating the web page using links cannot conclude their purpose. As a result, the web page not being accessible.

Descriptive link text is descriptive and meaningful. It should introduce keywords that describe the destination.

Minimize the use of non-informative phrases like “here”, “click here”, etc. as they will be redundant for the users and cause inconveniences. Try not to introduce plain URL link texts as they cause discomfort for screen reader users and are not human-friendly. Using an optimal length – not excessively short, yet not overly long. Be careful with using images as links. The alternative text should describe the link destination, not the image.
