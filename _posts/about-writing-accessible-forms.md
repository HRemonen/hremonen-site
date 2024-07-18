---
title: 'About Writing Accessible Forms'
coverImage: 'https://res.cloudinary.com/daty4gssm/image/upload/v1721216891/photo-1633502401680-e2955cc6aca6_xgr6yn.jpg'
coverImageAttribute: 'Photo by [Markus Spiske](https://unsplash.com/@markusspiske)'
excerpt: 'In order for users to know how to fill out a form, it has to be accessible. For the most parts semantic HTML offers everything that is needed to succeed in this. Even thought this is the case, mostly forms are not that accessible after all by design choices or just by bad coding practices. In this article we will cover mostly everything that is needed in order to write accessible forms.'
date: '2024-06-03'
author:
  name: Henri Remonen
featured: false
ogImage:
  url: 'https://res.cloudinary.com/daty4gssm/image/upload/v1721216891/photo-1633502401680-e2955cc6aca6_xgr6yn.jpg'
categories:
  - 'accessibility'
  - 'aria'
  - 'forms'
keywords:
  - 'accessibility'
  - 'aria'
  - 'form accessibility'
  - 'form group accessibility'
  - 'form label accessibility'
  - 'form screen reader'
  - 'form validation'
  - 'html'
  - 'screen reader'
  - 'semantic html'
  - 'wcag'
---

For us to know how to fill out a form, it has to be accessible. For most parts, this means that we know what we are supposed to fill in. This is done using the following techniques:

- Providing labels for corresponding input elements.

- Labeling groups of input elements.

- Giving necessary instructions and hints to aid the user perform.

- Preventing erroneous usage and other errors.

- Validating the users’ input and giving feedback.

