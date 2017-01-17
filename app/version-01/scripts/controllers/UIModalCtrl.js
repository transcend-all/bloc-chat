(function(){
    
    function UIModalCtrl($scope, $uibModal, Room){
        this.addRoom = function(){
//            if(!$scope.newRoomText){
//                alert("Please Enter Room Name");
//            }else{
                Room.addRoom($scope.newRoomText);
                $scope.newRoomText = '';
                $uibModal.close();
//            }
        };
                
        this.cancel = function(){
            $uibModal.close();
        }
        
        
        
        
        this.foo = function(){
            alert('foo');
        }
        
    }
    
      
    
    angular
        .module('blocChat')
        .controller('UIModalCtrl', ['$uibModal', '$uibModalInstance', 'Room', UIModalCtrl])
    
})();