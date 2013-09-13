(function (global) {
	app = global.app = global.app || {};

	document.addEventListener("deviceready", function () {
		app.application = new kendo.mobile.Application(document.body, {
			transition: "slide",
			loading: '<h1 class="loading-message">Carregando...</h1>', 
			skin:"flat"
		});
		
		kendo.mobile.ui.Drawer.current = null;
		
	}, false);
	
	$(window).resize(function() {
		var newHeigth = $(document).height() - 100;
			
		var chart = $("#chtGrafDesRealizadoVendaLoja").data("kendoChart"); 
		if (chart != null) {
			chart.options.chartArea.height = newHeigth; 
			chart.refresh(); 
		}
			
		var chart1 = $("#chtGrafDesRealizadoVendaCol").data("kendoChart"); 
			
		if (chart1 != null) {                
			chart1.options.chartArea.height = newHeigth; 
			chart1.refresh(); 
		}
			
		var chart2 = $("#chtGrafDesRealizadoVendaTurno").data("kendoChart"); 
			
		if (chart2 != null) {
			chart2.options.chartArea.height = newHeigth; 
			chart2.refresh(); 
		}
			
		var chart3 = $("#chtGrafDesProdutividadeVendasPerdidasLoja").data("kendoChart"); 
			
		if (chart3 != null) {
			chart3.options.chartArea.height = newHeigth; 
			chart3.refresh(); 
		}
			
		var chart4 = $("#chtGrafDesProdutividadeVendasPerdidasTurno").data("kendoChart"); 
			
		if (chart4 != null) {
			chart4.options.chartArea.height = newHeigth; 
			chart4.refresh(); 
		}
			
		var chart5 = $("#chtGrafDesProdutividadeVendasPerdidasCol").data("kendoChart"); 
			
		if (chart5 != null) {
			chart5.options.chartArea.height = newHeigth; 
			chart5.refresh(); 
		}
	});
})(window)