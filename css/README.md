[GitHub repo](https://github.com/PaulTran47/paultran47.github.io).

[MIT licensed](https://github.com/PaulTran47/paultran47.github.io/blob/master/LICENCE.md).

---

## Overview
All CSS files are preloaded and asychronously loaded. Thanks to the file sizes, the following loading order is usually obeyed:

1. [remedy.css](https://github.com/jensimmons/cssremedy): By Jen Simmons; similar to Nicolas Gallagher's [Normalize.css](https://necolas.github.io/normalize.css/) in the sense that remedy.css tries to "fix" differences in CSS implementation amongst different browsers. However, remedy.css sets CSS properties or values to what they would be if the CSSWG were creating the CSS today.

2. [reset.css](https://elad2412.github.io/the-new-css-reset/): By Elad Shechter; a "modern" take of Eric Meyer's [reset.css](https://meyerweb.com/eric/tools/css/reset/). It's much more lightweight, and is using modern CSS syntax.

3. style.css: Houses all of the core and custom CSS used in building this website. All critical CSS from this sheet is inlined in the heads of each individual page. Non-critical CSS can be found exclusively here (critical CSS is also in this sheet for redundancy's sake).

---