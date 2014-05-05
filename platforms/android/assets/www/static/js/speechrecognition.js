(function() {
  $(document).on("deviceready", function() {
    return $('#speech-button').on("click", function() {
      return window.plugins.speechrecognizer.startRecognize(function(results) {
        return $('#input-search input').val(results[0]).trigger("keyup");
      }, function(errorMessage) {
        return alert("Error: recognition failed!\nPlease retry.");
      }, 1, "Pronounce the address", citynavi.config.speech_language);
    });
  });

}).call(this);

//# sourceMappingURL=speechrecognition.js.map
