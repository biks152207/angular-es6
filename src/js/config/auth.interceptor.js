function authInterceptor(JWT, AppConstants, $window, $q){
  'ngInject';
  return{
    // automatically attach Authorization header
    request: function(config){
      if (config.url.indexOf(AppConstants.api) === 0 && JWT.get()){
        config.headers.Authorization = 'Token' + JWT.get();
      }
    },

    // Handler 401
    responseError: function(rejection){
      if (rejection.status === 401){
        // clear any JWT token being stored
        JWT.destroy();

        // do a hard page referesh
        $window.location.reload();
      }
      return $q.reject(rejection);
    }
  }
}