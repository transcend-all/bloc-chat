(function(){
    function Room($firebaseArray){
        
        
        
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        
        
        return {
            all: rooms,
            addRoom: function(newRoomText){
                rooms.$add({
                    name: newRoomText
                })
            }
        };
        
        
        this.foo = function(){
            alert('foo');
        }
        
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();