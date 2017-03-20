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

        $scope.selectAnswer = function(indexQuestion, indexAnswer){
            var questionState = $scope.myQuestions[indexQuestion].questionState;
            if(questionState != 'answered') { // .questionState is falsey because user has yet to click on an answer
                $scope.myQuestions[indexQuestion].selectedAnswer = indexAnswer;
                var correctAnswer = $scope.myQuestions[indexQuestion].correct;

                if(indexAnswer === correctAnswer) {
                    $scope.myQuestions[indexQuestion].correctness = 'correct';
                    $scope.score += 1;
                } else {
                    $scope.myQuestions[indexQuestion].correctness = 'incorrect';
                }
                // now that user has clicked on an answer I now set .questionState
                $scope.myQuestions[indexQuestion].questionState = 'answered';
            }
        };

        activate();
        function activate () {
            jDataSer.getLocalQuizData().then(function(res){
                $scope.myQuestions = res.data;
                $scope.totalQuestions = $scope.myQuestions.length;
            });
        }
    }
    
    function jDataServiceClass($http) {
        var getQuizData = function() {
            return $http.get('api/quiz/get-quiz-data.php?jtoken=public');
        };

        var getLocalQuizData = function(){
            return $http.get('quiz_data.json')
        };

        return {
            getQuizData: getQuizData,
            getLocalQuizData: getLocalQuizData
        }
    }
}());