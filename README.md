# Paul Le Tran dot com

[MIT licensed](https://github.com/PaulTran47/paultran47.github.io/blob/master/LICENCE.md).

<details>
  <summary>Table of contents</summary>
  <ul>
    <li>
      <a href="#overview">Overview</a>
      <ul>
        <li><a href="#notable-features">Notable features</a></li>
        <li><a href="#reporting-vulnerabilities">Reporting vulnerabilities</a></li>
      </ul>
    </li>
    <li><a href="#built-with">Built with:</a></li>
    <li><a href="#google-lighthouse-and-real-user-measurement-scores">Google Lighthouse scores</a></li>
    <li><a href="#acknowledgements">Acknowledgments</a></li>
  </ul>
</details>

---

## Overview

This repository hosts all assets and source code used to build the website
showing the internet who I am.

In the world of academia and economics, uniquely designed personal websites that
are also optimised for performance and best practices aren't common. My website
is an exception.

View it here: [Paul Le Tran dot com](https://paulletran.com/)

<p align="right">
  (<a href="#paul-le-tran-dot-com">back to top.</a>)
</p>

---

### Reporting vulnerabilities

If you discover a vulnerability/error/mistake in the production code of my
website, please [refer to the instructions found in SECURITY.md](https://github.com/PaulTran47/paultran47.github.io/blob/master/SECURITY.md)
for instructions on reporting these issues. I will then address the problem as
soon as possible.

<p align="right">
  (<a href="#paul-le-tran-dot-com">back to top.</a>)
</p>

---

### Notable features

Below are some features of my website that I feel are noteworthy:

* The website source code is entirely vanilla HTML5, CSS, and JS. This was
consciously done to make the source code (and all of its mistakes) completely
understandable to all programmers.

* Entire website is written in semantic HTML
  * Usage of div and span tags are strictly for styling purposes and kept at a minimum
  * Semantic HTML tags also comply with ARIA accessibility requirements (e.g.,
  sections and articles having headings)
  * Every img tag has a relevant alt attribute for both screen reader
  compatibility and legal requirements

* HTML5 and CSS code of every website page pass the W3C validators with no errors
  * HTML5 code is checked using the [Nu HTML checker](https://validator.w3.org/nu/)
  * Usage of the modal pseudo-class in reset.css results in the [W3C CSS validator](https://jigsaw.w3.org/css-validator/)
  to throw an error because the pseudo-class is currently in Selectors Level 4.
  However, because the pseudo-class works as intended in all modern browsers, I
  do not view this as an actual CSS code error.
  * W3C "validation" links are displayed in the footer of every website page
    * Links allow for quick re-validation of every page
    * I am not including the icons into my project sub-sites (e.g., [econ-grad-app-deadlines](https://github.com/PaulTran47/econ-grad-app-deadlines)).
    The reason for this is because these sub-sites are generated using the
    default GitHub Pages theme of [Cayman](https://github.com/pages-themes/cayman).
    As a result, the W3C validation results wouldn't be reflecting my own design
    and code.

* Entire website uses [JetBrains Mono](https://www.jetbrains.com/lp/mono/) as
its sole font. This choice is because the font is not only clean and legible (e.g.,
increased letter height), but has ligature support, italics support, wide
language support, and is both free and open source.
  * The font is also my font-of-choice for all development interfaces.

* Every website page is fully interactive within 2 seconds, including on 3G
mobile connections. This speed is achieved by:
  * Critical CSS for initial rendering of every page is inlined in the head tags.
    * All non-critical CSS preloaded and asynchronously loaded.
  * Web fonts (i.e., JetBrains Mono) are loaded with `font-display: optional;`.
  The website's fallback font, Courier New, has been tuned and optimised to
  mimic JetBrains Mono. This makes the web font "nice to have" rather than a
  critical component to experiencing the website. Thus, the font property and
  attribute prevents FOIT, but allows for JetBrains Mono to appear on first page
  view **if** it loads within ~100ms.
  * All JS is asynchronously loaded.
  * All graphics are served in compressed .webp format (with compressed .jpg as
  a fallback)
    * All graphics are lazily loaded for minimal FOIT.

* Entire website is designed to be responsive for almost all common display
resolutions, both desktop and mobile
  * This design covers displays as small as the JioPhone2 to as large as widescreen
  desktop monitors
  * Uncommon display resolutions such as the Galaxy Fold, Surface Duo, and Nest
  Hub are also supported

* Entire website is designed to be accessible for all input types
  * Every page, menu, and link can be navigated using a mouse, keyboard, or touch
  * Research and More pages feature live filtered search for publications with
  ARIA22 accessibility by explaining what occurs in the live search when
  keywords are typed and displaying number of results in real-time

* Every website page has a Google Lighthouse and real user measurement scores of
99-100/100 on both mobile and desktop platforms.
  * Google Lighthouse via Chrome DevTools and [Cloudflare Observatory](https://developers.cloudflare.com/speed/speed-test/)
  are included as synthetic performance metrics. Real user measurement is also provided
  by Cloudflare Observatory.
  * I am not including the Google Lighthouse scores of my project sub-sites
  (e.g., [econ-grad-app-deadlines](https://github.com/PaulTran47/econ-grad-app-deadlines)).
  This decision is because these sub-sites are generated using the default GitHub
  Pages theme of [Cayman](https://github.com/pages-themes/cayman). As a result, the
  scores wouldn't be reflecting my own design and code.
  * I only update the Google Lighthouse scores after a fundamental change in my
  website, such as major changes in the layout or coding semantics.
  * Chrome DevTools Google Lighthouse scores are saved without Cloudflare's [rocket-loader-min.js](https://developers.cloudflare.com/speed/optimization/content/rocket-loader/),
  [email-decode-min.js](https://developers.cloudflare.com/waf/tools/scrape-shield/email-address-obfuscation/),
  and [beacon.min.js}(https://developers.cloudflare.com/web-analytics/) enabled
  because Lighthouse considers these resources as render-blocking. However,
  real-world usage and PageSpeed Insights do not consider these resources as such.
  Therefore, I disable these resources in order to make the Lighthouse Scores more
  comparable.

* Favicon support for every platform (with different favicon embedded for night
mode support).

<p align="right">
  (<a href="#paul-le-tran-dot-com">back to top.</a>)
</p>

---

### Built with

* [Vanilla HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [Vanilla CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Vanilla JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [GitHub Pages](https://pages.github.com/) for hosting
* [Google Domains](https://domains.google/) for the awesome domain
* [CloudFlare](https://www.cloudflare.com/) for DNS management and security,
full SSL/TLS encryption mode, HTTPS enforcement, Argo smart routing, Brotli
compression, tiered cache, the fancy green lock :lock:, and a whole lot more
* [git](https://git-scm.com/) for source control

<p align="right">
  (<a href="#paul-le-tran-dot-com">back to top.</a>)
</p>

---

### Google Lighthouse and Real User Measurement scores

99-100/100 for every website page on both mobile and desktop platforms for
synthetic and real-world usage. You can't get anymore optimised than that
(technically you can, but marginal utility is negative at that point lol).

To view the full reports, please visit [this subdirectory](https://github.com/PaulTran47/paultran47.github.io/tree/master/performance/lighthouse)
and paste the respective JSON file into the [Lighthouse Report Viewer](https://googlechrome.github.io/lighthouse/viewer/).

<p align="right">
  (<a href="#paul-le-tran-dot-com">back to top.</a>)
</p>

---

### Acknowledgements

Below are the awesome resources used to make my website as optimised as possible:

* [Autoprefixer CSS](https://github.com/postcss/autoprefixer)
* [google-webfonts-helper](https://github.com/majodev/google-webfonts-helper)
* [font-style-matcher](https://github.com/notwaldorf/font-style-matcher)
* [FontSquirrel](https://www.fontsquirrel.com/tools/webfont-generator)
* [remedy.css](https://github.com/jensimmons/cssremedy)
* [reset.css](https://elad2412.github.io/the-new-css-reset/)
* [Minimal Google Analytics 4 Snippet with localstorage support](https://github.com/jahilldev/minimal-analytics)
(2kb v. 179kb+ when compiled with Google Compiler Service!)
* [Real Favicon Generator](https://github.com/RealFaviconGenerator)
* [jonasjacek's comprehensive robots.txt](https://www.ditig.com/robots-txt-template)
* [Hilman Ramadhan's live filtered search](https://css-tricks.com/in-page-filtered-search-with-vanilla-javascript/)
* [Harry Roberts's ct.css for optimising head tag elements](https://csswizardry.com/ct/)
* [Jonas Ohlsson Aden's critical path CSS generator](https://github.com/pocketjoso/penthouse)
* [Unminify](https://unminify.com/) and its wonderful CSS prettification for
quick updates of critical inline CSS
* [Kevin Powell's tutorial on CSS variables](https://www.youtube.com/watch?v=PHO6TBq_auI&list=PL4-IK0AVhVjOT2KBB5TSbD77OmfHvtqUi)
* [Google Squoosh](https://github.com/GoogleChromeLabs/squoosh) for image
compression and conversion using the best-in-class codecs

<p align="right">
  (<a href="#paul-le-tran-dot-com">back to top.</a>)
</p>

---
