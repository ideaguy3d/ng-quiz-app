/**
 * Created by Julius Alvarado on 3/19/2017.
 */
(function(){
    "use strict";

    var app = angular.module('app-quiz', []),
        controllerId = 'QuizCtrl',
        factoryId = 'jDataSer';

    app.factory(factoryId, ['$http', jDataServiceClass]);
    app.controller(controllerId, ['$scope', '$sce', 'jDataSer', QuizCtrlClass]);
    
    function QuizCtrlClass($scope, $sce, jDataSer) {
        $scope.introMessage = 'Test your knowledge';
        $scope.score = 0;
        $scope.activeQuestion = -1;
        $scope.activeQuestionAnswered = 0;
        $scope.percentage = 0;

        activate();

        function activate () {
            jDataSer.getQuizData().then(function(res){
                console.log("res.data = "+res.data);
            });
        }
    }
    
    function jDataServiceClass($http) {

        var getQuizData = function() {
            return $http.get('api/quiz/get-quiz-data.php?token=public');
        };

        return {
            getQuizData: getQuizData
        }
    }
}());