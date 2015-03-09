'use strict';

angular
  .module('app', ['ui.router'])
  .config(_config);

_config.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

function _config($locationProvider, $stateProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('loginSignup', {
      url: '/loginSignup',
      templateUrl: 'app/login-signup/loginSignup.html',
      controlller: 'LoginSignupController'
    })
    .state('terms', {
      url: '/terms',
      templateUrl: 'app/terms/terms.html',
      controller: 'TermsController'
    })
    .state('infoOverlay', {
      url: '/infoOverlay',
      templateUrl: 'app/info-overlay/infoOverlay.html',
      controller: 'InfoOverlayController'
    })
    .state('subscribe', {
      url: '/subscribe',
      templateUrl: 'app/subscribe/subscribe.html',
      controller: 'SubscribeController'
    })
    .state('share', {
      url: '/share',
      templateUrl: 'app/share/share.html',
      controller: 'ShareController'
    })
    .state('videoPlayer', {
      url: '/videoPlayer',
      templateUrl: 'app/video-player/videoPlayer.html',
      controller: 'VideoPlayerController'
    })
    .state('sidebarSettings', {
      url: '/sidebarSettings',
      templateUrl: 'app/sidebar-settings/sidebarSettings.html',
      controller: 'SidebarSettingsController'
    });

    $urlRouterProvider.otherwise('/loginSignup');
}
