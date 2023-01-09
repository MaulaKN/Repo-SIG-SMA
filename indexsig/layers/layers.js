var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_sigLapakGIScomBatas_Kecamatan_BIG_PPBW_0 = new ol.format.GeoJSON();
var features_sigLapakGIScomBatas_Kecamatan_BIG_PPBW_0 = format_sigLapakGIScomBatas_Kecamatan_BIG_PPBW_0.readFeatures(json_sigLapakGIScomBatas_Kecamatan_BIG_PPBW_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sigLapakGIScomBatas_Kecamatan_BIG_PPBW_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_sigLapakGIScomBatas_Kecamatan_BIG_PPBW_0.addFeatures(features_sigLapakGIScomBatas_Kecamatan_BIG_PPBW_0);var lyr_sigLapakGIScomBatas_Kecamatan_BIG_PPBW_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sigLapakGIScomBatas_Kecamatan_BIG_PPBW_0, 
                style: style_sigLapakGIScomBatas_Kecamatan_BIG_PPBW_0,
    title: 'sig [LapakGIS.com] Batas_Kecamatan_BIG_PPBW<br />\
    <img src="styles/legend/sigLapakGIScomBatas_Kecamatan_BIG_PPBW_0_0.png" /> Batangan<br />\
    <img src="styles/legend/sigLapakGIScomBatas_Kecamatan_BIG_PPBW_0_1.png" /> Cluwak<br />\
    <img src="styles/legend/sigLapakGIScomBatas_Kecamatan_BIG_PPBW_0_2.png" /> Dukuhseti<br />\
    <img src="styles/legend/sigLapakGIScomBatas_Kecamatan_BIG_PPBW_0_3.png" /> Gabus<br />\
    <img src="styles/legend/sigLapakGIScomBatas_Kecamatan_BIG_PPBW_0_4.png" /> Gembong<br />\
    <img src="styles/legend/sigLapakGIScomBatas_Kecamatan_BIG_PPBW_0_5.png" /> Gunungwungkal<br />\
    <img src="styles/legend/sigLapakGIScomBatas_Kecamatan_BIG_PPBW_0_6.png" /> Jaken<br />\
    <img src="styles/legend/sigLapakGIScomBatas_Kecamatan_BIG_PPBW_0_7.png" /> Jakenan<br />\
    <img src="styles/legend/sigLapakGIScomBatas_Kecamatan_BIG_PPBW_0_8.png" /> Juwana<br />\
    <img src="styles/legend/sigLapakGIScomBatas_Kecamatan_BIG_PPBW_0_9.png" /> Kayen<br />\
    <img src="styles/legend/sigLapakGIScomBatas_Kecamatan_BIG_PPBW_0_10.png" /> Margorejo<br />\
    <img src="styles/legend/sigLapakGIScomBatas_Kecamatan_BIG_PPBW_0_11.png" /> Margoyoso<br />\
    <img src="styles/legend/sigLapakGIScomBatas_Kecamatan_BIG_PPBW_0_12.png" /> Pati<br />\
    <img src="styles/legend/sigLapakGIScomBatas_Kecamatan_BIG_PPBW_0_13.png" /> Pucakwangi<br />\
    <img src="styles/legend/sigLapakGIScomBatas_Kecamatan_BIG_PPBW_0_14.png" /> Sukolilo<br />\
    <img src="styles/legend/sigLapakGIScomBatas_Kecamatan_BIG_PPBW_0_15.png" /> Tambakromo<br />\
    <img src="styles/legend/sigLapakGIScomBatas_Kecamatan_BIG_PPBW_0_16.png" /> Tayu<br />\
    <img src="styles/legend/sigLapakGIScomBatas_Kecamatan_BIG_PPBW_0_17.png" /> Tlogowungu<br />\
    <img src="styles/legend/sigLapakGIScomBatas_Kecamatan_BIG_PPBW_0_18.png" /> Trangkil<br />\
    <img src="styles/legend/sigLapakGIScomBatas_Kecamatan_BIG_PPBW_0_19.png" /> Wedarijaksa<br />\
    <img src="styles/legend/sigLapakGIScomBatas_Kecamatan_BIG_PPBW_0_20.png" /> Winong<br />\
    <img src="styles/legend/sigLapakGIScomBatas_Kecamatan_BIG_PPBW_0_21.png" /> <br />'
        });

lyr_sigLapakGIScomBatas_Kecamatan_BIG_PPBW_0.setVisible(true);
var layersList = [baseLayer,lyr_sigLapakGIScomBatas_Kecamatan_BIG_PPBW_0];
lyr_sigLapakGIScomBatas_Kecamatan_BIG_PPBW_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'UUPP': 'UUPP', });
lyr_sigLapakGIScomBatas_Kecamatan_BIG_PPBW_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'UUPP': 'TextEdit', });
lyr_sigLapakGIScomBatas_Kecamatan_BIG_PPBW_0.set('fieldLabels', {'OBJECTID': 'inline label', 'METADATA': 'inline label', 'SRS_ID': 'inline label', 'WADMKC': 'inline label', 'WADMKK': 'inline label', 'WADMPR': 'inline label', 'UUPP': 'inline label', });
lyr_sigLapakGIScomBatas_Kecamatan_BIG_PPBW_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});