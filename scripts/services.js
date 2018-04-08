angular.module('petpeekApp')
.constant("baseURL", "http://localhost:3000/")
.service('serviciosFactory',['$resource', 'baseURL', function($resource,baseURL) {
    'use strict';


        this.getDishes = function(){

            return $resource(baseURL+"dishes/:id",null, {
              'update': {method:'PUT'}});

        };

        this.getPromotion = function () {
            return $resource(baseURL+"promotions/:id",null,{
              'update': {method:'PUT'}});
        };

}])

.factory('corporateFactory', ['$resource', 'baseURL', function($resource,baseURL) {

    var corpfac = {};

    corpfac.getLeaders = function(){
      return $resource(baseURL+"leadership/:id",null,{
        'update': {method:'PUT'}});

    };
    corpfac.getLeader = function (){
      return $resource(baseURL+"leadership/:id",null,{
        'update': {method:'PUT'}});

    };

    return corpfac;

}])

.factory('feedbackFactory', ['$resource', 'baseURL', function($resource,baseURL){

    var feedback = {};
    feedback.newfeedback = function(){
      return $resource(baseURL+"feedback/:id",null,{
              'save': {method:'POST'}});
    };

    return feedback;

}])
;
