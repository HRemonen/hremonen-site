---
title: '5 Essential Advanced Tailwind Tips'
coverImageId: '/v1721739604/5_Essential_Advanced_Tailwind_Tips_b4ptxg.webp'
coverImageAttribute: ''
excerpt: 'Tailwind has gained a lot of popularity. Because of its utility-first approach, it is easy and intuitive to get started with. I feel like the main benefit is not having to juggle between separate CSS files speeding up the development process. This is not a tutorial on how to set up Tailwind. Nor will I cover how to center a div. I’ll showcase five Tailwind techniques which helped me on my dev journey and I’ve found out to be the most helpful.'
date: '2024-02-14'
author:
  name: 'Henri Remonen'
featured: false
ogImage:
  url: 'https://res.cloudinary.com/daty4gssm/image/upload/q_auto,f_auto,w_1024/v1721739604/5_Essential_Advanced_Tailwind_Tips_b4ptxg.webp'
categories:
  - 'html'
  - 'tailwind'
  - 'tutorials'
keywords:
  - 'advanced tailwind'
  - 'advanced tailwind tips'
  - 'html'
  - 'semantic html'
  - 'tailwind'
  - 'tailwind cofig'
  - 'tailwind group'
  - 'tailwind peer'
  - 'tailwind theme'
---

