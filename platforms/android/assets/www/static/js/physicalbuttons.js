(function() {
  $(document).on('deviceready', function() {
    return $(document).on('menubutton', function() {
      return $.mobile.activePage.find('.physical-menu-btn').trigger('click');
    });
  });

}).call(this);

//# sourceMappingURL=physicalbuttons.js.map
