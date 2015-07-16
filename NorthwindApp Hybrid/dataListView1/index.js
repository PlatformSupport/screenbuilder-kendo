'use strict';

app.dataListView1 = kendo.observable({
    onShow: function() {}
});
(function(parent) {
    var dataProvider = app.data.defaultProvider,
        dataSourceOptions = {
            type: 'everlive',
            transport: {
                typeName: 'NoSQLType',
                dataProvider: dataProvider
            },
            schema: {
                model: {
                    fields: {
                        'SomeField': {
                            field: 'SomeField',
                            defaultValue: ''
                        },
                    }
                }
            },
        },
        dataSource = new kendo.data.DataSource(dataSourceOptions),
        dataListView1Model = kendo.observable({
            dataSource: dataSource
        });

    parent.set('dataListView1Model', dataListView1Model);
})(app.dataListView1);