When dealing with more interactive elements it’s oftentimes also needed to give a thought to how the focus is managed, giving [ARIA](https://www.incluvate.com/blog/aria-what-every-developer-needs-to-know/) names, roles, and values, and introducing ARIA live announcements if needed.

These are the topics we are trying to cover here. Before we do I want to give you some food for thought with an example below.

Imagine you have spent hours on a web shop selecting items in your shopping cart from the latest sale. When you are ready to pay up and fill in the shipping information you are redirected to a web page with a form that has no explanation of what which field represents. This makes the shopping experience nearly impossible to finish.

![Billing and delivery information form which has input fields without any labels to identify what's excepted to input.](images/form_without_labels-1.png)

In the real world, you would never see something like this because this means the business is out of business quickly. So why do we allow the same thing to happen for let’s say – screen reader users?

We shouldn't so let's start to look how we can prevent this from happening.

## Labels

Labels assist users in completing the form. To succeed in this the labels must be clear, informative, and meaningful. Explicitly describe the information that you are expecting the user to input. For example, if we are expecting the user to input a name, we might specify that we want the user to input the first and last name.

There are a few ways to provide a label for an input element. A label is programmatically associated with a certain input element, and it provides the input with something that is called the accessible name. The most prominent way is to use the native <label> element. This is the exact purpose of the whole element and thus it will provide the most features – for example, pointer device users might click on the label element to focus on the input element. This increases the [click target size](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) (WCAG 2.5.8) which aids users with tremors or other motor disabilities as well as mobile users.

```html {2}
<p>
  <label htmlFor="name">Name (First and Last):</label>
  <input type="text" id="name" />
</p>
```

Other ways to provide an accessible name for an input are:

With an **aria-labelledby** – Using any visible content as the label for input is possible with the aria-labelledby attribute. However, using aria-labelledby does not give the added click target size of the native label element.

```html /aria-labelledby/
<p>
  <span id="name">Name (First and Last):</span>
  <input type="text" aria-labelledby="name" />
</p>
```

With an **aria-label** – If for some reason there is no visible content available for the input label, the aria-label attribute might be used. However, the aria-label does not give an added click target size and it is only available for screen reader users.

```html /aria-label/
<input type="text" aria-label="Name (First and Last)" />
```

With a **title** – The title attribute might be used to give an accessible name, but I would not recommend that. The title is invisible and only provides a tooltip on hover for mouse users undermining usability.

With a **Placeholder** – While it is technically possible to give an accessible name using the placeholder attribute, I would not stress enough how bad a solution this is. Placeholder should be used as a short hint for the input element alongside with actual label element. Problems using the placeholder as a label include the placeholder disappearing on focus and the default style contrast ratio failures.

Keep in mind that aria attributes will override other information when the accessible name is created. This is why aria attributes must convey the same information as the user sees.

### Labels Should Always Be Visible

While tempted to get rid of the labels for a “cleaner” visual representation, hiding the labels will bring issues. A widely used technique is to use placeholder attributes as the substitute for labels, but as previously mentioned this is bad practice. The better alternative would be to style the label element to visually look like the placeholder element for a cleaner look. An example of this can be found in the Material UI TextField element.

When styling labels, color contrast and other accessibility requirements apply also. You might even use icons or images as labels in situations where the visual icon or image is self-evident. Using icons or images as labels you must provide alternative text or aria-labels to produce accessible names. Self-evident visual labels might be a search input with an icon of a magnifying glass as the label.

## Groups of Inputs

Sometimes it’s necessary to provide further information about some inputs. Usually, these inputs are somehow related to each other such as radio buttons for a question or gathering users’ personal information regarding shipping.

The rules of labels also apply to the group labels; the labels need to be meaningful, they must be programmatically associated with the input elements, they must be visible always, and they must be close to the input elements.

We can group inputs using native HTML or ARIA.

### Grouping Form Elements with HTML

Let’s first look at the native HTML solution, which includes the use of <fieldset> and <legend> elements.

```html /fieldset/ /legend/
<form>
  <fieldset>
    <legend>Shipping address</legend>
    <p>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" />
    </p>
    <p>
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" />
    </p>
    <p>
      <label htmlFor="address">Address:</label>
      <input type="text" id="address" />
    </p>
    <p>
      <label htmlFor="city">City:</label>
      <input type="text" id="city" />
    </p>
    <p>
      <label htmlFor="zip">Zip:</label>
      <input type="text" id="zip" />
    </p>
  </fieldset>
</form>
```

The <fieldset> element groups the form elements and adds a visual border around the elements. Applying the <legend> element we manage to programmatically label the group elements. While the <legend> element is not per se enforced by WCAG it’s still needed to provide the accessible name for the <fieldset>. Using an image element inside the legend is possible when provided with sufficient alt attribute.

### Grouping Form Elements with ARIA

We can also group the form elements using ARIA by using some wrapper element such as <div> and giving it the correct `role=”group”`. Note that using this method we must give the accessible name for the group using the aria-labelledby attribute.

```html /role="group"/
<h2 id="shipping-section-heading">Shipping address</h2>
<div role="group" aria-labelledby="shipping-section-heading">
  <p>
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" />
  </p>
  <p>
    <label htmlFor="email">Email:</label>
    <input type="text" id="email" />
  </p>
  <p>
    <label htmlFor="address">Address:</label>
    <input type="text" id="address" />
  </p>
  <p>
    <label htmlFor="city">City:</label>
    <input type="text" id="city" />
  </p>
  <p>
    <label htmlFor="zip">Zip:</label>
    <input type="text" id="zip" />
  </p>
</div>
```

This will not produce visual grouping around the input elements and some screen readers do not support the ARIA role group.

## Instructing the Users

Instructions meant for the users to fill in the form, information about required fields, or other descriptions MUST be visible, programmatically visible always, and adjacent to the fields or field groups.

Screen reader users probably won’t notice any text that is not programmatically associated with some input or group inside the <form> elements which is why it should be avoided to provide any critical information in such a manner.

Examples of giving instructions correctly:

For grouped input elements the instructions might be added to the <legend> element if the instruction is short.

```html /(Required)/
<form>
  <fieldset>
    <legend>Shipping address (Required)</legend>
    <p>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" />
    </p>
    <p>
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" />
    </p>
    <p>
      <label htmlFor="address">Address:</label>
      <input type="text" id="address" />
    </p>
    <p>
      <label htmlFor="city">City:</label>
      <input type="text" id="city" />
    </p>
    <p>
      <label htmlFor="zip">Zip:</label>
      <input type="text" id="zip" />
    </p>
  </fieldset>
</form>
```

Using **aria-describedby** attribute to add the instructions. For grouped input elements giving the aria attribute to the first input element might be sufficient.

```html /aria-describedby/
<form>
  <fieldset>
    <legend>Registeration</legend>
    <p>
      <label htmlFor="email">Email address:</label>
      <input type="email" id="email" />
    </p>
    <p id="password-instruction">Password must contain 8 characters</p>
    <p>
      <label htmlFor="password">Password:</label>
      <input
        aria-describedby="password-instruction"
        type="password"
        id="password"
      />
    </p>
    <p>
      <label htmlFor="confirm-password">Confirm password:</label>
      <input type="password" id="confirm-password" />
    </p>
  </fieldset>
</form>
```

For single input elements, the instruction can be given per input field.

```html {4}
<form>
  <p>
    <label htmlFor="password">Password:</label>
    <input
      aria-describedby="password-instruction"
      type="password"
      id="password"
    />
  </p>
  <p id="password-instruction">Password must contain 8 characters</p>
</form>
```

When providing instructions remember to take other accessibility requirements into account as usual!

### Required Fields Should be Unambiguous

Unambiguously identifying required fields helps the users to prevent errors. To fully support every user, we must programmatically and visually distinguish required fields from non-required ones.

There are multiple ways to provide visual cues about required fields:

- Use the text “(Required)” in the input label.

- Using asterisks “\*” in the input label is a widely used convention.

- Using font icons or other icons to visually label required fields. These can be hidden by the screen readers as we MUST also programmatically mark the required fields. However, take into consideration that if you instruct the user that the fields with the asterisks icon are required, but you hide the asterisks, then you just confuse the users.

<figure>

![Login page with instructions about * (asterisk) indicating required fields.](images/required_fields_example.png 'required_fields_example')

<figcaption>

Required fields are visually marked with an asterisk and additional instruction is provided about the asterisks role.

</figcaption>

</figure>

Marking the field required programmatically can be done in two ways:

- Using the **aria-required** attribute. This method does not add any additional visual elements to the field. Screen readers can distinguish the field as required and will announce “required” after the input’s accessible name. Supplement the fields with visual cues when using this method.

- Using the native HTML **required** attribute. Screen readers can announce the field as required, like when using the **aria-required**. This method will however block the user from submitting the form if the field is not filled in. Some browsers will display an error message when submitting an empty required field, however custom error handling should be added to support every user.

<figure>

![Browsers' automatic error message about required fields which says "Please fill out this field."](images/Empty-required-field-error-300x128.png 'Empty-required-field-error')

<figcaption>

Example of default error message for form fields that are required but left empty on submit.

</figcaption>

</figure>

### Provide Autofill Features

Providing autofill features will further aid our users in minimizing the erroneous usage and ambiguity of certain input fields. Browsers and screen readers can distinguish these fields to accept certain types of information (usually personal information such as address, email, name, password, etc.) and to autofill the fields for the user.

HTML introduces the **autocomplete** attribute for this functionality. Autocomplete can be given to input elements such as <input>, <select>, or <textarea> and also to the owning <form> element. The values for autocomplete comes from past values entered by the user, or pre-configured values. The list of valid autocomplete tokens can be found on [MDN autocomplete docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#token-list).

For example, we might have a login page where we would like to allow the **email** and **password** fields to be autocompleted:

```html /autoComplete/
<form method="POST">
  <label htmlFor="email">Email</label>
  <input id="email" autocomplete="email" />
  <label htmlFor="password">Password</label>
  <input id="password" type="password" autocomplete="current-password" />
</form>
```

Which would look something like this for the user:

<figure>

![Login page form with the fields email and password autofilled by the browser.](images/Autocompleted-login-page-300x248.png 'Autocompleted-login-page')

<figcaption>

Login page where email and password fields are autocompleted by the browser.

</figcaption>

</figure>

The yellow background on the input fields indicates that the values are provided by the autocomplete functionality.

## Error Handling and Form Validation

The things we have covered so far have taught us many best practices. Even though we give the best labels, descriptions, and instructions users are going to make errors and mistakes. However by giving detailed information about what we are expecting the user to input we are making the form accessible but also we are preventing errors, which is the first step in error handling.

When the user inputs false values or omits fields it’s not the end of the world. We’ve tried to prevent the error and it still happened and now it is paramount that we alert the user about the invalid values and help them correct them. We will go through some design patterns that are going to do just that – each little differently.

### Validation Summary Pattern

The validation summary pattern is a static validation method whereupon the form submission the input values are checked and validated:

1. The form values are validated preferably on the backend service and the invalid field names are returned to the frontend service.

2. The error summary component is created at the beginning of the form element.

3. The focus is moved to the error summary heading.

4. The error summary component has to display a list of the errors found in the form. Each error must represent a field in the form in the same order as it appears in the form. The error must also have a description, that will help the user to fix the error. Usually, this description will act as a link to the corresponding invalid field.

5. The user might use the description link to jump to the invalid field.

6. Repeat if invalid values are submitted again.

<figure>

![Validation summary on the beginning of a form after submitting invalid field values.](images/Validation-Summary-Pattern-300x259.png 'Validation-Summary-Pattern')

<figcaption>

Example of proper implementation of the validation summary pattern. Error summary receives the focus after submission and lists all of the errors in the form with links to the fields that are invalid. Each field also displays an inline error message accompanied by a red color and an error icon.

</figcaption>

</figure>

Technical implementation is up to the developers as long as the summary is fully accessible. Some details might include:

- Invalid fields have **aria-invalid=”true”**.

- The focus is moved to the error summary component.

- Provide a list of errors and associate each error with the corresponding form field.

- Error messages have to be displayed so sighted users know how to fix the problems.

- Provide information using color, text, and icons. Remember to supply needed aria values also if needed.

- Update the page title to display the state of the form.

### Focus on the First Error Pattern

Focus on the first error pattern is also a static method whereupon the form submission the input values are checked and validated:

1. The form values are validated preferably on the backend service and the invalid field names are returned to the frontend service.

2. Inline error messages are created for each invalid field. Also, a descriptive tooltip might be helpful to display further assistance.

3. The focus is moved to the first invalid field on the form.

4. Repeat if invalid values are submitted again.

<figure>

![First name and Last name form fields where the input value for first name is correct and the input value for the last name field is empty. The last name field is focused and shows error message "Please enter your last name".](images/Focus-on-first-error-pattern-1024x219.png 'Focus-on-first-error-pattern')

<figcaption>

Example of proper implementation of the focus on the first error pattern. Invalid fields receive inline error messages and the focus is shifted to the first invalid field.

</figcaption>

</figure>

Technical implementation is similar to the error summary pattern. Some details might include:

- Invalid fields have **aria-invalid=”true”**.

- Focus is moved to the first invalid field.

- Provide a list of errors and associate each error with the corresponding form field.

- Error messages have to be displayed adjacent to the invalid field and programmatically associated with the corresponding field.

- Provide information using color, text, and icons. Remember to supply needed aria values also if needed.

- Update the page title to display the state of the form.

### Real-time Validation Pattern

In some cases validating the users’ input is possible in real-time. Real-time validation helps communicate with the user if they are filling in the correct information. This can save some trouble and time further down the line.

Examples of where real-time validation can be useful are validating patterns such as password length, does email contains a @ character, or whether the inputted value is of some pre-defined format.

In the example video, a vehicle register plate number is validated to match the pattern of three letters followed by a hyphen and one to three numbers. This is easy to validate client side but won’t validate that the register plate exists for real in the vehicle registration database. That could be done by validating further in the backend service as it would take too much time to validate on the frontend.

Technical implementation might include:

- Provide an **aria-invalid** attribute that matches the state of the input field.

- Provide helper text that displays the correct format that is expected.

- Provide live feedback on the state of the input visually. For invalid display descriptive error messages and also display information when the input is valid.

- Provide **aria-live** announcements. The aria-live announcements should be de-bounced for example after 2 seconds of the user not typing so that the announcements are not read after every keystroke.

Real-time validation might cause issues for screen reader users, especially blind users. These users oftentimes explore the form before filling it, which might trigger validation errors before the user has input any information. This is not the intended behavior and should be taken into account when creating these forms.
