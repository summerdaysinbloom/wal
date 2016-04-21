'use strict';

/* App Module */
var app = angular.module('wallexApp', [
    'ngRoute',
    'ngControllers',
    'ngServices',
    'duScroll'
]);

app
.run(['$location', '$rootScope', '$window', '$http', '$route',
  function($location, $rootScope, $window, $http, $scope, $route) {

    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
      
      if($location.path() == '/') {
        
        $rootScope.showHeader = true;
      
      } else if($location.path() == '/sectors/importer-and-exporters') {
      
        $rootScope.showHeader = false;
      
      } else if($location.path() == '/sectors/online-sellers') {
      
        $rootScope.showHeader = false;
      
      } else if($location.path() == '/faq') {
      
        $rootScope.showHeader = false;
      
      }

    })

  }
]);

app
.config(['$routeProvider', '$locationProvider', 
  function($routeProvider, $locationProvider) {
    
    // $locationProvider.html5Mode(true);

    $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      title: 'Wallex',
      keywords: 'Wallex',
      description: 'Wallex'
    })
    .when('/sectors/importer-and-exporters', {
      templateUrl: 'views/importer-and-exporters.html',
      controller: 'sectorsImportCtrl',
      title: 'Wallex | importer and exporters',
      keywords: 'Wallex about importer and exporters',
      description: 'Wallex importer and exporters'
    })
    .when('/sectors/online-sellers', {
      templateUrl: 'views/online-sellers.html',
      controller: 'onlineSellersCtrl',
      title: 'Wallex | online sellers',
      keywords: 'Wallex about online sellers',
      description: 'Wallex about online sellers'
    })
    .when('/faq', {
      templateUrl: 'views/faq.html',
      controller: 'faqCtrl',
      title: 'Wallex | FAQ',
      keywords: 'Wallex FAQ',
      description: 'Wallex FAQ'
    })
    .when('/blog', {
      templateUrl: 'views/blog.html',
      title: 'Wallex | Blog',
      keywords: 'Wallex Blog',
      description: 'Wallex Blog'
    })
    .otherwise({
      redirectTo: '/'
    });
  }

]);
