Meteor App
==========

This web application logs the user's hardware details upon interaction. This app is written in Javascript using the MeteorJS framework. Data is persisted to a MongoDB (which comes bundled with MeteorJS) collection. An external library is used to translate user agent values to approximates hardware details. Bootstrap is used for styling our table layout. 

When the user first loads the page they are presented with an HTML table and button. Upon clicking the button an event listener binded to the button collects and persists the browser's user agent, device name, form factor, number of CPU cores and current timestamp to a MongoDB collection. 

The information stored in this MongoDB collection is used to populate the HTML table mentioned previously. 

In order to test this application locally one must download and install MeteorJS (https://www.meteor.com/install ) and execute 'meteor run' within the project root directory. 