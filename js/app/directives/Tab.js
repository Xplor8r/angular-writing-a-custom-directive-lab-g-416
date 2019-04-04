function Tab() {
  return {
    transclude: true,
    require: '^tabs',
    restrict: 'E',
    scope: { label: '@'},
    template: [
      '<div class="tabs__content" ng-if="tab.selected">',
        '<div ng-transclude></div>',
      '</div>'
    ].join(''),
    link: function ($scope, $element, $attrs, $ctrl){
      $scope.tab = {
        label: $scope.label,
        selected: false
      };
      $ctrl.addTab($scope.tab);
    }
  }
}