var objectToString = function(o) {
	return Object.prototype.toString.call(o);
};

var isArray = function(ar) {
	return Array.isArray(ar) || ( typeof ar === 'object' && objectToString(ar) === '[object Array]');
};

var isRegExp = function(re) {
	return typeof re === 'object' && objectToString(re) === '[object RegExp]';
};

var isDate = function(d) {
	return typeof d === 'object' && objectToString(d) === '[object Date]';
};

var isError = function(e) {
	return typeof e === 'object' && (objectToString(e) === '[object Error]' || e instanceof Error);
};

var inherits = function(ctor, superCtor) {
	ctor.super_ = superCtor;
	ctor.prototype = Object.create(superCtor.prototype, {
		constructor : {
			value : ctor,
			enumerable : false,
			writable : true,
			configurable : true
		}
	});
};

exports.isArray = isArray;
exports.isRegExp = isRegExp;
exports.isDate = isDate;
exports.isError = isError;
exports.inherits = inherits;

