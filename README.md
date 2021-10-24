# Paul Le Tran dot com

[MIT licensed](https://github.com/PaulTran47/paultran47.github.io/blob/master/LICENCE.md).

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#overview">Overview</a>
      <ul>
        <li><a href="#notable-features">Notable features</a></li>
        <li><a href="#built-with">Built with</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

=========================================================================

## Overview
=========================================================================

This repository hosts all assets and source code used to build the website showing the internet who I am.

In the world of academia and economics, uniquely designed personal websites that are also optimised for performance and best practices aren't common. My website is an exception.

View it here: [Paul Le Tran dot com](https://paulletran.com/)

<p align="right">
  (<a href="#paul-le-tran-dot-com">back to top.</a>)
</p>

=========================================================================

### Notable features
=========================================================================

Below are some features of my website that I feel are noteworthy:

* The website source code is entirely vanilla HTML5, CSS, and JS. This was consciously done to make the source code (and all of its mistakes) completely understandable to all programmers.

* Every website page is designed to be responsive for almost all common display resolutions, both desktop and mobile.
  * This includes displays as small as the iPhone4 to as large as widescreen desktop monitors.
  * Uncommon display resolutions such as the Galaxy Fold, Surface Duo, and Nest Hub are also supported.
  
* Every website page is optimised for slow connections (e.g., 3G network connections). This is achieved by:
  * Having all HTML5/CSS/JS files auto-minified upon user delivery;
  * Critical CSS for initial rendering of every page is inlined in the head tags.
    * All non-critical CSS preloaded and asynchronously loaded.
    * All JS is asynchronously loaded.
  * All graphics are served in compressed .webp format (with compressed .jpg as a fallback)
    * All graphics are lazily loaded for minimal FOIT.
  * HTML5 and CSS code pass the W3C validator with no errors.
    * An exception is the "line-sizing" CSS property in remedy.css. This is only a CSSWG draft, but is still included for futureproofing.
  * __Every website page has a Google Lighthouse score of 100/100 on both mobile and desktop platforms__.

<p align="right">
  (<a href="#paul-le-tran-dot-com">back to top.</a>)
</p>

=========================================================================

### Built with:
=========================================================================

* [Vanilla HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML);<br>
* [Vanilla CSS](https://developer.mozilla.org/en-US/docs/Web/CSS);<br>
* [Vanilla JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript);<br>
* [GitHub Pages](https://pages.github.com/) for hosting;<br>
* [Google Domains](https://domains.google/) for the awesome domain;<br>
* [CloudFlare](https://www.cloudflare.com/) for the SSL certificates and fancy green lock :lock:;<br>
* [git](https://git-scm.com/) for source control.

<p align="right">
  (<a href="#paul-le-tran-dot-com">back to top.</a>)
</p>

=========================================================================

=========================================================================

# Google Lighthouse scores
=========================================================================

100/100 for every website page on both mobile and desktop platforms. You can't get anymore optimised than that.

To view the full reports, please visit [this subdirectory](https://github.com/PaulTran47/paultran47.github.io/tree/master/lighthouse_reports) and paste the respective JSON file into the [Lighthouse Report Viewer](https://googlechrome.github.io/lighthouse/viewer/).

<p align="right">
  (<a href="#paul-le-tran-dot-com">back to top.</a>)
</p>

=========================================================================