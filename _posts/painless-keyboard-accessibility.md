---
title: 'Painless Keyboard Accessibility'
date: '2024-01-03'
coverImageId: 'https://res.cloudinary.com/daty4gssm/image/upload/q_auto,f_auto,w_1024/v1721907472/person_in_wheelchair_in_front_of_a_computer_btrfwq.webp'
coverImageAttribute: ''
excerpt: 'Have you ever tried to navigate the web using just your keyboard? You perhaps found out that it is not always an easy job to do. Depending on the webpage it may seem like the navigation has been really thought out, but sometimes not so much. Reading this post will equip you with the essential knowledge about this fine craft.'
author:
  name: Henri Remonen
featured: false
ogImage:
  url: 'https://res.cloudinary.com/daty4gssm/image/upload/q_auto,f_auto,w_1024/v1721907472/person_in_wheelchair_in_front_of_a_computer_btrfwq.webp'
categories:
  - 'accessibility'
  - 'html'
  - 'wcag'
keywords:
  - 'accessibility'
  - 'aria'
  - 'html'
  - 'interactive semantic'
  - 'keyboard accessibility'
  - 'keyboard focus'
  - 'semantic html'
  - 'tabindex'
  - 'testing keyboard accessibility'
  - 'webaim'
---

## What is Keyboard Accessibility

Keyboard accessibility is the ability to navigate the web page’s functionalities using just a keyboard or a keyboard-like device. For a web page to be keyboard accessible, it must be keyboard operable, have a visible keyboard focus indication, have logical tab order, and avoid keyboard traps.

### Keyboard Focus

