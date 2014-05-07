# PickContact plugin for Cordova 3.x and PhoneGap

This is a fork from [kolwit's repo](https://github.com/kolwit/com.kolwit.pickcontact). 
ANDROID FIX ONLY
The purpose of this fork is for a Android project, which requires the plugin to retrieve the whole list of contacts, and upon selection retrieve the contact ID , contact display name and contact address from the address book in the device.
Since the retrieval of the names (first name, middle name, last name and formatted name) is buggy, they are removed from the original files.

This plugin is based on the plugins [com.monday.contact-chooser](https://github.com/monday-consulting/ContactChooser) and [org.apache.cordova.contacts](https://github.com/apache/cordova-plugin-contacts)
It is fully inspired on the ContactChooser plugin, the trigger to get data is the same. The only thing different is the data that is returned. The plugin will return more data, for example phone numbers, emails and adresses (as in the cordova contacts plugin).

This plugin brings up a native iOS or Android contact-picker overlay, accessing the addressbook and returning the selected contact's name, email and phone number.

## Usage

Example Usage

```js
window.plugins.PickContact.chooseContact(function (contactInfo) {
    setTimeout(function () { // use timeout to fix iOS alert problem
        alert(contactInfo.contactId + " " + contactInfo.displayName + " " + contactInfo.emailAddress + " " + contactInfo.phoneNr + " " + contactInfo.address);
    }, 0);
});
```

The method which will return a JSON. Example:

```json
{
	contactId: "6",
	displayName: "John Doe",
	phoneNr: "+55 55 555 55",
	emailAddress: "john.doe@mail.com",
	address: "Rue 123, Brussels 1000, Belgium",
	street: "Rue 123",
	city: "Brussels",
	region: "Brussels",
	zipcode: "1000",
	country: "BE"
}
```

## Installation Instructions

The PickContact plugin provides support for Cordova's command-line tooling.
Simply navigate to your project's root directory and execute the following command:

```
cordova plugin add https://github.com/aiksiang/com.kolwit.pickcontact
```

