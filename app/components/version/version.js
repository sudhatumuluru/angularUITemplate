'use strict';

angular.module('relive.version', [
  'relive.version.interpolate-filter',
  'relive.version.version-directive'
])

.value('version', '0.1');
