
angular.module('petpeekApp')

        .controller('serviciosController', ['$scope', 'serviciosFactory', function($scope, serviciosFactory) {
                'use strict';
                $scope.tab = 1;
                $scope.filtText = '';
                $scope.showDetails = false;
                $scope.showMenu = false;
                $scope.message = "Loading ...";
                $scope.dishes = serviciosFactory.getDishes().query(
                        function (response){
                                $scope.dishes = response;
                                $scope.showMenu = true;
                        },
                        function (response){
                              $scope.message = "Error:"+response.status + " " + response.statusText;
                        }
                      );

                $scope.select = function(setTab) {
                      $scope.tab = setTab;

                      if (setTab === 2) {
                          $scope.filtText = "appetizer";
                      }
                      else if (setTab === 3) {
                          $scope.filtText = "mains";
                      }
                      else if (setTab === 4) {
                          $scope.filtText = "dessert";
                      }
                      else {
                          $scope.filtText = "";
                      }
                };

                $scope.isSelected = function (checkTab) {
                      return ($scope.tab === checkTab);
                };

                $scope.toggleDetails = function() {
                      $scope.showDetails = !$scope.showDetails;
                };
        }])

        .controller('ContactController', ['$scope', function($scope) {

            $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };

            var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];

            $scope.channels = channels;
            $scope.invalidChannelSelection = false;

        }])

        .controller('FeedbackController', ['$scope', function($scope) {

            $scope.sendFeedback = function() {

                console.log($scope.feedback);

                if ($scope.feedback.agree && ($scope.feedback.mychannel == "")) {
                    $scope.invalidChannelSelection = true;
                    console.log('incorrect');
                }
                else {
                    $scope.invalidChannelSelection = false;
                    $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
                    $scope.feedback.mychannel="";
                    $scope.feedbackForm.$setPristine();
                    console.log($scope.feedback);
                }
            };
        }])

        // implement the IndexController and About Controller here
        .controller('AboutController', ['$scope', 'corporateFactory', function($scope, corporateFactory) {

            $scope.leadership = corporateFactory.getLeaders();

        }])

        .controller('IndexController', ['$scope', '$stateParams', 'corporateFactory', 'serviciosFactory', function($scope, $stateParams, corporateFactory, serviciosFactory) {

            $scope.showDish = false;
            $scope.message="Loading ...";
            $scope.dish = serviciosFactory.getDishes().get({id:0})
              .$promise.then(
                    function(response){
                      $scope.dish = response;
                      $scope.showDish = true;
                    },
                    function(response){
                      $scope.message = "Error:" + response.status  + " " + response.statusText;
                    }
              );
            var promotions = serviciosFactory.getPromotion(0);
            $scope.promotions = promotions;
            var leader = corporateFactory.getLeader(3);
            $scope.leader = leader;

        }])

;
