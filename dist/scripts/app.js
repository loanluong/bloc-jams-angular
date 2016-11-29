(function() { 
function config($stateProvider, $locationProvider) {
     $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });

     $stateProvider
         .state('landing', {
             url: '/',
             templateUrl: '/templates/landing.html'
         })
 
         $stateProvider
            .state('album', {
                url: '/album',
                templateUrl: '/templates/album.html'
         })
         $stateProvider
            .state('collection', {
             url: '/collection',
             tempateUrl: '/templates/collection.html'
         });
     }
});

angular 
    .module('blocJams', ['ui.router']);
    .config(config);
    
})();