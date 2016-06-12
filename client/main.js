import { Template } from 'meteor/templating';
import { Devices } from '../src/devices.js'; 

import './main.html';

var coords; //Global variables in JS are a faux pas but for the purpose of this demo...

Meteor.startup(function(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position){
			//console.log(position.coords.latitude + "," + position.coords.longitude);
			coords = position.coords.latitude + "," + position.coords.latitude; //set our coordinates value
		}, function(){ //Fall back value if geolocation was denied or unsupported
			coords = "Location Not Detected";
		});
	}	
});

Template.devicesBtn.events({
  'click button'(event, instance) {
	event.preventDefault();
	
	Devices.insert({ //persist values to our mongoDB collection
		userAgent: navigator.userAgent,
		deviceName: WURFL.complete_device_name,
		formFactor: WURFL.form_factor,
		numberCores: (navigator.hardwareConcurrency ? navigator.hardwareConcurrency : "Undetected"),
		coords: coords,
		createdAt: new Date()
	});
  },
});

Template.body.helpers({
	devices(){ //returns values from the Devices collection
		return Devices.find();
	}
});
