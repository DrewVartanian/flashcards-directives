app.directive('flashcard',function (ScoreFactory){
  return {
    restrict: 'E',
    templateUrl: 'js/directives/flashcard/flashcard.html',
    scope: {
      card: '='
    },
    link: function(scope, el, attr) {
      scope.answerQuestion = function (answer, flashCard) {
        if (flashCard.answered) return;
        flashCard.answered = true;
        flashCard.answeredCorrectly = answer.correct;
        if (answer.correct) ScoreFactory.correct++;
        else ScoreFactory.incorrect++;
      };
    }
  };
});