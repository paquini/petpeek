angular.module('petpeekApp', ['ui.router', 'ngResource'])
.config(function($stateProvider, $urlRouterProvider) {
        'use strict';
        $stateProvider

            // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
                    },
                    'content': {
                        templateUrl : 'views/home.html',
                        controller  : 'IndexController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html',
                    }
                }

            })
            // route for the services page
            .state('app.services', {
                url: 'services',
                views: {
                    'content@': {
                        templateUrl : 'views/servicios.html',
                        controller  : 'serviciosController'
                    }
                }
            })
            // route for the aboutus page
            .state('app.aboutus', {
                url:'aboutus',
                views: {
                    'content@': {
                        templateUrl : 'views/aboutus.html',
                        controller  : 'AboutController'
                    }
                }
            })

            // route for the contactus page
            .state('app.contactus', {
                url:'contactus',
                views: {
                    'content@': {
                        templateUrl : 'views/contactus.html',
                        controller  : 'ContactController'
                    }
                }
            })

        $urlRouterProvider.otherwise('/');
    })
;
