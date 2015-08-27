app.directive('borderOnHover',function(){
  return {
    restrict: 'A',
    link: function(scope, el, attr){
      el.on('mouseenter', function(){
        el.css("border-width", "2px");
      });
      el.on('mouseleave', function(){
        el.css("border-width", "1px");
      });
    }
  };
});