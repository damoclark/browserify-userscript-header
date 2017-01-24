/*
	browserify-userscript-header -- Browserify plugin for prepending a userscript
	metadata block to the output bundle.
	Copyright (c) 2017 Damien Clark <damo.clarky@gmail.com>
	
	Licensed under the terms of the GPLv3 (https://spdx.org/licenses/GPL-3.0.html)

	This program is free software: you can redistribute it and/or modify it under
	the terms of the GNU General Public License as published by the Free Software
	Foundation, version.
	
	This program is distributed in the hope that it will be useful, but WITHOUT
	ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
	FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
	
	You should have received a copy of the GNU General Public License along with
	this program. If not, see <http://www.gnu.org/licenses/>.
	
	Portions of code have been reproduced from
	https://github.com/rse/browserify-header
	and are Copyright (c) 2014 Ralf S. Engelschall <rse@engelschall.com>
*/

var fs      = require("fs") ;
var through = require("through2") ;

/*  export a Browserify plugin  */
module.exports = function (browserify, opts) {
	/*  determine filename of header file  */
	if (typeof opts.file !== "string") {
		throw new Error("browserify-header: " +
		"Missing [ --file {headerfilename} ] option") ;
	}
	var filename = opts.file ;

	/*  load header file  */
	var header ;
	try {
		header = fs.readFileSync(filename, "utf8") ;
	}
	catch (e) {
		throw new Error("browserify-header: " +
		"failed to read file \"" + filename + "\": " + e.message) ;
	}

	/*  create a transform stream  */
	var createStream = function () {
		var firstChunk = true ;
		var stream = through.obj(function (buf, enc, next) {
			if (firstChunk) {
				/*  insert the header as the first chunk  */
				this.push(new Buffer(header)) ;
				firstChunk = false ;
			}
			this.push(buf) ;
			next() ;
		}) ;
		stream.label = "header" ;
		return stream ;
	} ;

	/*  hook into the bundle generation pipeline of Browserify  */
	browserify.pipeline.get("wrap").push(createStream()) ;
	browserify.on("reset", function () {
		browserify.pipeline.get("wrap").push(createStream()) ;
	}) ;
} ;

