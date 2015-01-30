var TIMEOUT = 0;

var mkdirp = function(dir, callback) {
	
	setTimeout(function() {
		
		try {
			
			var dirCreated = Ti.Filesystem.getFile(dir).createDirectory();
			
			if(dirCreated) {
				callback(null);
			} else {
				callback('directory was not created.');
			}
			
		} catch(err) {
			
			callback(err);
		}
		
	}, TIMEOUT);
};

var exists = function(path, callback) {
	
	setTimeout(function() {
		
		try {
			
			callback(Ti.Filesystem.getFile(path).exists());
			
		} catch(err) {
			
			callback(false);
		}
		
	}, TIMEOUT);
};

var unlink = function(path, callback) {
	
	setTimeout(function() {
		
		try {
			
			Ti.Filesystem.getFile(path).deleteFile();
			
			callback(null);
			
		} catch(err) {
			
			callback(err);
		}
		
	}, TIMEOUT);
};

var rename = function(oldPath, newPath, callback) {
	
	setTimeout(function() {
		
		try {
			
			Ti.Filesystem.getFile(oldPath).rename(newPath);
			
			callback(null);
			
		} catch(err) {
			
			callback(err);
		}
		
	}, TIMEOUT);
};

var writeFile = function(filename, data, encoding, callback) {
	
	callback = callback || encoding;
	
	setTimeout(function() {
		
		try {
			
			var tmpFile = Ti.Filesystem.getFile(filename);
			tmpFile.write(data, true);
			callback(null);
			
		} catch(err) {
			
			callback(err);
		};
		
	}, TIMEOUT);
};

var appendFile = function(filename, data, encoding, callback) {
	
	callback = callback || encoding;
	
	setTimeout(function() {
		
		try {
			
			var tmpFile = Ti.Filesystem.getFile(filename);
			tmpFile.write(data, true);
			callback(null);
			
		} catch(err) {
			
			callback(err);
		};
		
	}, TIMEOUT);
};

var readFile = function(filename, encoding, callback) {
	
	setTimeout(function() {
		
		try {
			var tmpFile = Ti.Filesystem.getFile(filename);
			
			callback(null, tmpFile.read().toString());
			
		} catch(err) {
			
			callback(err, null);
		};
		
	}, TIMEOUT);
};

exports.mkdirp = mkdirp;
exports.exists = exists;
exports.unlink = unlink;
exports.rename = rename;
exports.writeFile = writeFile;
exports.appendFile = appendFile;
exports.readFile = readFile;