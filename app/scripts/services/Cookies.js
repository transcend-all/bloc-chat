(function(){
    function BlocChatCookies($cookies, $uibModal){
        var currentUser = $cookies.get('blocChatCurrentUser');
        if(!currentUser || currentUser === ''){
            $uibModal.open({
                templateUrl: '../templates/set-user.html',
                controller: 'ModalCtrl as Ck'
            });
        };
    };
    
    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();