import attempt from 'attempt-x';
import isObjectLike from 'is-object-like-x';
import hasToStringTag from 'has-to-string-tag-x';
import getOwnPropertyDescriptor from 'object-get-own-property-descriptor-x';
import toStringTag from 'to-string-tag-x';
import toBoolean from 'to-boolean-x';
var hasABuf = typeof ArrayBuffer === 'function';
var aBufTag = '[object ArrayBuffer]';

var getBlength = function getBlength() {
  /* eslint-disable-next-line compat/compat */
  var descriptor = getOwnPropertyDescriptor(ArrayBuffer.prototype, 'byteLength');

  if (descriptor && typeof descriptor.get === 'function') {
    var resBuf = attempt(function attemptee() {
      /* eslint-disable-next-line compat/compat */
      return new ArrayBuffer(4);
    });

    if (resBuf.threw === false && isObjectLike(resBuf.value)) {
      var resGet = attempt.call(resBuf.value, descriptor.get);
      return resGet.threw === false && typeof resGet.value === 'number' && descriptor.get;
    }
  }

  return null;
};

var bLength = hasABuf && hasToStringTag ? getBlength() : null;
/**
 * Determine if an `object` is an `ArrayBuffer`.
 *
 * @param {*} object - The object to test.
 * @returns {boolean} `true` if the `object` is an `ArrayBuffer`,
 *  else false`.
 */

var isArrayBuffer = function isArrayBuffer(object) {
  if (hasABuf === false || isObjectLike(object) === false) {
    return false;
  }

  if (toBoolean(bLength) === false) {
    return toStringTag(object) === aBufTag;
  }

  var result = attempt.call(object, bLength);
  return result.threw === false && typeof result.value === 'number';
};

export default isArrayBuffer;

//# sourceMappingURL=is-array-buffer-x.esm.js.map