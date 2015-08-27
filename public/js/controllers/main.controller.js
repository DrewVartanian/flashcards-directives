app.controller('MainController', function ($scope, FlashCardsFactory, $log, ScoreFactory) {

  $scope.categories = FlashCardsFactory.categories;
  $scope.selectedCategory;
  $scope.loading = true;

  $scope.getCategoryCards = function (category) {
    $scope.loading = true;
    FlashCardsFactory.getFlashCards(category).then(function(cards){
      ScoreFactory.correct = 0;
      ScoreFactory.incorrect = 0;
      $scope.selectedCategory = category;
      $scope.flashCards = cards;
    }).catch(function(err){
      $log.error('error getting cards:', err);
    }).then(function(){
      $scope.loading = false;
    });
  };

  $scope.getCategoryCards();

  // $scope.answerQuestion = function (answer, flashCard) {
  //   if (flashCard.answered) return;
  //   flashCard.answered = true;
  //   flashCard.answeredCorrectly = answer.correct;
  //   if (answer.correct) ScoreFactory.correct++;
  //   else ScoreFactory.incorrect++;
  // };
});
