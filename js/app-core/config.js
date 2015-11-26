let config = function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('root', {
      abstract: true,
      templateUrl: 'templates/app-layout/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      controller: 'HomeController as vm',
      templateUrl: 'templates/app-layout/home.tpl.html'
    })
    .state('root.about', {
      url: '/about',
      controller: 'AboutController as vm',
      templateUrl: 'templates/app-content/about.tpl.html'
    })
    .state('root.work', {
      url: '/work',
      controller: 'WorkController as vm',
      templateUrl: 'templates/app-content/work.tpl.html'
    })
    .state('root.contact', {
      url: '/contact',
      controller: 'ContactController as vm',
      templateUrl: 'templates/app-content/contact.tpl.html' 
    });

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;