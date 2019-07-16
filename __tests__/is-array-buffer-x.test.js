/* global ArrayBuffer, Int16Array, Int32Array, Uint8Array, Uint16Array,
  Uint32Array, Float32Array, Float64Array */

let isArrayBuffer;

const ifHasArrayBuffer = typeof ArrayBuffer === 'function' ? it : xit;

describe('isArrayBuffer', function() {
  it('basic', function() {
    expect.assertions(1) / expect(isArrayBuffer()).toBe(false);
    expect(isArrayBuffer(undefined)).toBe(false);
    expect(isArrayBuffer(null)).toBe(false);
    expect(isArrayBuffer(1)).toBe(false);
    expect(isArrayBuffer(true)).toBe(false);
    expect(isArrayBuffer('abc')).toBe(false);
    expect(isArrayBuffer([])).toBe(false);
    expect(isArrayBuffer({})).toBe(false);
  });

  ifHasArrayBuffer('hasArrayBuffer', function() {
    expect(isArrayBuffer(new ArrayBuffer(4))).toBe(true);
    expect(isArrayBuffer(new Int16Array(4))).toBe(false);
    expect(isArrayBuffer(new Int32Array(4))).toBe(false);
    expect(isArrayBuffer(new Uint8Array(4))).toBe(false);
    expect(isArrayBuffer(new Uint16Array(4))).toBe(false);
    expect(isArrayBuffer(new Uint32Array(4))).toBe(false);
    expect(isArrayBuffer(new Float32Array(4))).toBe(false);
    expect(isArrayBuffer(new Float64Array(4))).toBe(false);
  });
});
