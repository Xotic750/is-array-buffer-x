import attempt from 'attempt-x';
import isObjectLike from 'is-object-like-x';
import hasToStringTag from 'has-to-string-tag-x';
import toStringTag from 'to-string-tag-x';
import toBoolean from 'to-boolean-x';
import call from 'simple-call-x';
import getGetter from 'util-get-getter-x';

const hasABuf = typeof ArrayBuffer === 'function';
const aBufTag = '[object ArrayBuffer]';

const validator = function validator(value) {
  return typeof value === 'number';
};

const creator = function creator() {
  /* eslint-disable-next-line compat/compat */
  return new ArrayBuffer(4);
};

const byteLength = hasABuf && hasToStringTag ? getGetter(creator, 'byteLength', validator) : null;

/**
 * Determine if an `object` is an `ArrayBuffer`.
 *
 * @param {*} object - The object to test.
 * @returns {boolean} `true` if the `object` is an `ArrayBuffer`,
 *  else false`.
 */
const isArrayBuffer = function isArrayBuffer(object) {
  if (hasABuf === false || isObjectLike(object) === false) {
    return false;
  }

  if (toBoolean(byteLength) === false) {
    return toStringTag(object) === aBufTag;
  }

  const result = attempt(function attemptee() {
    return call(byteLength, object);
  });

  return result.threw === false && validator(result.value);
};

export default isArrayBuffer;
