define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/request/xhr"
], function(declare, lang, xhr){

	// module:
	//		dui/mobile/dh/UrlDataSource

	return declare("dui.mobile.dh.UrlDataSource", null, {
		// summary:
		//		A component that accesses the given URL and fetches the data as text.

		text: "",

		_url: "",

		constructor: function(/*String*/ url){
			// summary:
			//		Creates a new instance of the class.
			this._url = url;
		},

		getData: function(){
			// summary:
			//		Returns a Deferred that accesses the given URL and fetches the data as text.
			return xhr(this._url, {
				handleAs: "text"
			}).then(lang.hitch(this, function(response, ioArgs){
				this.text = response;
			}),function(error){
				console.log("Failed to load "+this._url+"\n"+(error.description||error));
			}); // Deferred
		}
	});
});
