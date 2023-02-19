var wms_layers = [];


        var lyr_Satellite_0 = new ol.layer.Tile({
            'title': 'Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Createdby_1 = new ol.format.GeoJSON();
var features_Createdby_1 = format_Createdby_1.readFeatures(json_Createdby_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Createdby_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Createdby_1.addFeatures(features_Createdby_1);
var lyr_Createdby_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Createdby_1, 
                style: style_Createdby_1,
                interactive: false,
                title: '<img src="styles/legend/Createdby_1.png" /> Created by'
            });
var format_ProposedBuilding_2 = new ol.format.GeoJSON();
var features_ProposedBuilding_2 = format_ProposedBuilding_2.readFeatures(json_ProposedBuilding_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProposedBuilding_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProposedBuilding_2.addFeatures(features_ProposedBuilding_2);
var lyr_ProposedBuilding_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProposedBuilding_2, 
                style: style_ProposedBuilding_2,
                interactive: false,
                title: '<img src="styles/legend/ProposedBuilding_2.png" /> Proposed Building'
            });
var format_Plan_3 = new ol.format.GeoJSON();
var features_Plan_3 = format_Plan_3.readFeatures(json_Plan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Plan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plan_3.addFeatures(features_Plan_3);
var lyr_Plan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Plan_3, 
                style: style_Plan_3,
                interactive: false,
    title: 'Plan<br />\
    <img src="styles/legend/Plan_3_0.png" /> ASBESTOS FENCE<br />\
    <img src="styles/legend/Plan_3_1.png" /> Earth Bank<br />\
    <img src="styles/legend/Plan_3_2.png" /> Other Boundary<br />\
    <img src="styles/legend/Plan_3_3.png" /> Outer Boundary<br />\
    <img src="styles/legend/Plan_3_4.png" /> Retaining Wall<br />\
    <img src="styles/legend/Plan_3_5.png" /> Wire Fence<br />\
    <img src="styles/legend/Plan_3_6.png" /> Permanent_Building<br />\
    <img src="styles/legend/Plan_3_7.png" /> Road<br />'
        });

lyr_Satellite_0.setVisible(true);lyr_Createdby_1.setVisible(true);lyr_ProposedBuilding_2.setVisible(true);lyr_Plan_3.setVisible(true);
var layersList = [lyr_Satellite_0,lyr_Createdby_1,lyr_ProposedBuilding_2,lyr_Plan_3];
lyr_Createdby_1.set('fieldAliases', {'id': 'id', 'Detail': 'Detail', });
lyr_ProposedBuilding_2.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Plan_3.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Layer Name': 'Layer Name', });
lyr_Createdby_1.set('fieldImages', {'id': 'TextEdit', 'Detail': 'TextEdit', });
lyr_ProposedBuilding_2.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Plan_3.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'Range', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Layer Name': 'TextEdit', });
lyr_Createdby_1.set('fieldLabels', {'id': 'no label', 'Detail': 'no label', });
lyr_ProposedBuilding_2.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'inline label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_Plan_3.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Layer Name': 'no label', });
lyr_Plan_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});