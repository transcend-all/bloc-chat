(function(){
    function LandingCtrl(Room, Message, $uibModal){
         var landing = this;
        var counter = 0;
        
        landing.bar = function(){
            alert('bar');
        };
        
        landing.rooms = Room.all;
        landing.messages = Message.all;
        
        landing.rooms.$loaded().then(function(){
        landing.currentRoom = landing.rooms[0];
        landing.currentMessage = landing.messages[0];
        })
        
       

        landing.logout = function(){
            
            console.log(landing.currentRoom);
        }
        
               
        
        this.openModalInstance = function(){
            $uibModal.open({
                templateUrl: 'templates/new-room.html', 
                controller: 'ModalCtrl as Md'
            });
        };
        
        landing.send = Message.addMessage;
    }
    
    angular
        .module('blocChat')
        .controller('LandingCtrl', ['Room', 'Message', '$uibModal', LandingCtrl]);
})();






(function(){
    function ModalCtrl($scope, $uibModal, Room, $cookies){
        this.addRoom = function(newRoomText){
//            if(!$scope.newRoomText){
//                alert("Please Enter Room Name");
//            }else{
                Room.addRoom(newRoomText);
                $uibModal.close();
//            }
        };
                
        this.cancel = function(){
            $uibModal.close();
        }
        
        this.setCurrentUser = function(){
            var username = $scope.username;
            $cookies.put('blocChatCurrentUser', username);
            $uibModal.close();
        }
        
        
        
        this.foo = function(){
            alert('foo');
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

