var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

import attempt from 'attempt-x';
import isObjectLike from 'is-object-like-x';
import hasToStringTag from 'has-to-string-tag-x';
import getOwnPropertyDescriptor from 'object-get-own-property-descriptor-x';
import toStringTag from 'to-string-tag-x';
var hasABuf = typeof ArrayBuffer === 'function';
var aBufTag = '[object ArrayBuffer]';
var bLength = false;

if (hasABuf) {
  if (hasToStringTag) {
    /* eslint-disable-next-line compat/compat */
    var descriptor = getOwnPropertyDescriptor(ArrayBuffer.prototype, 'byteLength');

    if (descriptor && typeof descriptor.get === 'function') {
      var res = attempt(function () {
        _newArrowCheck(this, _this);

        /* eslint-disable-next-line compat/compat */
        return new ArrayBuffer(4);
      }.bind(this));

      if (res.threw === false && isObjectLike(res.value)) {
        res = attempt.call(res.value, descriptor.get);
        bLength = res.threw === false && typeof res.value === 'number' && descriptor.get;
      }
    }
  }
}
/**
 * Determine if an `object` is an `ArrayBuffer`.
 *
 * @param {*} object - The object to test.
 * @returns {boolean} `true` if the `object` is an `ArrayBuffer`,
 *  else false`.
 */


export default function isArrayBuffer(object) {
  if (hasABuf === false || isObjectLike(object) === false) {
    return false;
  }

  if (bLength === false) {
    return toStringTag(object) === aBufTag;
  }

  var result = attempt.call(object, bLength);
  return result.threw === false && typeof result.value === 'number';
}

//# sourceMappingURL=is-array-buffer-x.esm.js.map