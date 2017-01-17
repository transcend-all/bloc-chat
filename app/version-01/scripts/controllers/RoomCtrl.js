
(function(){
    function RoomCtrl(Room, $uibModal){
       
        var landing = this;
        
        landing.bar = function(){
            alert('bar');
        };
        
        landing.rooms = Room.all;
        
        landing.rooms.$loaded().then(function(){
        landing.currentRoom = landing.rooms[0];
//            landing.currentMessages = Messages.currentRoom(landing.curentRoom);
        })

        landing.logout = function(){
            
            console.log(landing.currentRoom);
        }
        
        this.openModalInstance = function(){
            $uibModal.open({
                templateUrl: 'templates/new-room.html',
                controller: 'UIModalCtrl as moodle'
            });
        };
        
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room',  '$uibModal', RoomCtrl]);
    
})();