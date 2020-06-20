define( [ "qlik",
	      "./js/properties",
	      "jquery"
],
function ( qlik, props, $) {

	function isEmpty(obj) {
		return (obj === null || obj === undefined || obj === '' || obj.length ===0);	
	};

	return {
		support : {
			snapshot: false,
			export: false,
			exportData : false
		},

		definition: props,

		paint: function ($element, layout) {
			//add your rendering code here

			var myqInfoqId     = layout.qInfo.qId;
			var myImage_Id     = 'img_' + myqInfoqId;
			var myImage_Id_jQ  = '#' + myImage_Id;
			var myHTML         = '';

			var myTranslateAlignment = {
					topLeft:      "topLeft",
					centerLeft:   "topCenter",
					bottomLeft:   "topRight",
					topCenter:    "centerLeft",
					centerCenter: "centerCenter",
					bottomCenter: "centerRight",
					topRight:     "bottomLeft",
					centerRight:  "bottomCenter",
					bottomRight:  "bottomRight",
			};

			var myH_Alignments = {
					topLeft:      "text-align: left;",
					centerLeft:   "text-align: left;",
					bottomLeft:   "text-align: left;",
					topCenter:    "text-align: center;",
					centerCenter: "text-align: center;",
					bottomCenter: "text-align: center;",
					topRight:     "text-align: right;",
					centerRight:  "text-align: right;",
					bottomRight:  "text-align: right;",
			};

			var myV_Alignments = {
					topLeft:      "vertical-align: top;",
					centerLeft:   "vertical-align: middle;",
					bottomLeft:   "vertical-align: bottom;",
					topCenter:    "vertical-align: top;",
					centerCenter: "vertical-align: middle;",
					bottomCenter: "vertical-align: bottom;",
					topRight:     "vertical-align: top;",
					centerRight:  "vertical-align: middle;",
					bottomRight:  "vertical-align: bottom;",
			};	

			var myRTAlignment = myTranslateAlignment[layout.myproperties.myImageAlignment];

			// rendering
			// extension container header adjustments

			$("div[tid='" + myqInfoqId + "'").find("header.qv-object-header").hide(); // hider header
			$("div[tid='" + myqInfoqId + "'").find("div.qv-object-nav.ng-isolate-scope.inline").hide();
			if(layout.myproperties.myImagePadding) {
				$("div[tid='" + myqInfoqId + "'").find("div.qv-inner-object.no-titles").css({"padding": ""});
			} else {
				$("div[tid='" + myqInfoqId + "'").find("div.qv-inner-object.no-titles").css({"padding": "0px"});
			}
			
			// get image html
			if(!isEmpty(layout.myproperties.myImage)) {
				myHTML        = '<div style="height: 100%; width: 100%; ' + myH_Alignments[myRTAlignment] + '">';
				myHTML       += '<span style="display:inline-block; height: 100%; vertical-align: middle;"></span>';
				// myHTML_Image       += '<span style="display:inline-block; height: 100%;"></span>';
				myHTML       += '<img id="' + myImage_Id + '" src="' + layout.myproperties.myImage + '" style="' + myV_Alignments[myRTAlignment] + ' max-height: 300px;" border="1">';
				myHTML       += '</div>';
			}

			$element.html(myHTML);
			//needed for export
			return qlik.Promise.resolve();
		}
	};

} );

