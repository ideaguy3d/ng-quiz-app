/**
 * Created by Julius Alvarado on 3/19/2017.
 */
(function(){
    "use strict";

    var app = angular.module('app-quiz', []),
        controllerId = 'QuizCtrl';

    app.controller(controllerId, ['$scope', '$http', '$sce', QuizCtrlClass]);
    
    function QuizCtrlClass($scope, $http, $sce) {

    }
}());