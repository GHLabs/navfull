(function() {
  L.Control.Compass = L.Control.extend({
    options: {
      position: 'topleft',
      title: 'Compass',
      frequency: 200
    },
    onAdd: function(map) {
      $(document).on("deviceready", (function(_this) {
        return function() {
          L.DomUtil.addClass(_this._container, 'leaflet-control-layers leaflet-control-compass');
          _this._inner = L.DomUtil.create('div', '', _this._container);
          _this._oldheading = 0;
          return _this._watchID = navigator.compass.watchHeading(function(heading) {
            return _this.onSuccess(heading);
          }, function(error) {
            return _this.onError(error);
          }, {
            frequency: _this.options.frequency
          });
        };
      })(this));
      return L.DomUtil.create('div', '');
    },
    onRemove: function(map) {
      return navigator.compass.clearWatch(this._watchID);
    },
    onSuccess: function(heading) {
      var degrees, delta;
      degrees = 360 - heading.magneticHeading;
      delta = this._oldheading - degrees;
      if (L.DomUtil.TRANSFORM && L.DomUtil.TRANSITION) {
        this._inner.style[L.DomUtil.TRANSITION] = "";
        if (delta < -180 || delta > 180) {
          this._inner.style[L.DomUtil.TRANSITION] = "none";
        }
        this._inner.style[L.DomUtil.TRANSFORM] = " rotate(" + degrees + "deg)";
        return this._oldheading = degrees;
      }
    },
    onError: function(error) {
      return this.removeFrom(this._map);
    }
  });

  L.control.compass = function(options) {
    return new L.Control.Compass(options);
  };

}).call(this);

//# sourceMappingURL=compass.js.map
