sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	return Controller.extend("sap.training.fullscreen.controller.Overview", {
		getRouter: function() {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},

		onPress: function(oEvent) {
			var oItem, oCtx, sCarrid, oRouter;

			oItem = oEvent.getSource();
			oCtx = oItem.getBindingContext("travel");
			sCarrid = oCtx.getProperty("Carrid");

			oRouter = this.getRouter();

			oRouter.navTo("carrier", {
				carrierId: sCarrid
			}, false /*with history*/ );
		}

	});
});

