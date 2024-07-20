admin.controller("adminContactCtrl", function ($scope, $http, $location, $rootScope) {
    $scope.contacts = [];
    $scope.users = [];

    $http.get('http://localhost:3000/users').then(
        function(response){
            $scope.users = response.data;
        },
    );

    // Lấy danh sách các contact
    $http.get('http://localhost:3000/contacts').then(
        function(response){
            $scope.contacts = response.data;

        },
    );

    $scope.deleteContact = function(contactID) {
        var url = "http://localhost:3000/contacts/" + contactID;
        $http.delete(url)
          .then(function(response) {
            var index = $scope.contacts.findIndex(function(contact) {
              return contact.id === contactID;
            });
            if (index !== -1) {
              $scope.productsAdmin.splice(index, 1);
            }
          })
      };

    
});
