(function() {
    'use strict';

    angular
    .module('app')
    .controller('ChatController', ChatController);

    ChatController.$inject = ['$scope','$rootScope','$location', 'Socket'];

    function ChatController($scope,$rootScope,$location, Socket) {

        console.log('loaded chat page');

        $scope.messages = ['hello'];

        $scope.Send = function(){
            console.log($scope.msg);
            Socket.emit('chat message to server', $scope.msg);
            $scope.msg = undefined;
            return false;
        };
        Socket.on('chat message', function(msg){
            $scope.messages.push(msg);
            console.log(msg);
        });

        //NB! important - remove listener when navigating away from this view
        $scope.$on('$destroy', function (event) {
            Socket.getSocket().removeAllListeners();
        });

    }
}());
