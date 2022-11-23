# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - NFT preview card component solution](#frontend-mentor---nft-preview-card-component-solution)
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

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![screenshot](./screenshot.png)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

### Links

- Solution URL: [Solution URL here](https://www.frontendmentor.io/solutions/nft-preview-card-component-TJPwCz0ANG)
- Live Site URL: [Live site URL here](https://nft-preview-card-component-mikhael7.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

Avatar placement using grid template, horizontally centering text and avatar image.

```css
main>article>div.card>div.card-footer {
    border-top: 1px solid var(--color-line);
    margin-top: 1rem;
    padding-top: 1rem;
    display: grid;
    grid-template-rows: 1fr;
    align-items: center;
    justify-content: start;
    gap: 1rem;
}

main>article>div.card>div.card-footer>img {
    grid-column: 1/2;
    grid-row: 1;
    width: 2rem;
    border: 1px solid var(--color-white);
    border-radius: 100%;
}

main>article>div.card>div.card-footer>span {
    grid-column: 2;
    grid-row: 1;
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

try using more grid template if repeatable component have consistent size

### Useful resources

- [Vertical align example](https://maxdesign.com.au/articles/vertical-align.html) - This is some example of vertical align to centering image or text span.
- [MDN for vertical align](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align) - This helped documentation of the vertical align (MDN)

## Author

- Frontend Mentor - [@mikhael7](https://www.frontendmentor.io/profile/@mikhael7)
- Github - [@mikhael7](https://github.com/mikhael7)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.
