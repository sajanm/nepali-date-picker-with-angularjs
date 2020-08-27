angular.module('testApp', [])
    .controller('testCtrl', function($scope){
        $scope.name = "";
        $scope.dob = "";
    })
    .directive('nepaliDatePicker', function() {
        return {
            restrict: 'A',
            link: function(scope, ele, attrs, ctrl){
                for(var i = 0; i< ele.length; i++){
                    
                    var modelName = attrs.ngModel;
                    var element = ele[i];

                    element.nepaliDatePicker({
                        ndpYear: true,
                        ndpMonth: true,
                        ndpYearCount: 10,
                        onChange: function(e){
                            console.log(e);
                            scope.$apply(function() {
                                scope[modelName] = element.value;
                            });
                        }
                    });
                }
            }
        };
    });