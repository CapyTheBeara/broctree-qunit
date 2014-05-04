# Experimental

An experimental Broccoli tree for QUnit

## Usage

### Install the packages

```bash
> bower install qunit
> npm install monocle/broctree-qunit --save-dev
```

### Add the tree to your Brocfile

```javascript
var qunit = require('broctree-qunit');
// merge this to your other test trees
```

### Add QUnit to your testing index.html

```html
<script src="vendor/qunit/index.js"></script>
```

This will inject QUnit's `qunit.css` and `qunit.js`.

### Example

https://github.com/monocle/ember-addon-blueprint
