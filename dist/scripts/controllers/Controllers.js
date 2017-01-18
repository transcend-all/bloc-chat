(function(){
    function LandingCtrl(Room, Message, $uibModal){
         var landing = this;
        var counter = 0;
        
        
        landing.bar = function(){
            alert('bar');
        };
        
        landing.rooms = Room.all;
        landing.messages = Message.all;
        landing.send = Message.send;
        
        
                
        landing.rooms.$loaded().then(function(){
            landing.currentRoom = landing.rooms[0];
            landing.currentMessage = Message.currentRoomMessages(landing.currentRoom);
        })       
        landing.updateMessages = function(room){
            landing.currentMessage = Message.currentRoomMessages(room);
        }
        
        this.addMessage = function(currentRoomId, newMessageText){
            var ts = new Date();
            var timeStamp = ts.toString();
            Message.addMessage(currentRoomId, newMessageText, timeStamp);
            this.messages.newMessageText = "";
        }
        
        this.openModalInstance = function(){
            $uibModal.open({
                templateUrl: 'templates/new-room.html', 
                controller: 'ModalCtrl as Md'
            });
        };
        
        
        
        
        
        
        //tests
        
        landing.foo = function(){
            alert(landing.messages);
        }
       
        landing.logout = function(){
            console.log(landing.currentRoom);
        }
        
//        landing.send = Message.addMessage;
    }
    
    angular
        .module('blocChat')
        .controller('LandingCtrl', ['Room', 'Message', '$uibModal', LandingCtrl]);
})();






(function(){
    function ModalCtrl($scope, $uibModal, Room, $cookies){
        this.addRoom = function(newRoomText){
            if(!newRoomText){
                alert("Please Enter Room Name");
            }else{
                Room.addRoom(newRoomText);
                $uibModal.close();
            }
        };
                
        this.cancel = function(){
            $uibModal.close();
        }
        
        this.setCurrentUser = function(un){
            var username = un;
            console.log(username);
            $cookies.put('blocChatCurrentUser', username);
            $uibModal.close();
        }
        
        
        
            
    }
    
      
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', '$uibModalInstance', 'Room', '$cookies', ModalCtrl])
    
})();





(function(){
    function MessageCtrl(Room, Message){
        
                
    }
    
    
    angular
        .module('blocChat')
        .controller('MessageCtrl', ['Room', 'Message', MessageCtrl])
})();

