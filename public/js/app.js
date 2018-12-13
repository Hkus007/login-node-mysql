var app = angular.module('querencia', []);

app.config(['$httpProvider', '$qProvider', '$animateProvider', function ($httpProvider, $qProvider, $animateProvider) {
    $qProvider.errorOnUnhandledRejections(false);
    $animateProvider.classNameFilter(/\cardBr\b/);
}]);