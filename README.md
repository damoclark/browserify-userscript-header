
# browserify-userscript-header
=================

[Browserify](http://browserify.org/) plugin for prepending a file containing a
static [userscript](https://openuserjs.org/about/Userscript-Beginners-HOWTO)
metadata block to the output bundle.

<p/>
<img src="https://nodei.co/npm/browserify-userscript-header.png?downloads=true&stars=true" alt=""/>

<p/>
<img src="https://david-dm.org/damoclark/browserify-userscript-header.svg" alt=""/>

# Description

If you use npm and browserify to build and bundle your userscripts, then
[browserify-userscript-header](https://github.com/damoclark/browserify-userscript-header)
is a simple plugin that allows you to add the userscript metadata block to the
top of your generated bundle file, as used by
[Greasemonkey](http://www.greasespot.net/) and
[Tampermonkey](https://tampermonkey.net/).

Over time, additional features may be included specifically to assist with the
bundling of
[userscripts](https://openuserjs.org/about/Userscript-Beginners-HOWTO).


# Installation

```bash
npm install browserify browserify-userscript-header --save-dev
```

# Usage

```bash
browserify -p [ browserify-userscript-header --file userscript.meta.js ] \
             -o userscript.user.js index.js
```

# Licence
-------

browserify-userscript-header -- Browserify Plugin for Adding a Headline Comment
to Bundle Copyright (c) 2017 Damien Clark <damo.clarky@gmail.com>

Licensed under the terms of the GPLv3 (https://spdx.org/licenses/GPL-3.0.html)

This program is free software: you can redistribute it and/or modify it under
the terms of the GNU General Public License as published by the Free Software
Foundation, version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY
WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with
this program. If not, see <http://www.gnu.org/licenses/>.

Portions of code have been reproduced from
https://github.com/rse/browserify-header
and are Copyright (c) 2014 Ralf S. Engelschall <rse@engelschall.com>
