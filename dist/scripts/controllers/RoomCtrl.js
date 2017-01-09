
(function(){
    function RoomCtrl(Room){
       
        
        
        this.rooms = Room.all;
//        this.rooms = [];
//        for (var i=0; i<3; i++){
//            this.rooms.push(Object.values(Room))
//        }
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
    
})();
