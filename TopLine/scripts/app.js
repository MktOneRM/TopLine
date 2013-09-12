(function (global) {
	app = global.app = global.app || {};

	document.addEventListener("deviceready", function () {
		app.application = new kendo.mobile.Application(document.body, {
			transition: "slide",
			loading: '<h1 class="loading-message">Carregando...</h1>', 
			skin:"flat"
		});
	}, false);
})(window)