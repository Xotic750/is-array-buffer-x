/*jslint maxlen:80, es6:false, white:true */

/*jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
  freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
  nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
  es3:true, esnext:false, plusplus:true, maxparams:1, maxdepth:1,
  maxstatements:11, maxcomplexity:4 */

/*global expect, module, require, describe, xit, it, returnExports */

(function () {
  'use strict';

  var isArrayBuffer, hasArrayBuffer, ifHasArrayBuffer,
    hasDataView, ifHasDataView;
  if (typeof module === 'object' && module.exports) {
    require('es5-shim');
    require('es5-shim/es5-sham.js');
    isArrayBuffer = require('../../index.js');
  } else {
    isArrayBuffer = returnExports;
  }

  hasArrayBuffer = typeof ArrayBuffer === 'function';
  ifHasArrayBuffer = hasArrayBuffer ? it : xit;
  hasDataView = hasArrayBuffer && typeof DataView === 'function';
  ifHasDataView = hasDataView ? it : xit;

  describe('isArrayBuffer', function () {
    it('basic', function () {
      expect(isArrayBuffer()).toBe(false);
      expect(isArrayBuffer(undefined)).toBe(false);
      expect(isArrayBuffer(null)).toBe(false);
      expect(isArrayBuffer(1)).toBe(false);
      expect(isArrayBuffer(true)).toBe(false);
      expect(isArrayBuffer('abc')).toBe(false);
      expect(isArrayBuffer([])).toBe(false);
      expect(isArrayBuffer({})).toBe(false);
    });

    ifHasArrayBuffer('hasArrayBuffer', function () {
      expect(isArrayBuffer(new ArrayBuffer(4))).toBe(true);
      expect(isArrayBuffer(new Int16Array(4))).toBe(false);
      expect(isArrayBuffer(new Int32Array(4))).toBe(false);
      expect(isArrayBuffer(new Uint8Array(4))).toBe(false);
      expect(isArrayBuffer(new Uint16Array(4))).toBe(false);
      expect(isArrayBuffer(new Uint32Array(4))).toBe(false);
      expect(isArrayBuffer(new Float32Array(4))).toBe(false);
      expect(isArrayBuffer(new Float64Array(4))).toBe(false);
    });

    ifHasDataView('hasDataView', function () {
      expect(isArrayBuffer(new DataView(new ArrayBuffer(4)))).toBe(false);
    });
  });
}());
