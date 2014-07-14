angular.module('LoaderModule', ['ionic'])
.factory('LoaderModule', function($rootScope, $ionicLoading) {

  // Trigger the loading indicator
  return {
        show : function() { //code from the ionic framework doc

            // Show the loading overlay and text
            $rootScope.loading = $ionicLoading.show({
                
//              templateUrl : 'app/views/loader_spin_template.html',
              template: '<div id="loader-rotation-spin"></div>',
              // The text to display in the loading indicator
              content: '',

              // The animation to use
              animation: 'fade-in',

              // Will a dark overlay or backdrop cover the entire view
              showBackdrop: true,

              // The maximum width of the loading indicator
              // Text will be wrapped if longer than maxWidth
              maxWidth: 200,

              // The delay in showing the indicator
              showDelay: 500
            });
        },
        hide : function(){
        //nighlty
            $ionicLoading.hide(); 
        //nighlty
//            $rootScope.loading.hide();
        }
    };
});