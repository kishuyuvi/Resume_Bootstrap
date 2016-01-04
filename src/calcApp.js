var app = angular.module("CalcApp",['ngRoute']);
app.controller("CalcController",function($scope){

$scope.result = "";
var decimalPt = false;
var patt = /[+-/*]/;// match + or - or / or *

$scope.operand = function(operand){
    $scope.result += operand ;
};

//operator lik +-*/ are clicked
$scope.operator = function(operator){
    // remove redundent operator.
    if(patt.test($scope.result[$scope.result.length - 1]))
    {
      $scope.result = $scope.result.slice(0, $scope.result.length - 1 );
    }
    if(operator == '=')
    {
      $scope.result =  eval($scope.result);
    }
    else
    $scope.result += operator ;
    //reset the decimal pt for nxt number.
    if(decimalPt) decimalPt =false;
};

//added a flag to control scenarios lik 1.2.3.4 
$scope.decimalPt = function(){
    if(!decimalPt)
    {
        $scope.result += '.';
        decimalPt = true;
    }
};

//clearScreen
$scope.clearScreen = function(){
    $scope.result = "";
};

});