One of the key keyboard accessibility features is [keyboard focus](https://web.dev/articles/focus), which determines a visual indication of the user’s location on the web page. Web browsers indicate keyboard focus by default for semantic elements. The default indication is typically perceived as highlighted border of the current element, which may not be enough for visually impaired persons.

Some HTML elements are focusable by default, and some are not. As we discovered in the first post about [semantic HTML](https://www.hremonen.com/blog/what-is-semantic-html), sticking to semantic elements will lead to the best and most anticipated results, as semantic elements have built-in focus functionalities, tab order, and event handlers. For an extensive guide on keyboard focus, I suggest reading the following [article about focus](https://web.dev/learn/accessibility/focus).

## Why is Keyboard Accessibility Important

The keyboard is the most versatile and flexible user input method available. Assistive technologies such as speech input, on-screen keyboards, etc. mimic the functionalities of a keyboard input for many users. By making a web page accessible through a keyboard, it is also accessible to users with disabilities using one of these assistive technologies.

### Keyboard Accessibility in WCAG 2.2

In the very first blog post, we identified [the four principles of WCAG](https://www.hremonen.com/blog/quick-guide-to-digital-accessibility#identifying-accessible-digital-services-a-dive-into-wcag-compliance).

[The Operable principle](https://www.w3.org/WAI/WCAG22/quickref/#principle2) defines the following four success criteria for keyboard accessibility. For the record, [W3C defines multiple additional success criteria for keyboard accessibility](https://www.w3.org/WAI/WCAG22/quickref/?currentsidebar=%23col_overview&tags=keyboard&versions=2.2), we will cover these four most crucial ones in this article.

- [2.1.1 Keyboard – Level A](https://www.w3.org/WAI/WCAG22/quickref/?currentsidebar=%23col_overview&tags=keyboard#keyboard) . Functionalities must be operable through a keyboard OR a [keyboard interface](https://www.w3.org/TR/WCAG22/#dfn-keyboard-interface). Users who rely on keyboard navigation can effectively interact with and access all functionalities of the web content without encountering barriers related to timing or specific mouse-based actions.

- [2.1.2 No Keyboard Trap – Level A](https://www.w3.org/WAI/WCAG22/quickref/?currentsidebar=%23col_overview&tags=keyboard#no-keyboard-trap) . Avoiding keyboard users to get stuck into a so-called [keyboard trap](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap). A keyboard trap is a subset of content that can be only exited using a mouse or pointing device. This ensures that the web page does not introduce any plug-in functionality, which does not have a method to return focus to the main content from the plug-in.

- [2.1.3 Keyboard (No Exception) – Level AAA](https://www.w3.org/WAI/WCAG22/quickref/?currentsidebar=%23col_overview&tags=keyboard#keyboard-no-exception) . Like 2.1.1, this success criterion emphasises keyboard operability without relying on specific timings, ensuring an accessible experience for users who navigate content primarily through a keyboard.

- [2.1.4 Character key shortcuts – Level A](https://www.w3.org/WAI/WCAG22/quickref/?currentsidebar=%23col_overview&tags=keyboard#character-key-shortcuts) . [Character key shortcuts](https://www.w3.org/WAI/WCAG22/Techniques/general/G217.html) must be either remappable or disableable by the user or the functionality must only be active on focus. This ensures that there are no challenges from such custom functionality for users using speech input and those who cannot type accurately.

## How to Ensure Keyboard Accessibility

[WCAG 2.2 Techniques](https://www.w3.org/WAI/WCAG22/Techniques/general/G202.html) suggests that when starting to implement keyboard accessibility, it must be determined what kind of functionality is available to the users. This step is crucial for outlining functionality that needs mouse and keyboard coordination, such as drag-and-drop features. After the functionality is determined, it must be verified by the author that each of the functions can be done using a keyboard.

### Semantic HTML is Keyboard Accessible

Using structural semantic HTML elements will result in a good base level of keyboard accessibility. As stated in the [previous post about semantic HTML](https://www.hremonen.com/blog/what-is-semantic-html),  these semantic elements are packed with default functionality, such as tab functionality, on key handlers**,** on-click handlers, and other metadata that will lead to an excellent support of keyboard accessibility for these elements.

### Creating non-interactive elements keyboard accessible

Elements without interactive semantics such as `<div>` and `<span>` may be modified into interactive elements given the `tabindex` attribute. However, this should only be done if the component does have interactive semantics.

The `tabindex` attribute is the sauce for dictating the order in which elements on your web page receive focus when users navigate using the Tab key. It's like orchestrating a symphony of keyboard interactions on your web page to maintain a logical flow of navigation.

### How to use tabindex attribute

To give an element the ability to keyboard focus, all you need to do is add the `tabindex` attribute. For instance, if you have a non-interactive element that should be focusable, just toss in `tabindex="0".` The "0" signifies that this element gets focus in the natural order of the page.

But what if you want an element to be focusable but not part of the natural tab order? Assigning `tabindex="-1"` to an element makes it focusable programmatically but keeps it out of the regular tab order. Making it useful for off-screen elements or hidden modals not currently on the user’s viewport.

Lastly, if you know what you’re doing, you can use positive indices. Elements with positive `tabindex` attributes will get the higher tab priority over `tabindex=”0”` and `tabindex=”-1”`. Meaning that first will come `tabindex=”1”` then `tabindex=”2”` etc. until all the positive indices have been navigated. Moving onto the natural tab order (interactive elements and `tabindex=”0”` elements).

### Checklist for Keyboard Accessibility

- [Interactive elements should be focusable](https://www.w3.org/WAI/tips/developing/#ensure-that-all-interactive-elements-are-keyboard-accessible). Elements such as links, buttons, and form fields are focusable by default, also with many other semantic HTML elements. If an element is not focusable but should be, provide custom logic using `tabindex` and event handler functionalities.

- **DO NOT** make elements without interactive semantics focusable. Elements such as `<div>` or `<span>` which are made focusable with the `tabindex` attribute should also have some kind of interactive semantics added. If the elements do not respond to keyboard events, they should not be focusable. For example, according to [the ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/button/), `<div>` and `<span>` button elements should activate on Space and Enter keys.

- Clickable elements should be focusable. Elements with an `onclick` handler should be focusable and have `onkeydown` event handler functionalities.

- Implement a clear focus indicator, overriding the browser’s default styling. Some browsers show a less visible default focus indicator, which could lead to visually impaired users’ failure to see the focus indicator.

- **DO NOT** disable the focus indicator completely using `outline: none` CSS property.

- Avoid introducing plug-ins or code that will lead to a keyboard trap. The author should ensure that users always know how to navigate the page and away from components.

- Structure the underlying source code so that the navigation order is correct. Keyboard navigation order should be logical and intuitive and follow the visual flow of the page.

- Beware of creating a confusing user experience with incorrect use of `tabindex`. You may think that providing `tabindex` attributes would help assistive technology, but on the contrary, you are just making a very exhausting and confusing experience.

- **DO NOT** patch spaghetti code with useless `tabindex` attributes. Use semantic HTML to get the most done and, for non-interactive components that need focus, use `tabindex` attribute correctly.

## Testing Keyboard Accessibility

Testing keyboard control flow is not rocket science, it just requires manual and visual review of a web page. Begin your testing with disabling your mouse and not using it at all. If all functionality is accessible by using the keyboard, you have made your website keyboard accessible. Hooray!

[Web AIM provides a](https://webaim.org/techniques/keyboard/) [keyboard accessibility testing table](https://webaim.org/techniques/keyboard/), which can be used to navigate the website:

<figure>

| Interaction                      | Keystrokes                                                                                                                                                                                                                  | Notes                                                                                                                                                                                                                   |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Navigate to interactive elements | <kbd>Tab</kbd> – navigate forward. <br> <br><kbd>Shift</kbd> + <kbd>Tab</kbd> – navigate backward.                                                                                                                          | Check that keyboard focus indicators are present.<br>Navigation order should be logical and intuitive                                                                                                                   |
| Links                            | <kbd>Enter</kbd> – activate the link                                                                                                                                                                                        |                                                                                                                                                                                                                         |
| Buttons                          | <kbd>Enter</kbd> – activate the button.<br><br><kbd>Spacebar</kbd> – activate the button.                                                                                                                                   | Ensure elements with ARIA `role=”button”` can be activated with both key commands                                                                                                                                       |
| Checkboxes                       | <kbd>Spacebar</kbd> – check and uncheck a single checkbox item.                                                                                                                                                             | Users can typically select zero, one, multiple options.                                                                                                                                                                 |
| Radio buttons                    | <kbd>Spacebar</kbd> – select the focused option.<br><br><kbd>↑</kbd> <kbd>↓</kbd> <kbd>→</kbd> <kbd>←</kbd> – navigate between options.<br><br><kbd>Tab</kbd> – leave the group of radio buttons.                           | Users can select only one options from a group of radio buttons.                                                                                                                                                        |
| Select (dropdown menu)           | <kbd>↑</kbd> <kbd>↓</kbd> – navigate between options.<br><br><kbd>Spacebar</kbd> – expand dropdown menu.<br><br><kbd>Enter</kbd> and <kbd>Esc</kbd> – select option and collapse.                                           | You can also filter or jump to options in the menu as you type letters.                                                                                                                                                 |
| Autocomplete                     | Type to begin filtering.<br><br><kbd>↑</kbd> <kbd>↓</kbd> – navigate between options. <kbd>Enter</kbd> – select an option.                                                                                                  |                                                                                                                                                                                                                         |
| Dialog                           | <kbd>Esc</kbd> – close dialog.                                                                                                                                                                                              | Modal dialogs should maintain keyboard focus.<br><br>Non-modal dialogs should close automatically when they lose focus.<br><br>When a dialog closes, focus should usually return to the element that opened the dialog. |
| Slider                           | <kbd>↑</kbd> <kbd>↓</kbd> <kbd>→</kbd> <kbd>←</kbd> – increase or decrease slider values.<br><br><kbd>Home</kbd> – beginning of slider.<br><br><kbd>End</kbd> – end of slider.                                              | <kbd>Tab</kbd> and <kbd>Shift</kbd> + <kbd>Tab</kbd> should toggle each end for double-headed (range sliders) sliders.<br><br>In some sliders <kbd>PageUp</kbd> and <kbd>PageDown</kbd> can move by a larger increment. |
| Menu bar                         | <kbd>↑</kbd> – previous menu option.<br><br><kbd>↓</kbd> – next menu option.<br><br><kbd>Enter</kbd> – expand the menu and select and option.<br><br><kbd>←</kbd> – expand submenu.<br><br><kbd>→</kbd> – collapse submenu. | A menu bar dynamically changes content within an application. Links that utilize Tab and Enter are not menu bars.                                                                                                       |
| Tab panel                        | “Arrow keys” – choose and activate previous and next tab.<br><br><kbd>Tab</kbd> – once to navigate into the group of tabs and once to navigate out of the group of tabs.                                                    | This is for 'application' tabs that dynamically change content within the tab panel. If a menu looks like a group of tabs but is actually a group of links to different pages, Tab and Enter are more appropriate.      |
| Tree menu                        | <kbd>↑</kbd> – previous menu option.<br><br><kbd>↓</kbd> – next menu option.<br><br><kbd>←</kbd> – expand submenu.<br><br><kbd>→</kbd> – collapse submenu.                                                                  |                                                                                                                                                                                                                         |
| Scroll                           | <kbd>↑</kbd> <kbd>↓</kbd> – scroll vertically.<br><br><kbd>←</kbd> <kbd>→</kbd> – scroll horizontally.<br><br><kbd>Spacebar</kbd> and <kbd>Spacebar</kbd> + <kbd>Shift</kbd> – scroll by page                               | The <kbd>Spacebar</kbd> will, by default, scroll the page, but only if an interactive control that allows space bar input is not focused. Horizontal scrolling within the page should be minimized.                     |

<figcaption>

Web AIM's Keyboard Accessibility Testing Table: A comprehensive guide to common online interactions, standard keystrokes, and essential considerations for effective accessibility testing.

</figcaption>

</figure>
