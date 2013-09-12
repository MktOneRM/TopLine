(function($, undefined) {
	var obsUrl = new kendo.data.ObservableObject({
		baseUrl = "http://revenue.azurewebsites.net/api"
	});
	
	$.extend(window, {
		obsUrl: obsUrl
	});
})(jQuery);