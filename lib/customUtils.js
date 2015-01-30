/**
 * Return an array with the numbers from 0 to n-1, in a random order
 */
function getRandomArray(n) {
	var res,
	    next;

	if (n === 0) {
		return [];
	}
	if (n === 1) {
		return [0];
	}

	res = getRandomArray(n - 1);
	next = Math.floor(Math.random() * n);
	res.splice(next, 0, n - 1);
	// Add n-1 at a random position in the array

	return res;
};
module.exports.getRandomArray = getRandomArray;

/*
 * Default compareKeys function will work for numbers, strings and dates
 */
function defaultCompareKeysFunction(a, b) {
	if (a < b) {
		return -1;
	}
	if (a > b) {
		return 1;
	}
	if (a === b) {
		return 0;
	}

	throw {
		message : "Couldn't compare elements",
		a : a,
		b : b
	};
}

module.exports.defaultCompareKeysFunction = defaultCompareKeysFunction;

/**
 * Check whether two values are equal (used in non-unique deletion)
 */
function defaultCheckValueEquality(a, b) {
	return a === b;
}

module.exports.defaultCheckValueEquality = defaultCheckValueEquality;

/**
 * Return a random alphanumerical string of length len
 * There is a very small probability (less than 1/1,000,000) for the length to be less than len
 * (il the base64 conversion yields too many pluses and slashes) but
 * that's not an issue here
 * The probability of a collision is extremely small (need 3*10^12 documents to have one chance in a million of a collision)
 * See http://en.wikipedia.org/wiki/Birthday_problem
 */

var uid = function(len) {
	var charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var cLen = charSet.length;
	var randomString = '';
	var len = len || 12;
	if (len < 0) {
		len = 12;
	}
	while (len--) {
		randomString += charSet.charAt(Math.floor(Math.random() * cLen));
	}
	return randomString;
};

// Interface
module.exports.uid = uid;