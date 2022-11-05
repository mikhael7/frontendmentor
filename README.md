# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - News homepage solution](#frontend-mentor---news-homepage-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Toggle the mobile menu (requires some JavaScript)

### Screenshot

![screenshot](./screenshot.png)

### Links

- Solution URL: [Solutions here](https://www.frontendmentor.io/solutions/newshomepagemain-ZBUX_ExBCH)
- Live Site URL: [Live here](https://vercel.com/mikhael7/news-homepage-main/8DKDsHGaehSZf7R4UoERKoMFfaGc)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

Hamburger menu

```html
<button id="button-open" class="sidebar_btn-open">
  <image src="./assets/images/icon-menu.svg" alt="hamburger" />
</button>
```

Declare variable in CSS

```css
--nav-width-mobile: 70%;
```

Import font face

```css
@font-face {
  font-family: "Inter";
  src: url("./assets/fonts/static/Inter-Regular.ttf") format("truetype");
}
@font-face {
  font-family: "Inter";
  src: url("./assets/fonts/static/Inter-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Inter";
  src: url("./assets/fonts/static/Inter-ExtraBold.ttf") format("truetype");
  font-weight: 800;
}
```

Open Close Hamburger Menu

```js
btnMenu.addEventListener("click", () => {
  sidebar.classList.add("nav-show");
  overlay.style.display = "block";
});
btnClose.addEventListener("click", () => {
  sidebar.classList.remove("nav-show");
  overlay.style.display = "none";
});
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

- HTML best practices
- CSS Child component selectors
- JS Hamburger menu

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [CSS Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) - This helped me for simplified css. I really liked this pattern and will use it going forward.
- [HTML Heading Order](https://dequeuniversity.com/rules/axe/4.3/heading-order?application=axeAPI) - This is an amazing article which helped me finally understand the heading order. I'd recommend it to anyone still learning this concept.

## Author

- Frontend Mentor - [@mikhael7](https://www.frontendmentor.io/profile/@mikhael7)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.
