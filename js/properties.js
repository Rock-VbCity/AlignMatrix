define( [], function () {
	'use strict';

	// ****************************************************************************************
	// Custom components
	// ****************************************************************************************

	var showTitles = {
		ref: "showTitles",
		label: "Show Titles",
		defaultValue: false,
		show: false
	};

	var myResetCanvas = {
		ref: "myproperties.myResetCanvas",
		label: "Reset Canvas to Image Size",
		type: "boolean",
		component: "switch",
		show: function(layout) { if(layout.myproperties.myImage.length === 0) { return false } else { return true }},
		defaultValue: false,
		options: [
			{ 
				value: true,
				label: "Yes"
			}, {
				value: false,
				label: "No"
			}
		]
	};

	var myImage = {
		ref: "myproperties.myImage",
		label: "Image Object",
		component: "media",
		layoutRef: "myproperties.myImage",
		type: "string",
		defaultValue: ""
	};

	var myImageAlignment = {
		ref: "myproperties.myImageAlignment",
		label: "Image Alignment",
		type: "string",
		component: "align-matrix",
		defaultValue: "centerCenter",
		show: function(layout) { if(layout.myproperties.myImage.length === 0) { return false } else { return true }}
	};

	var myImagePadding = {
		ref: "myproperties.myImagePadding",
		label: "Image Padding",
		type: "boolean",
		component: "switch",
		show: function(layout) { if(layout.myproperties.myImage.length === 0) { return false } else { return true }},
		defaultValue: false,
		options: [
			{ 
				value: true,
				label: "Yes"
			}, {
				value: false,
				label: "No"
			}
		]
	};

	// ****************************************************************************************
	// Sections definitions
	// ****************************************************************************************

	var myCustomSection = {
		//type: "items", //<== not necessary to define "items"
		component: "expandable-items",
		label: "My Accordion Section",
		items: {
			myNewHeader: {
				type: "items",
				label: "Image Attributes",
				items: {
					showTitles: showTitles,
					myImage: myImage,
					myImageAlignment: myImageAlignment,
					myImagePadding: myImagePadding
				}
			}
			
		}
	};

	// ****************************************************************************************
	// Property Panel Definition
	// ****************************************************************************************

	// Return overall definition of the property accordion
	return {
		type: "items",
		component: "accordion",
		items: {
			// appearance: appearanceSection,
			customSection: myCustomSection
		}
	};

} );