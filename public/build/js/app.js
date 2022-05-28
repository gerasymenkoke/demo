(function () {
  angular.module('app.config', []);
})();
(function () {
  angular.module('app', [
    'ui.router',
    'app.config'
  ]);
})();
(function () {

  angular.module('app')
    .config(enableHtml5Routing)
    .config(addDefaultRoutes);

  /**
   * Enable HTML5 routing mode
   */
  function enableHtml5Routing($locationProvider) {
    $locationProvider.html5Mode(false).hashPrefix('!');
  }

  // Inject dependencies;
  enableHtml5Routing.$inject = ['$locationProvider'];

  /**
   * Set up basic routes
   *
   * All other routes should ideally live in their own file
   * inside a component directory
   *
   * @param $stateProvider
   * @param $urlRouterProvider
   */
  function addDefaultRoutes($stateProvider, $urlRouterProvider){

    // If the url is ever invalid, e.g. '/unknown-url', then redirect to '/' aka the home state
    $urlRouterProvider
      .otherwise('/homepage');
  }

  // Inject dependencies;
  addDefaultRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

})();

(function () {

  angular.module('app')
    .config(['$stateProvider', function ($stateProvider) {

      $stateProvider
        .state('about', {
          url: '/about',
          views: {
            'content@': {
              templateUrl: 'components/about/about.html'
            }
          }
        });

    }]);

})();

(function () {

  angular.module('app')
    .config(['$stateProvider', function ($stateProvider) {

      $stateProvider
        .state('homepage', {
          url: '/homepage',
          views: {
            'content@': {
              templateUrl: 'components/homepage/homepage.html'
            }
          }
        });

    }]);

})();
