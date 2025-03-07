# JS

[GitHub repo](https://github.com/paultran47/paultran47.github.io).

[MIT licensed](https://github.com/paultran47/paultran47.github.io/blob/master/LICENCE.md).

---

## Overview

The following JS files are minified and asynchronously loaded, but wait until
the HTML is fully parsed before executing via `defer`:

1. lazyload-css.js: Functionality to lazy-load non-critical inline CSS and works
with any strict Content Security Policy that disallows `unsafe-inline`.

2. mobile-menu.js: Functionality of the mobile hamburger menu

3. lazyload-img.js: Functionality for lazy loading images that are below the fold
    1. IntersectionObserver API is used to determine if an image is below or
  above the fold
    2. Separate function that then replaces the placeholder images with the
  higher resolution images

4. filteredsearch-aria22.js: Functionality for filtered live search with ARIA22 accessibility.
    1. Search is case-sensitive and whitespace-sensitive.

5. minimal-analytics.js:
[James Hill's Minimal Google Analytics 4 Snippet withlocalstorage support](https://github.com/jahilldev/minimal-analytics)
(2kb v. 179kb+ when compiled with Google Compiler Service!)

---
