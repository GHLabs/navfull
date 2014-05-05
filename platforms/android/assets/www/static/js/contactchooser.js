(function() {
  var addContactAddress, chosenContact, onErrorContactChooser, onSuccessContactChooser;

  chosenContact = {};

  addContactAddress = function() {
    return window.plugins.PickContact.chooseContact(function(contactInfo) {
      var fields, options, q;
      chosenContact = contactInfo;
      options = new ContactFindOptions();
      q = contactInfo.displayName;
      options.filter = q;
      options.multiple = true;
      fields = ["displayName", "name", "addresses"];
      return navigator.contacts.find(fields, onSuccessContactChooser, onErrorContactChooser, options);
    });
  };

  onSuccessContactChooser = function(contacts) {
    var address, curLoc, names, _i, _len, _results;
    _results = [];
    for (_i = 0, _len = contacts.length; _i < _len; _i++) {
      names = contacts[_i];
      if (names.id === chosenContact.contactId) {
        if (names.addresses == null) {
          address = new ContactAddress();
          curLoc = $('#input-search input').data('selected_location');
          if (curLoc !== "") {
            address.formatted = curLoc;
            names.addresses = [];
            names.addresses.push(address);
            names.save();
            _results.push(alert("Address Saved"));
          } else {
            _results.push(void 0);
          }
        } else {
          _results.push(alert("Contact Already Has Address"));
        }
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

  onErrorContactChooser = function(contactError) {
    return console.log("Error Finding Contact");
  };

  $(document).on("deviceready", function() {
    return $('#addContactAddress').on("click", addContactAddress);
  });

}).call(this);

//# sourceMappingURL=contactchooser.js.map
