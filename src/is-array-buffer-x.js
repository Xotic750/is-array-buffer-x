import attempt from 'attempt-x';
import isObjectLike from 'is-object-like-x';
import hasToStringTag from 'has-to-string-tag-x';
import getOwnPropertyDescriptor from 'object-get-own-property-descriptor-x';
import toStringTag from 'to-string-tag-x';

const hasABuf = typeof ArrayBuffer === 'function';
const aBufTag = '[object ArrayBuffer]';
let bLength = false;

if (hasABuf) {
  if (hasToStringTag) {
    /* eslint-disable-next-line compat/compat */
    const descriptor = getOwnPropertyDescriptor(ArrayBuffer.prototype, 'byteLength');

    if (descriptor && typeof descriptor.get === 'function') {
      let res = attempt(() => {
        /* eslint-disable-next-line compat/compat */
        return new ArrayBuffer(4);
      });

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
const isArrayBuffer = function isArrayBuffer(object) {
  if (hasABuf === false || isObjectLike(object) === false) {
    return false;
  }

  if (bLength === false) {
    return toStringTag(object) === aBufTag;
  }

  const result = attempt.call(object, bLength);

  return result.threw === false && typeof result.value === 'number';
};

export default isArrayBuffer;
