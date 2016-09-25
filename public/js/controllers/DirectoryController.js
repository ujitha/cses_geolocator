function DirectoryController($scope, companyService) {

    companyService.browse().then(function (res) {
        $scope.companies = res.data;
        $scope.selectedCompany = $scope.companies[0];
    });

    $scope.setSelectedCompany = function (param){
        $scope.selectedCompany = param;
    };

}