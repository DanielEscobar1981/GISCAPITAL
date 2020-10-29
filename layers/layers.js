var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BARRIOS_1 = new ol.format.GeoJSON();
var features_BARRIOS_1 = format_BARRIOS_1.readFeatures(json_BARRIOS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BARRIOS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BARRIOS_1.addFeatures(features_BARRIOS_1);
var lyr_BARRIOS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BARRIOS_1, 
                style: style_BARRIOS_1,
                interactive: false,
                title: '<img src="styles/legend/BARRIOS_1.png" /> BARRIOS'
            });
var format_BARRIOSINVICO_2 = new ol.format.GeoJSON();
var features_BARRIOSINVICO_2 = format_BARRIOSINVICO_2.readFeatures(json_BARRIOSINVICO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BARRIOSINVICO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BARRIOSINVICO_2.addFeatures(features_BARRIOSINVICO_2);
var lyr_BARRIOSINVICO_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BARRIOSINVICO_2, 
                style: style_BARRIOSINVICO_2,
                interactive: false,
                title: '<img src="styles/legend/BARRIOSINVICO_2.png" /> BARRIOSINVICO'
            });
var format_VIVIENDASCAPITAL_3 = new ol.format.GeoJSON();
var features_VIVIENDASCAPITAL_3 = format_VIVIENDASCAPITAL_3.readFeatures(json_VIVIENDASCAPITAL_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIVIENDASCAPITAL_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIVIENDASCAPITAL_3.addFeatures(features_VIVIENDASCAPITAL_3);
var lyr_VIVIENDASCAPITAL_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VIVIENDASCAPITAL_3, 
                style: style_VIVIENDASCAPITAL_3,
                interactive: true,
                title: '<img src="styles/legend/VIVIENDASCAPITAL_3.png" /> VIVIENDASCAPITAL'
            });

lyr_OSMStandard_0.setVisible(true);lyr_BARRIOS_1.setVisible(true);lyr_BARRIOSINVICO_2.setVisible(true);lyr_VIVIENDASCAPITAL_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_BARRIOS_1,lyr_BARRIOSINVICO_2,lyr_VIVIENDASCAPITAL_3];
lyr_BARRIOS_1.set('fieldAliases', {'Name': 'Name', });
lyr_BARRIOSINVICO_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', });
lyr_VIVIENDASCAPITAL_3.set('fieldAliases', {'ID': 'ID', 'LEGAJO': 'LEGAJO', 'DOMICILIO': 'DOMICILIO', 'ADJUDICATARIO': 'ADJUDICATARIO', 'DNI': 'DNI', 'DISCAPACITADO': 'DISCAPACITADO', 'SITUACION': 'SITUACION', 'OBRAS_GRUPO': 'OBRAS_GRUPO', 'OBRAS_ADREMA': 'OBRAS_ADREMA', 'OBRAS_TERRENO': 'OBRAS_TERRENO', });
lyr_BARRIOS_1.set('fieldImages', {'Name': 'TextEdit', });
lyr_BARRIOSINVICO_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', });
lyr_VIVIENDASCAPITAL_3.set('fieldImages', {'ID': 'Range', 'LEGAJO': 'TextEdit', 'DOMICILIO': 'TextEdit', 'ADJUDICATARIO': 'TextEdit', 'DNI': 'Range', 'DISCAPACITADO': 'TextEdit', 'SITUACION': 'TextEdit', 'OBRAS_GRUPO': 'TextEdit', 'OBRAS_ADREMA': 'TextEdit', 'OBRAS_TERRENO': 'TextEdit', });
lyr_BARRIOS_1.set('fieldLabels', {'Name': 'no label', });
lyr_BARRIOSINVICO_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', });
lyr_VIVIENDASCAPITAL_3.set('fieldLabels', {'ID': 'no label', 'LEGAJO': 'inline label', 'DOMICILIO': 'inline label', 'ADJUDICATARIO': 'inline label', 'DNI': 'inline label', 'DISCAPACITADO': 'inline label', 'SITUACION': 'inline label', 'OBRAS_GRUPO': 'inline label', 'OBRAS_ADREMA': 'inline label', 'OBRAS_TERRENO': 'inline label', });
lyr_VIVIENDASCAPITAL_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});