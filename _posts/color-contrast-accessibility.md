---
title: 'How to Get Color Contrast Accessibility Right'
date: '2024-01-24'
coverImage: 'https://res.cloudinary.com/daty4gssm/image/upload/q_auto,f_auto,w_1024/v1721896354/What_is_color_contrast_accessibility_lw7gf5.webp'
coverImageAttribute: ''
excerpt: 'Have you ever visited a website with a color scheme that seemed really washed out and difficult to read? It´s not just a matter of orange text on a green background - sometimes the colors are so pale that even people with perfect eyesight have to squint to read the text. I´m not sure if these websites are trying to be modern or what, but it´s definitely not user-friendly. Developers and designers need to take these things into consideration to ensure that users can easily read and navigate their sites.'
author:
  name: Henri Remonen
featured: false
ogImage:
  url: 'https://res.cloudinary.com/daty4gssm/image/upload/q_auto,f_auto,w_1024/v1721896354/What_is_color_contrast_accessibility_lw7gf5.webp'
categories:
  - 'accessibility'
  - 'wcag'
keywords:
  - 'accessibility'
  - 'color contrast'
  - 'color contrast accessibility'
  - 'color contrast checker'
  - 'contrast'
  - 'contrast ratio'
  - 'wcag'
---

## What is Color Contrast?

