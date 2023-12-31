# SongStruct

This is an old project that has been refactored. See SongStrudel: https://github.com/BKSchatzki/songstrudel

A simple song templater to help music producers minimize decision fatigue. Plans to implement a backend so users can save and share templates, with local storage as the intermediary.

**Link to project:** https://songstruct.netlify.app

![Songstruct](https://res.cloudinary.com/djqsm7sz5/image/upload/v1691468692/bks-portfolio/songstruct_z756ky.jpg)

## How It's Made:

**Tech used:** Vite, React, Tailwind, DaisyUI

The architecture behind this app is very front-end focused; headers and rows are generated by mapping through an array of DaisyUI color classes (e.g. bg-primary, bg-secondary, bg-accent, etc.) that have been passed as props down to the children. The nice thing about this is that it allows me to change the number of rows and their styling simultaneously.

## Optimizations

The aforementioned approach comes with a set of issues. Firstly, Tailwind applies classes by watching what is inside the class and className attributes, so when classes are written as strings in an array and passed as props, Tailwind sometimes purges those classes (or doesn't bundle them in the first place). Secondly, this creates an unnecessary abstraction that might make the API more challenging to maintain.

## Lessons Learned:

It is likely that this code will receive a full refactor in the future. As the front end crystallized and more ideas for features began to go onto the roadmap, it became evident that this app is better built back-to-front rather than front-to-back. In the refactor, I will be defining my models before anything else.

## Examples:

Take a look at some more examples in my portfolio:

**BK Chat:** https://github.com/BKSchatzki/bk-chat

**C Flat Run:** https://github.com/BKSchatzki/cflatrun-landingpage

**Nick B. Schatzki:** https://github.com/BKSchatzki/nbs-portfolio

**SongStrudel:** https://github.com/BKSchatzki/songstrudel
