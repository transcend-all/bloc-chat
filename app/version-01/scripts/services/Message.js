(function(){
    function Message($firebaseArray){
        
        var ref = firebase.database().ref().child('messages');
        var message = $firebaseArray(ref);
        
        
        return {
            all: message,
            addMessage: function(currentRoomId){
                message.$add({
                    content: message.newMessageTest,
                    sentAt: message.time.toString(),
                    roomId: currentRoomId
                });
            }
        }
        
        
        
    }
    
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();