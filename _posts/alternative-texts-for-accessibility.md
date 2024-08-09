---
title: 'Effortless Alternative Texts for Accessibility'
date: '2024-01-10'
coverImageId: '/v1721740961/Blind_person_navigating_a_website_layout_wrzwgi.webp'
coverImageAttribute: ''
excerpt: 'Ah, the good old alt texts. When I first started my journey as a dev I was like what alt texts? Then a little later on my journey, I was like "Picture of..." until I had come to the conclusion: I don´t know sh*t about alt texts. In this post, I will highlight the why, how, and when of alt texts. Do not be like the earlier version of me, learn how to take the most out of the alt text attribute right now.'
author:
  name: Henri Remonen
featured: false
ogImage:
  url: 'https://res.cloudinary.com/daty4gssm/image/upload/q_auto,f_auto,w_1024/v1721740961/Blind_person_navigating_a_website_layout_wrzwgi.webp'
categories:
  - 'accessibility'
  - 'html'
  - 'wcag'
keywords:
  - 'accessibility'
  - 'accessible-links-alt-text'
  - 'alt-text'
  - 'alternative-text'
  - 'html'
  - 'image'
  - 'screen-reader'
  - 'wcag'
  - 'wcag-guidelines'
  - 'web-accessibility'
  - 'webaim'
---

## **What is Alt text?**

Alternative text, also known as **alt text**, provides a brief informative description of the information captivated in images on a web page. Alt texts are displayed when the image can’t be seen or displayed. Perhaps for the following reasons:

