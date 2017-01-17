(function(){
    function Message($firebaseArray){
        
        var ref = firebase.database().ref().child('messages');
        var message = $firebaseArray(ref);
        
        
        
        
        return {
            all: message,
            getByRoomId: function(roomId){
                //filter messages
            },
            send: function(newMessage){
                //send message
            },
            addMessage: function(currentRoomId){
                message.$add({
                    username: $cookies.get('blocChatCurrentUser'),
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