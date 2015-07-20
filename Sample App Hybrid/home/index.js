'use strict';

app.home = (function () {
	
	var viewModel = kendo.observable({
		Id: "",
		CreatedAt: "",
		ModifiedAt: "",
	});

	var events = {
		onShow: function (e) {
			var dataProvider,
				typeName,
				itemId,
				vm;

			dataProvider = app.data.defaultProvider;
			
			itemId = "bf44ed26-ddfc-11e4-8602-a15ee1a8b466"; // item id for a clinic
			typeName = "Clinics";

			dataProvider.data(typeName).getById(itemId, function (data) {
				var resultItem = data.result;
				viewModel.set("Id", resultItem.Id);
				viewModel.set("CreatedAt", resultItem.CreatedAt);
				viewModel.set("ModifiedAt", resultItem.ModifiedAt);
			}, function (err) {
				alert("There was an error" + err.message);
			});
		}
	};

	return {
		viewModel: viewModel,
		events: events
	};
})();