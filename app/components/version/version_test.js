'use strict';

describe('rio.version module', function() {
  beforeEach(module('rio.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