[Color contrast](<https://en.wikipedia.org/wiki/Contrast_(vision)>) is defined as the object’s difference in [luminance](https://en.wikipedia.org/wiki/Luminance) or [color](https://en.wikipedia.org/wiki/Color) relative to the background luminance or color.

Huh?

Yeah, this is not a lecture about color theory. In a nutshell, the term color contrast is referred to as the perception of how well a foreground (like text) stands from the background. This determines the readability for most people. Color contrast is measured in contrast ratio.

### Defining Contrast Ratio

[Contrast ratio](<https://en.wikipedia.org/wiki/Contrast_ratio#:~:text=The%20contrast%20ratio%20(CR)%20is,has%20similarities%20with%20dynamic%20range.>) is a numerical value, which determines the difference in light between the foreground and background.

[WCAG definition of contrast ratio](https://www.w3.org/WAI/GL/wiki/Contrast_ratio) is used to evaluate the contrast ratio in web accessibility. The definition rates the minimum contrast to 1:1 and maximum contrast to 21:1 on black to white (or white to black). The contrast ratio of 1 means that the same color is used for both, leading to no contrast.

<figure>

![A comparison of different levels of contrast ratios. 21:1 the best, 7:1 sufficient, 3:1 moderate, and 1.45:1 being poor contrast](https://res.cloudinary.com/daty4gssm/image/upload/q_auto,f_auto,w_560/v1721896361/A_comparison_of_different_levels_of_contrast_ratios._211_the_best_contrast_71_sufficient_contrast_31_moderate_contrast_and_1.451_bad_contrast_wnqkrb.webp 'A-comparison-of-different-levels-of-contrast-ratios.-211-the-best-contrast-71-sufficient-contrast-31-moderate-contrast-and-1.451-bad-contrast')

<figcaption>

Different color contrast ratios visualized.

</figcaption>

</figure>

### Why is Color Contrast Important for Accessibility?

Users should be able to distinguish text or visual components on a web page and interact with it the way it was intended. Poor color contrast will make the experience suboptimal regardless of the user’s visual capabilities. Providing a good and sufficient color contrast will benefit all users. Especially users with color blindness or similar conditions, who have difficulties differentiating between similar colors.

[The W3C provides](https://www.w3.org/WAI/perspective-videos/contrast/) perspective videos of the impacts and the benefits of accessibility. One of these perspectives is about color contrast. The video will shed light on the difficulties, I highly recommend watching it.

<figure>

https://www.youtube.com/watch?v=Hui87z2Vx8o&ab\_channel=W3CWebAccessibilityInitiative%28WAI%29

<figcaption>

Web Accessibility Perspectives: Colors with Good Contrast - W3C.

</figcaption>

</figure>

Having color contrast limitations does not mean that the web page should be dull. It just means that you must consider as broad a user audience as possible. This will be beneficial to the business, as there are an [estimated 300 million people with color vision deficiency](<https://clintoneye.com/services/color-blindness/#:~:text=Facts%20about%20Color%20Blindness%20and,are%20color%20blind%20(0.5%25).>). If you were asked if you would like to open the business for an additional 300 million people, I think everyone would take it

Anyhow, this is not the case. [Over 80 percent of the web pages had low contrast text](https://www.hremonen.com/blog/quick-guide-to-digital-accessibility#the-shortcomings). The findings are insane as the report does not contain every web page in the world. This report was concluded of the top one million home pages. Maybe they were not asked the question.

### Color Contrast in WCAG 2.2

Like in everything related to accessibility. The WCAG provides very informative and useful criteria and different conformance levels for color contrast. In the very first blog post, we identified [the four principles of WCAG](https://www.hremonen.com/blog/quick-guide-to-digital-accessibility#identifying-accessible-digital-services-a-dive-into-wcag-compliance).

[The perceivable principle](https://www.w3.org/WAI/WCAG22/quickref/#principle1) defines the following four success criteria for color contrast.

- **1.4.1 Use of Color – Level A ().** Emphasizing the importance of employing additional visual elements, such as shape or text, alongside color to convey information, prompt actions, or distinguish visual elements. The intention is to guarantee that all sighted users can comprehend information conveyed through color differences, as color-blind users or those with limited color perception may miss such cues. Acknowledging the significance of color in web content design but highlights the need for alternative visual indicators to accommodate users with partial sight, older individuals with reduced color perception, or those resorting to limited-color displays.

- **[1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=111%2C212%2C241%2C242%2C145#contrast-minimum) – Level AA .** Ensuring a minimum contrast ratio of 4.5:1 for the visual presentation of text and images of text. Aiming to improve readability for individuals with moderately low vision or impaired contrast perception. Exceptions include applying a lower ratio of 3:1 for large-scale text and exempting inactive user interface components, purely decorative text, and logotypes from contrast requirements. Emphasizing the independence of contrast calculation from color (hue) to accommodate diverse visual impairments, the criteria provide considerations for font sizes and address the application of contrast requirements to images of text. The rationale for contrast ratios is based on compensating for contrast sensitivity loss in users with specific vision levels. The overarching goal is to enhance text visibility and legibility for a broad audience.

- **[1.4.6 Contrast (Enhanced)](https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=111%2C212%2C241%2C242%2C145#contrast-enhanced) – Level AAA.** Ensuring more strict contrast ratios of 7:1 for the visual presentation of text and images of text and a lower ratio of 4.5:1 for large-scale text compared to the criteria 1.4.3.

- **[1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=111%2C212%2C241%2C242%2C145#non-text-contrast) – Level AA .** Ensuring crucial visual information, such as user interface components and graphical objects, maintains a minimum contrast ratio of 3:1 against adjacent colors. Applying to active user interface components and graphical objects vital for content understanding, the criteria focus on making these elements distinguishable for individuals with moderately low vision. Exempting inactive user interface components, emphasizing the importance of focusing indicators, and addressing graphical objects’ contrast requirements for content comprehension, the criteria aim to enhance accessibility for people with visual impairments by ensuring sufficient contrast in key visual elements.

For more detailed idea and practical examples, I suggest checking out the [WebAIM’s contrast article](https://webaim.org/articles/contrast/).

## Strategies for Achieving Proper Color Contrast

As we found out, low-contrast text is a very common issue on web pages. So how do we dodge these nasty issues?

### Color Contrast Requirements Depends on Font Size

Normal text, which is defined as smaller than 18pt/24px OR 14pt/18.67px when bolded, should have the minimum contrast ratio of 4.5:1 (AA). Large text which is defined as larger than 18pt/24px OR 14pt/18.67px when bolded, should have the minimum contrast ratio of 3:1 (AA). Note that these are the minimum requirements, and they might still cause issues for certain users. I would suggest aiming higher when possible.

### Enhance Contrast with Text Effects

Text effects such as borders and outlines might help to achieve a certain contrast level. The color of a text outline or border can be used when measuring contrast.

Keep in mind that text interaction effects are also subject to the requirements. Test the contrast ratio of all interaction indications, such as hover, focus, and active separately.

### Correctly Identify Links

It is advisory to keep the visual underline effects for inline links where body text and link text appear. Omitting the link underline in such places, the following must be met besides the 1.4.3 text contrast requirement of 4.5:1.

- 3:1 contrast ratio between the body text and the link text.

- Mouse hovers and keyboard focus effects that will illustrate that the user is interacting with a link. This could be achieved by underlining the link text on hover and focus.

Some elements, like header and navigational elements, are exempted from this.

The issues only deepen in you are going for AAA level of conformance. If you are going to omit the underline effect from links, I suggest reading [WebAIM’s WCAG 2.0 and Link Colors blog post](https://webaim.org/blog/wcag-2-0-and-link-colors/).

### Images of Text Need Proper Contrast

Images of text are also subject to the contrast ratio requirements. Decorative images with text are not subject to the requirements. Decorative image could be a picture of books for example.

### Assure Proper Contrast for Gradients and Other Effects

WCAG 2.2 does not directly mention how to calculate the contrast ratio of text over gradient, semi-transparent colors, or background images. They are still subject to the contrast requirements. It is advisory to calculate the contrast from the lowest point.

### Contrast Ratio Does Not Round Up

If you have a contrast ratio of 6.99:1, it does not mean it is close enough to satisfy the requirement of a contrast of 7:1.

## How To Check Color Contrast for Accessibility

You can check contrast ratios online with multiple different tools. I have created a [contrast checker tool](https://www.swiftcontrast.com/) for you to use freely.

[ColorZilla](https://www.colorzilla.com/) is also great tool to extract the colors from any website element. ColorZilla provides browser plugins for Chrome and Firefox.

[WebAIM’s Wave](https://wave.webaim.org/) can also be used to analyze contrast ratios for page text elements.

## Conclusion

Color contrast means how well a foreground stands out from the background. This determines the readability for most people. Color contrast is measured in contrast ratio.

WCAG rates the minimum contrast to 1:1 on same color in foreground and background, and maximum contrast to 21:1 on black to white (or white to black). These are used to evaluate the contrast ratio of web pages.

Providing a good and sufficient color contrast will benefit all users, but especially users with color blindness or similar conditions, who have difficulties differentiating between similar colors.

WCAG provides requirements or success criteria for accessible text, non-text content, and links that omit the underlining. When working on providing an accessible experience for the users it is crucial to use the correct text sizes, correctly identify links, providing other visual cues such as icons, keeping gradients and other effects to the minimum and remembering that the contrast ratio does not round up.
