function CompanyDetailController($scope, $routeParams, companyService) {

    var cid = $routeParams.cid;
    companyService.read(cid).then(function (res) {
        $scope.company = res.data;
    });

}