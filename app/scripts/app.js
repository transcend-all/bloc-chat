(function(){
    function config($stateProvider, $locationProvider){
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        
    $stateProvider
        .state('landing', {
            url: '/',
            controller: 'LandingCtrl as Landing',
            templateUrl: '/templates/landing.html'
        
        })
                
    }

angular
    .module('blocChat', ['ui.router', 'firebase', 'ngCookies', 'ui.bootstrap'])
    .config(config);

})();