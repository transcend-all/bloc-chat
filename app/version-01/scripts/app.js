(function(){
    function config($stateProvider, $locationProvider){
        $locationProvider
            .html5Mode({
               enabled: true,
                requireBase: false
            });
        
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'RoomCtrl as Rume',
                templateUrl: '../templates/home.html'
            })
        
            .state('newroom', {
                url: '/newroom',
                controller: 'RoomCtrl as Rume',
                templateUrl: '../templates/chat-room.html'
            });
        
    }
    
    
    
    
    angular
        .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap.tpls', 'ui.bootstrap'])
        .config(config);
    
})();