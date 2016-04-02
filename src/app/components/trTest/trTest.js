"use strict"

angular.module("trello")
    .component("trTest", {
        bindings: {},
        controller: function($scope, $uibModal, $log) {
            let self = this

            self.open = function (size) {
                var modalInstance = $uibModal.open({
                    templateUrl: 'src/app/components/trTest/modal.html',
                    controller: function($scope, $uibModalInstance) {
                        $scope.items = [1111111,2222222,3333333333]

                        $scope.set = (item) => {
                            $scope.selected = item
                        }

                        $scope.ok = function () {
                            $uibModalInstance.close($scope.selected);
                        };

                        $scope.cancel = function () {
                            $uibModalInstance.dismiss('cancel');
                        };
                    },
                    size: size,
                    resolve: {
                        //items: ['item1', 'item2', 'item3']
                    }
                });

                modalInstance.result.then(function (selectedItem) {
                    self.selected = selectedItem;
                    $log.info('selected', self.selected)
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });
            };
        },
        templateUrl: "src/app/components/trTest/trTest.html"
    })