<a
  href="https://travis-ci.org/Xotic750/is-array-buffer-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/is-array-buffer-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/is-array-buffer-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/is-array-buffer-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/is-array-buffer-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/is-array-buffer-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/is-array-buffer-x"
  title="npm version">
<img src="https://badge.fury.io/js/is-array-buffer-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/is-array-buffer-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/is-array-buffer-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/is-array-buffer-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/is-array-buffer-x?branch=master"
  alt="bettercodehub score" height="18">
</a>

<a name="module_is-array-buffer-x"></a>

## is-array-buffer-x

Detect whether or not an object is an ArrayBuffer.

<a name="exp_module_is-array-buffer-x--module.exports"></a>

### `module.exports(object)` ⇒ <code>boolean</code> ⏏

Determine if an `object` is an `ArrayBuffer`.

**Kind**: Exported function  
**Returns**: <code>boolean</code> - `true` if the `object` is an `ArrayBuffer`,
else false`.

| Param  | Type            | Description         |
| ------ | --------------- | ------------------- |
| object | <code>\*</code> | The object to test. |

**Example**

```js
import isArrayBuffer from 'is-array-buffer-x';

console.log(isArrayBuffer(new ArrayBuffer(4))); // true
console.log(isArrayBuffer(null)); // false
console.log(isArrayBuffer([])); // false
```
