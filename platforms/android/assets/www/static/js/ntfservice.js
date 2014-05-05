(function() {
  window.ntf_srv_getStatus = function() {
    return window.ntf_srv.getStatus((function(r) {}), function(e) {
      return alert('An error has occurred in getStatus.' + JSON.stringify(e));
    });
  };

  window.ntf_srv_startService = function() {
    var onSuccess;
    return window.ntf_srv.startService(onSuccess = (function(r) {}), function(e) {
      return alert('An error has occurred in startService.' + JSON.stringify(e));
    });
  };

  window.ntf_srv_enableTimer = function() {
    var onSuccess;
    return window.ntf_srv.enableTimer(10000, onSuccess = (function(r) {}), function(e) {
      return alert('An error has occurred in enableTimer.' + JSON.stringify(e));
    });
  };

  window.ntf_srv_setConfig = function(itinerary) {
    var config, onSuccess;
    config = {
      "itinerary": itinerary
    };
    return window.ntf_srv.setConfiguration(config, onSuccess = (function(r) {}), function(e) {
      return alert('An error has occurred in setConfig.' + JSON.stringify(e));
    });
  };

  document.addEventListener('deviceready', function() {
    window.ntf_srv = cordova.require('com.red_folder.phonegap.plugin.backgroundservice.BackgroundService');
    return window.ntf_srv_startService();
  }, true);

}).call(this);

//# sourceMappingURL=ntfservice.js.map
