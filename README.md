# hackEDU [![Build Status](https://drone.io/github.com/hackedu/frontend/status.png)](https://drone.io/github.com/hackedu/frontend/latest) [![Stories in Ready](https://badge.waffle.io/hackedu/frontend.png?label=ready&title=Ready)](http://waffle.io/hackedu/frontend) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/) ![Analytics](https://ga-beacon.appspot.com/UA-47724303-2/frontend/readme?pixel)

Welcome to hackEDU's website frontend. I'm served as a static site and
communicate with our [backend](https://github.com/hackedu/backend).

## Getting Started

Prerequisites:

* Ruby
* Compass
* Grunt
* npm
* Bower
* PhantomJS

Install npm dependencies:

    $ npm install

Install Bower dependencies:

    $ bower install

Install Selenium:

    $ ./node_modules/protractor/bin/webdriver-manager update

Run tests:

    $ grunt test

If they're green, you're all set up. If not, something has gone wrong.

## Usage

Start development server:

    $ grunt serve

Run test suite:

    $ grunt test

Build for distribution:

    $ grunt

## LICENSE

The MIT License (MIT)

Copyright (c) 2013 - 2014 hackEDU

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE
