var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;

var splitPath = function(filename) {
	return splitPathRe.exec(filename).slice(1);
};

var dirname = function(path) {
	var result = splitPath(path),
	    root = result[0],
	    dir = result[1];

	if (!root && !dir) {
		// No dirname whatsoever
		return '.';
	}

	if (dir) {
		// It has a dirname, strip trailing slash
		dir = dir.substr(0, dir.length - 1);
	}

	return root + dir;
};

var normalizeArray = function(parts, allowAboveRoot) {
	// if the path tries to go above the root, `up` ends up > 0
	var up = 0;
	for (var i = parts.length - 1; i >= 0; i--) {
		var last = parts[i];
		if (last === '.') {
			parts.splice(i, 1);
		} else if (last === '..') {
			parts.splice(i, 1);
			up++;
		} else if (up) {
			parts.splice(i, 1);
			up--;
		}
	}

	// if the path is allowed to go above the root, restore leading ..s
	if (allowAboveRoot) {
		for (; up--; up) {
			parts.unshift('..');
		}
	}

	return parts;
};

var normalize = function(path) {
	var isAbsolute = path.charAt(0) === '/',
	    trailingSlash = path.substr(-1) === '/';

	// Normalize the path
	path = normalizeArray(path.split('/').filter(function(p) {
		return !!p;
	}), !isAbsolute).join('/');

	if (!path && !isAbsolute) {
		path = '.';
	}
	if (path && trailingSlash) {
		path += '/';
	}

	return ( isAbsolute ? '/' : '') + path;
};

var join = function() {
	var paths = Array.prototype.slice.call(arguments, 0);
	return normalize(paths.filter(function(p, index) {
		if ( typeof p !== 'string') {
			throw new TypeError('Arguments to path.join must be strings');
		}
		return p;
	}).join('/'));
};

exports.dirname = dirname;
exports.join = join;
