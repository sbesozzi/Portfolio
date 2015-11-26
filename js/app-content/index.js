import angular from 'angular';
import '../app-core/index';

import AboutController from './controllers/about.controller';
import ContactController from './controllers/contact.controller';
import WorkController from './controllers/work.controller';

angular
  .module('app.content', ['app.core'])
  .controller('AboutController', AboutController)
  .controller('ContactController', ContactController)
  .controller('WorkController', WorkController)
;