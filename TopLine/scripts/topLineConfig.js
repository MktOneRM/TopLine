(function($, undefined) {
	var domain = "revenue.azurewebsites.net",
	serverUrl = "http://" + domain,
	serviceUrl = serverUrl + "/api";
	
	var viewModelUrl = new kendo.data.ObservableObject({
		serviceUrl: serviceUrl
	});
	
	$.extend(window, {
		viewModelUrl: viewModelUrl
	}
	);
})(jQuery);