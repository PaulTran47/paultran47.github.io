# Paul Le Tran dot com

[MIT licensed](https://github.com/PaulTran47/paultran47.github.io/blob/master/LICENCE.md).

<details>
  <summary>Table of contents</summary>
  <ul>
    <li>
      <a href="#overview">Overview</a>
      <ul>
        <li><a href="#notable-features">Notable features</a></li>
      </ul>
    </li>
    <li><a href="#built-with">Built with</a></li>
    <li><a href="#google-lighthouse-scores">Google Lighthouse scores</a></li>
    <li><a href="#acknowledgements">Acknowledgments</a></li>
  </ul>
</details>

---

## Overview

This repository hosts all assets and source code used to build the website showing the internet who I am.

In the world of academia and economics, uniquely designed personal websites that are also optimised for performance and best practices aren't common. My website is an exception.

View it here: [Paul Le Tran dot com](https://paulletran.com/)

<p align="right">
  (<a href="#paul-le-tran-dot-com">back to top.</a>)
</p>

---

### Notable features

Below are some features of my website that I feel are noteworthy:

* The website source code is entirely vanilla HTML5, CSS, and JS. This was consciously done to make the source code (and all of its mistakes) completely understandable to all programmers.

* Entire website is written in semantic HTML.
  * Usage of div and span tags are strictly for styling purposes and kept at a minimum.
  * Semantic HTML tags also comply with ARIA accessibility requirements (e.g., sections and articles having headings).
  * Every img tag has a relevant alt attribute for both screen reader compatibility and legal requirements.

* Entire website is designed to be responsive for almost all common display resolutions, both desktop and mobile.
  * This includes displays as small as the iPhone4 to as large as widescreen desktop monitors.
  * Uncommon display resolutions such as the Galaxy Fold, Surface Duo, and Nest Hub are also supported.

* Entire website is designed to be accessible for all input types.
  * Every page, menu, and link can be navigated using a mouse, keyboard, or touch.
  * Research page features live filtered search for publications with ARIA22 accessibility by explaining what occurs in the live search when keywords are typed and displaying number of results in real-time.

* Entire website uses [JetBrains Mono](https://www.jetbrains.com/lp/mono/) as its sole font. This is because the font is not only clean and legible (this is especially helped by the increased letter height), but has ligature support, italics support, wide language support, and is both free and open source.
  * The font is also my font-of-choice for all development interfaces, since it's a typeface designed for development.

* Every website page is fully interactive within 2 seconds, including on 3G mobile connections. This is achieved by:
  * Having all HTML5/CSS/JS files auto-minified upon user delivery;
  * Critical CSS for initial rendering of every page is inlined in the head tags.
    * All non-critical CSS preloaded and asynchronously loaded.
  * Web fonts (i.e., JetBrains Mono) are loaded with `font-display: optional;`. The website's fallback font, Courier New, has been tuned and optimised to mimic JetBrains Mono. This makes the web font "nice to have" rather than a critical component to experiencing the website. Thus, the font property and attribute prevents FOIT, but allows for JetBrains Mono to appear on first page view **if** it loads within ~100ms.
  * All JS is asynchronously loaded.
  * All graphics are served in compressed .webp format (with compressed .jpg as a fallback)
    * All graphics are lazily loaded for minimal FOIT.
  * HTML5 and CSS code pass the W3C validator with no errors.
    * An exception is the "line-sizing" CSS property in remedy.css. This is only a CSSWG draft, but is still included for futureproofing.

* Every website page has a Google Lighthouse score of 100/100 on both mobile and desktop platforms.
  * I am not including the Google Lighthouse scores of my project subsites (e.g., [econ-grad-app-deadlines](https://github.com/PaulTran47/econ-grad-app-deadlines)). This is because these subsites are generated using the default GitHub Pages theme of [Cayman](https://github.com/pages-themes/cayman). As a result, the scores wouldn't be reflecting my own design and code.
  * I only update the Google Lighthouse scores after a fundamental change in my website, such as major changes in the layout, content, or coding semantics.

* Favicon support for every platform (with different favicon embedded for night mode support).

<p align="right">
  (<a href="#paul-le-tran-dot-com">back to top.</a>)
</p>

---

### Built with

* [Vanilla HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML);
* [Vanilla CSS](https://developer.mozilla.org/en-US/docs/Web/CSS);
* [Vanilla JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript);
* [GitHub Pages](https://pages.github.com/) for hosting;
* [Google Domains](https://domains.google/) for the awesome domain;
* [CloudFlare](https://www.cloudflare.com/) for DNS management and security, full SSL/TLS encryption mode, HTTPS enforcement, Argo smart routing, auto-minification, Brotli compression, tiered cache, the fancy green lock :lock:, and a whole lot more;
* [git](https://git-scm.com/) for source control.

<p align="right">
  (<a href="#paul-le-tran-dot-com">back to top.</a>)
</p>

---

### Google Lighthouse scores

100/100 for every website page on both mobile and desktop platforms. You can't get anymore optimised than that.

To view the full reports, please visit [this subdirectory](https://github.com/PaulTran47/paultran47.github.io/tree/master/lighthouse_reports) and paste the respective JSON file into the [Lighthouse Report Viewer](https://googlechrome.github.io/lighthouse/viewer/).

<p align="right">
  (<a href="#paul-le-tran-dot-com">back to top.</a>)
</p>

---

### Acknowledgements

Below are the awesome resources used to make my website as optimised as possible:

* [Autoprefixer CSS](https://github.com/postcss/autoprefixer);
* [google-webfonts-helper](https://github.com/majodev/google-webfonts-helper);
* [font-style-matcher](https://github.com/notwaldorf/font-style-matcher);
* [FontSquirrel](https://www.fontsquirrel.com/tools/webfont-generator);
* [remedy.css](https://github.com/jensimmons/cssremedy);
* [reset.css](https://elad2412.github.io/the-new-css-reset/);
* [Minimal Google Analytics 4 Snippet with localstorage support](https://github.com/jahilldev/minimal-analytics) (2kb v. 179kb+ when compiled with Google Compiler Service!);
* [Real Favicon Generator](https://github.com/RealFaviconGenerator);
* [jonasjacek's comprehensive robots.txt](https://www.ditig.com/robots-txt-template).
* [Hilman Ramadhan's live filtered search](https://css-tricks.com/in-page-filtered-search-with-vanilla-javascript/);
* [Harry Roberts's ct.css for optimising head tag elements](https://csswizardry.com/ct/);
* [Unminify](https://unminify.com/) and its wonderful CSS prettification for quick updates of critical inline CSS.
* [Kevin Powell's tutorial on CSS variables](https://www.youtube.com/watch?v=PHO6TBq_auI&list=PL4-IK0AVhVjOT2KBB5TSbD77OmfHvtqUi).

<p align="right">
  (<a href="#paul-le-tran-dot-com">back to top.</a>)
</p>

---
