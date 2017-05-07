'use strict';

describe('relive.version module', function() {
  beforeEach(module('relive.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