- **Assistive technology.** The user is visually impaired and is using a [screen reader](https://en.wikipedia.org/wiki/Screen_reader).

- **File not found!** The filename or path might be wrong or the service where the image file is located is not responding.

- **Support issues.** The user’s browser does not support the image type and can’t render the image correctly. This might happen when the user is using a [text-only browser](https://en.wikipedia.org/wiki/Text-based_web_browser).

- Users might have turned off images to reduce bandwidth for different reasons.

### **Defining Alternative Texts**

[MDN web docs](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML#alternative_text) suggest asking a crucial question: "Why is the image there in the first place?" This thought-provoking inquiry encourages us to consider what users might miss if the image doesn't appear. To create effective text, it's essential to tailor the rules based on different ways images are used:

- **Decoration**. Image is used solely for decorative means, such as a background. An empty alt text `alt=””` should be used. This ensures that the screen reader software will ignore the image and will not read anything to the user.

- **Content**. The image provides significant information. The same information should be described in the alt text attribute. However, if the image is described by the main text body, an empty alt text `alt=””` may be used.

- **Link**. Image is used as a navigational element that triggers functions, such as saving or printing. The alternative text should describe the destination or function, not the image itself.

- **Text**. Images used to display text should be avoided. If you must display text as an image, it is advisable to supply the text in the alternative text. The same goes for images used as buttons. Beware of contrast issues when displaying text as an image.

No matter the reason behind the user's inability to view an image, the intention should be to ensure a seamless user experience. We do not want to disturb the user with redundant, useless, or absent information. This is why writing clear and concise alternative texts is paramount. Now, for a quick reference, this is how alternative text attributes are interpreted by screen readers:

- Image has alternative text, then it will read that text for the user.

- The image does not have alternative text, it will say **”image”,** which is not helpful to the user and might lead to the user wondering what the image is.

- The image has so-called empty alternative text `alt=”"`, which is not read to the user as if the image is not there at all.

The W3C also distinguishes a set of their own [tutorial for images](https://www.w3.org/WAI/tutorials/images/) and an [alt decision-making tree](https://www.w3.org/WAI/tutorials/images/decision-tree/), which might be used to guide the decision in more detail.

## **Why to Use Alt Text? Importance in Web Accessibility**

Images are used widely on web pages to display information. [The Web AIM Million report 2023: Images and Alternative Text](https://webaim.org/projects/million/#alttext) discovered that on average there are over 43 images on home pages, and every 4th home page had missing alternative text, which is A LOT. Not only does alternative text boost SEO and ease crawling and indexing efforts, but it is also the only way for certain users to interpret the image’s content. Accessible images are beneficial for users who are:

- **Using a screen reader.** As we mentioned a little earlier, screen readers read the text alternative to the user if it is there.

- **Textual-only readers.** Users who are browsing with images disabled may still interpret the images textually. This will lead to a better flow of the content and enhance user experience.

- **Load issues.** Users with limitations due to slow internet or device settings may also interpret the images textually. This will also lead to a better flow of the content and the ability to understand the whole content without missing information.

### **Alternative Text In WCAG 2.2**

Like in everything related to accessibility, the WCAG provides very informative and useful criteria and different conformance levels for alternative texts. In the very first blog post, we identified [the four principles of WCAG](https://www.hremonen.com/blog/quick-guide-to-digital-accessibility#identifying-accessible-digital-services-a-dive-into-wcag-compliance).

Looking at the WCAG guidelines, [the perceivable principle](https://www.w3.org/WAI/WCAG22/quickref/#principle1) defines the following three success criteria for alternative texts.

- [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=111%2C212%2C241%2C242%2C145#non-text-content) **– Level A .** Providing text alternatives for diverse non-text content, such as controls, time-based media, tests, and sensory experiences. The goal is to ensure accessibility by allowing information to be rendered through various modalities, benefiting users with different abilities. The strategy for CAPTCHAs acknowledges their controversial nature and proposes text alternatives while offering varied forms for different disabilities.

- **[1.4.5 Images of Text](https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=111%2C212%2C241%2C242%2C145#images-of-text) – Level AA.** Employing text rather than images of text whenever feasible. The aim is to facilitate user customisation of text presentation, including font size, color, and spacing. Authors should choose text when achieving the same visual effect is possible through technologies, reserving the use of image text for essential presentations or technical limitations. Logotypes and customisable instances are exceptions. Techniques align with those of criterion 1.4.9, focusing on user customisation. Benefits extend to users with low vision, visual tracking issues, and cognitive reading disabilities.

- **[1.4.9 Images of Text (No Exception)](https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=111%2C212%2C241%2C242%2C145#images-of-text-no-exception) – Level AAA .** Avoiding images of text unless solely for decoration or when a specific presentation is integral to conveyed information, such as logotypes. The objective is to ensure users can always adjust text presentation, similarly to criterion 1.4.5. The intent is to implement text in a way enabling presentation changes or providing user-selectable alternatives, discouraging the use of static image text. Exceptions apply when a particular visual presentation is crucial for conveying information. Decorative text is exempt from the requirement. The benefits extend to users with low vision, visual tracking issues, and cognitive reading disabilities.

## **How to Write Alt Text’s? Best Practices**

So now we have covered what are alternative texts and why you should provide them, what about the how part of things? We identified different use cases, which led us a little further, but we are not quite finished. I have gathered the following information that hopefully leads to excellent alternative texts.

- **Keep it short.** [The W3C considers a good rule of thumb](https://www.w3.org/WAI/tutorials/images/tips/) to write an alt text that you might repeat on the phone for someone.

- DO NOT begin the text with “picture”, “image”, etc. This is redundant and will lead to confusion for the users who need alternative texts. Screen readers will read the word “image” before the actual alternative text anyway.

- It is good to use the context of the web page to guide your writing but be aware of not cluttering the alternative text with keywords. Keywords can help SEO and index your images higher, however, keep a healthy balance between accessibility and keywords that are also relevant to the image.

- **Prioritize information.** Alternative text should give the most concise description of the image’s purpose. If you must provide a more detailed description, refer to [W3C’s documentation about complex images](https://www.w3.org/WAI/tutorials/images/complex/).

I came across this excellent YouTube video from **Chrome for Developers** where **Jake Archibald** and **Das Surma** discuss the topic.

<figure>

<iframe width="560" height="315" src="https://www.youtube.com/embed/flf2vS0IoRs?si=rNhr_3mTHScCSXo_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<figcaption>

Writing Good Alt Text - Chrome for Developers.

</figcaption>

</figure>

Along with my list above, I would like to highlight these points taken from the video.

- Context matters. The same image might have different alternative texts for different sites.

- Emotions matter. After all, humans are the ones reading the alternative texts.

- Serve alt text attributes, even if they are empty! Missing alt text attribute is worse than leaving it empty.

## Conclusion

Alternative text provides a brief informative description of the information captivated in images on a web page. Alternative texts are displayed when the image cannot be seen or displayed for multiple different reasons.

Ask yourself a question “Why is the image there in the first place?”. This will lead us to think about what the user might be missing if the image can’t be displayed. We identified four different reasons or “use cases” for an image to exist, decoration, content, link, and text. Each of these had their own rules for the alternative text.

Context is the key. Consider the vibe of the webpage – your alternative text should seamlessly fit the content.

No one likes unnecessary info. Do not use the alternative text just because “you must”. Use it to provide the same experience for all users. Might be that the best way to serve alternative text is just to leave it empty.

Watch the video. Seriously, it's worth checking out.
