(function(){
    function Message($firebaseArray, $cookies){
        
        var ref = firebase.database().ref().child('messages');
        var message = $firebaseArray(ref);
        
       var currentRoomRef = firebase.database().ref('messages').orderByChild('roomId');
        
      
      
        console.log($cookies.get('blocChatCurrentUser'))
                
        return {
            all: message,
            getByRoomId: function(roomId){
                //filter messages
            },
            
            addMessage: function(currentRoomId, newMessageText){
                message.$add({
                    //username: $cookies.get('blocChatCurrentUser'),
                    content: newMessageText,
                    roomId: currentRoomId
                })
            },
            
            
            currentRoomMessages: function(roomId){
                return $firebaseArray(currentRoomRef.equalTo(roomId.$id));
        }
            
//            addMessage: function(newMessageText){
//                message.$add({
////                    username: $cookies.get('blocChatCurrentUser'),
//                    content: newMessageText,
////                    sentAt: message.time.toString(),
////                    roomId: currentRoomId
//                });
            }
        }
        
        
        
    
    
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();