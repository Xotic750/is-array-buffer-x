/* global ArrayBuffer */

import attempt from 'attempt-x';

import isObjectLike from 'is-object-like-x';

const hasABuf = typeof ArrayBuffer === 'function';
let bLength = false;
let toStringTag;
let aBufTag;

if (hasABuf) {
  if (require('has-to-string-tag-x')) {
    const getOwnPropertyDescriptor = require('object-get-own-property-descriptor-x');
    const descriptor = getOwnPropertyDescriptor(ArrayBuffer.prototype, 'byteLength');

    if (descriptor && typeof descriptor.get === 'function') {
      let res = attempt(function() {
        return new ArrayBuffer(4);
      });

      if (res.threw === false && isObjectLike(res.value)) {
        res = attempt.call(res.value, descriptor.get);
        bLength = res.threw === false && typeof res.value === 'number' && descriptor.get;
      }
    }
  }

  if (bLength === false) {
    toStringTag = require('to-string-tag-x');
    aBufTag = '[object ArrayBuffer]';
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

  const result = attempt.call(object, bLength);

  return result.threw === false && typeof result.value === 'number';
}
