export default class CardModalController {
    constructor($scope, $uibModalInstance, card, keys) {
        $scope.card = card
        $scope.keys = keys

        $scope.cancel = function () {
            $uibModalInstance.dismiss();
        };
    }
}