[Tailwind](https://tailwindcss.com/) is something else when compared to the traditional CSS. Tailwind has gained a lot of popularity. Because of its [utility-first approach](https://tailwindcss.com/docs/utility-first), it is easy and intuitive to get started with. I feel like the main benefit is not having to juggle between separate CSS files speeding up the development process.

However, I am not saying that Tailwind is the CSS killer. It may become hard to maintain Tailwind on a larger project, especially when using multiple [pseudo-classes](https://tailwindcss.com/docs/hover-focus-and-other-states) for styling. However, Tailwind is adapted by [many large-scale companies](https://tailwindcss.com/showcase), making the utility-classes possible to maintain, like any other code base.

This is not a tutorial on how to set up Tailwind. Nor will I cover how to center a div. I’ll showcase five Tailwind techniques which helped me on my dev journey and I’ve found out to be the most helpful.

The code snippets provided as examples omit a lot of Tailwind classes to save reading and therefore copy pasting the provided code snippets might not cause the same output. Code examples are there just to show, not to provide production ready code.

## Customize the Theme

Let’s say that you have your website designed in Figma or whatever. The design includes colors, fonts, etc. Now you translate this design into the website using Tailwind. However, you must remember the color values and everything else every time you want to reuse them. Coming back and changing the colors later would be a pain.

Thankfully Tailwind lets to define your custom color palette, fonts, type scale, border sizes, breakpoints — anything related to the visual design of your site.

Open your **_tailwind.config.js_**, it’ll look something like this:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

The theme object inside defines the values that are available to be used in the utility-classes. You do not want to overwrite the existing core theme of Tailwind and that is why Tailwind lets you [**extend**](https://tailwindcss.com/docs/theme#extending-the-default-theme) the default theme with **_theme.extend_**.

You could also create your own theme by defining the values outside of the extend object. Tailwind lets you customize a lot of stuff. For further reading and a complete list of configuration options, check out the [theme configuration docs](https://tailwindcss.com/docs/theme#configuration-reference).

### How to Define and Use Custom Colors in Tailwind

Adding custom colors into the Tailwind theme is a breeze. Let’s imagine the designers have defined three colors using the [60:30:10 color rule](https://bootcamp.uxdesign.cc/the-60-30-10-color-rule-for-ui-design-32695d04a7c2); primary: #FAF9F5, secondary: #F2EFEA, and accent: #3E3E41.

You were tasked with building a card with a link button. The background color of the card must be in the primary color and the color of the link button must be in the accent color.

![Card UI element with the defined color palette.](https://res.cloudinary.com/daty4gssm/image/upload/q_auto,f_auto,w_560/v1721739603/Card_with_custom_color_palette_bsceb3.webp)

Now you define the colors inside the utility functions like a good Tailwind developer would. All Gucci, right?

```jsx
<div className="… bg-[#F2EFEA] …">
  <h2 className=" … ">Tailwind</h2>
  <p className=" … ">
    Tailwind CSS works by scanning all of your HTML files, JavaScript components,
    and any other templates for class names, generating the corresponding styles
    and then writing them to a static CSS file.
  </p>
  <a href="#" className="… bg-[#3E3E41] …">
    Read more
    <svg>
      {…}
    </svg>
  </a>
</div>
```

Now what happens when you have adopted this style into hundreds of components and one day the color palette changes? You must manually go through every single element and change the HEX value to the new one. Expensive and tedious work, right?

However, this could have dodged by defining the primary, secondary, and accent colors into the Tailwind theme:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: '#FAF9F5',
        secondary: '#F2EFEA',
        accent: '#3E3E41',
      },
    },
  },
  plugins: [],
}
```

Now the colors can be accessed in the utility-classes directly with _bg-secondary_, _text-primary_, _border-accent_ etc. Let’s take a quick demonstration:

```js {1,8}
<div className="… bg-secondary …">
  <h2 className=" … ">Tailwind</h2>
  <p className=" … ">
    Tailwind CSS works by scanning all of your HTML files, JavaScript components,
    and any other templates for class names, generating the corresponding styles
    and then writing them to a static CSS file.
  </p>
  <a href="#" className="… bg-accent …">
    Read more
    <svg>
      {…}
    </svg>
  </a>
</div>
```

This also makes it easier to change the color palette later. We only must change the values in the **_tailwind.config.js_** and automatically every element gets updated to the new color palette. Neat!

## Hiding Elements Visually

Sometimes you just want a sleek design on a specific element, so you are trying to minimize the information displayed, or perhaps you want to provide information for specific types of users. For example, if we have an input element of some sort and we wanted to allow the user to copy the value to the clipboard with a single click.

![Text color HEX input field, with a copy icon and a small preview window.](https://res.cloudinary.com/daty4gssm/image/upload/q_auto,f_auto,h_150/v1721739603/Text_color_input_field_n3ldod.webp)

We would want to have a “label” or an explanation of the button’s function. However, the icon used is self-explanatory, so we do not want to display the label to every user. The label is there to allow screen reader users to distinguish what the button is for, just like we would identify images using the alt property.

Luckily, Tailwind ships with a class **_sr-only_** that allows to hide element visually without hiding it from screen readers:

```jsx /sr-only/
<button type='button' className='…' onClick={handleCopyToClipboard}>
  <IoCopyOutline aria-hidden='true' focusable='false' size={24} />
  <span className='sr-only'>Copy text color value</span>
</button>
```

Now the button has an [accessible name](https://www.hremonen.com/blog/fostering-the-accessibility-tree#accessible-objects-as-the-foundation) “Copy text color value” that is hidden visually, but it is still available to the screen readers.

I would use the **_sr-only_** class with caution. It should be noted that many screen reader users have some vision. It is still better to use **_sr-only_** excessively than omitting elements such as form field labels or button text completely. [Further reading: Visibility of content for screen reader users](https://webaim.org/techniques/css/invisiblecontent/#techniques).

## Creating Custom Text Highlights

For a nice twist for your users, you can modify the active text selection. This is nice, especially if you provide content that is copied often, however you might not want to go too crazy with this one.

Tailwind lets you modify the active text selection with the **_selection_** modifier:

![Custom text selection highlight colors, lighter pint for the background and darker pink for the text.](https://res.cloudinary.com/daty4gssm/image/upload/q_auto,f_auto,w_560/v1721739603/Custom_highlight_for_text_pgsww8.webp)

```jsx
<div className=" … ">
  <h2 className=" … ">Tailwind</h2>
  <p className="… selection:bg-pink-200 selection:text-pink-600 …">
    Tailwind CSS works by scanning all of your HTML files, JavaScript components,
    and any other templates for class names, generating the corresponding styles
    and then writing them to a static CSS file.
  </p>
  <a href="#" className=" … ">
    Read more
    <svg>
      {…}
    </svg>
  </a>
</div>
```

Remember to take care of appropriate color contrast!

## Style Based on the Parent Element

Styling elements based on the parent elements state is also very handy. Tailwind lets mark the elements with **_group_** class and use **_group-\*_** modifiers like **_group-hover_** to style the child elements.

Let’s revise our example code that we have been using here. Say we wanted to style the **Read more** text with underline on hover, but we would like the underline to appear on the button hover rather than hovering the actual `<a>` element.

<figure>
<video controls muted src="https://res.cloudinary.com/daty4gssm/video/upload/q_auto,f_auto/v1721742876/Styling_based_on_the_parent_element_hxxevp.mov"></video>
</figure>

To achieve this, we must add the **_group_** class to the `<a>` element and introduce a `<span>` element with **_group-hover:max-w-full_** etc. classes to help us achieve the underline effect. You could also do this same effect without using the **_group_** class and `<span>` element, but I just wanted to show with these (roast me).

```jsx /group-hover/
<a href="#" className="… group …">
  Read more
  <span className="absolute left-3 right-3 bottom-2 z-10 max-w-0 group-hover:max-w-full transition-all duration-500 h-[2px] bg-white "></span>
  <svg>
    {…}
  </svg>
</a>
```

The `<span>` element has a **_group-hover_** modifier which shows that, when hovering over the element with the **group** class, apply certain styles. It is also possible to [style based on sibling state](https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-sibling-state) using the **_peer_** class.

## Style Based on Children

In the case you needed to style a parent element based on the state or elements of its descendants, you can use the **_has-\*_** modifier.

There are many places where this could come in handy. Suppose you wanted to color the form’s border red when there are invalid input fields, like this:

![Sign in form with erroneous email and password fields indicated as red borders.](https://res.cloudinary.com/daty4gssm/image/upload/q_auto,f_auto,h_420/v1721739603/form_validation_errors_fxqiw8.webp 'form-validation-errors')

This effect can be achieved using the **_has-\[input:invalid\]:border-red-500_** class, which just checks if there is a descendant input element with the class **_invalid_**.

```jsx /has-[input:invalid]:border-red-500/
<div className='… … has-[input:invalid]:border-red-500'>
  <form className='space-y-6' action='#'>
    <h1 className='text-xl font-medium'>Sign in</h1>
    <div>
      <label htmlFor='email' className='…'>
        Email
      </label>
      <input
        type='email'
        name='email'
        id='email'
        className='… … invalid:border-red-500 invalid:text-red-500'
        placeholder='name@company.com'
        required
      />
    </div>
    <div>
      <label htmlFor='password' className='…'>
        Password
      </label>
      <input
        type='password'
        name='password'
        id='password'
        placeholder='••••••••'
        className='… … invalid:border-red-500 invalid:text-red-500'
        required
      />
    </div>
    <div className='…'>
      <a href='#' className='…'>
        Lost Password?
      </a>
    </div>
    <button type='submit' className='…'>
      Login to your account
    </button>
    <div className='…'>
      Not registered?{' '}
      <a href='#' className='…'>
        Create account
      </a>
    </div>
  </form>
</div>
```

## Conclusion

Hopefully, you find these tips helpful and will introduce these into your Tailwind workflow. I know that there are a lot of great features, maybe even more important than the ones I listed here, however these was the most helpful ones I have yet to discover (not counting in the most obvious Tailwind features, like media queries, dark mode etc.).

See you in the next one!
