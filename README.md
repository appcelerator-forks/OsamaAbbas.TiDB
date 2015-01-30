# TiDB
 Embedded datastore for Titanium Appcelerator. Based on [nedb].

### How to use?

* Copy ```./TiDB.js``` and ```./lib``` to your project Resources.
* Require it:
```javascript
var TiDB = require('path/to/TiDB');
```
* Creating/loading a database:
```javascript
var myDB = new TiDB({
	filename : Ti.Filesystem.externalStorageDirectory + '/myDB.db',
	autoload : true
});
```
* For more information, check [nedb].

[nedb]:https://github.com/louischatriot/nedb
