// Core files
import angular from 'angular';

// Sub modules
import './app-core/index';
import './app-layout/index';
import './app-content/index';

angular
  .module('app', ['app.core', 'app.layout', 'app.content'])
;

