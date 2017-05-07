'use strict';

angular.module('rio.version', [
  'rio.version.interpolate-filter',
  'rio.version.version-directive'
])

.value('version', '0.1');
