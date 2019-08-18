import attempt from 'attempt-x';
import isObjectLike from 'is-object-like-x';
import hasToStringTag from 'has-to-string-tag-x';
import toStringTag from 'to-string-tag-x';
import toBoolean from 'to-boolean-x';
import call from 'simple-call-x';
import getGetter from 'util-get-getter-x';
var hasABuf = typeof ArrayBuffer === 'function';
var aBufTag = '[object ArrayBuffer]';

var validator = function validator(value) {
  return typeof value === 'number';
};

var creator = function creator() {
  /* eslint-disable-next-line compat/compat */
  return new ArrayBuffer(4);
};

var byteLength = hasABuf && hasToStringTag ? getGetter(creator, 'byteLength', validator) : null;
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

  if (toBoolean(byteLength) === false) {
    return toStringTag(object) === aBufTag;
  }

  var result = attempt(function attemptee() {
    return call(byteLength, object);
  });
  return result.threw === false && validator(result.value);
};

export default isArrayBuffer;

//# sourceMappingURL=is-array-buffer-x.esm.js.map