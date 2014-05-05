(function() {
  $(document).on("deviceready", function() {
    return $('#qr-button').on("click", function() {
      return cordova.plugins.barcodeScanner.scan(function(result) {
        if (!result.cancelled) {
          return $('#input-search input').val(result.text).trigger("keyup");
        }
      }, function(error) {
        return alert("Scanning failed: " + error);
      });
    });
  });

}).call(this);

//# sourceMappingURL=qrcode.js.map
