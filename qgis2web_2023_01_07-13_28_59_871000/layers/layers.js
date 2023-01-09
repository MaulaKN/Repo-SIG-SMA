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
var format_SIGSMADIPATI_0 = new ol.format.GeoJSON();
var features_SIGSMADIPATI_0 = format_SIGSMADIPATI_0.readFeatures(json_SIGSMADIPATI_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SIGSMADIPATI_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SIGSMADIPATI_0.addFeatures(features_SIGSMADIPATI_0);var lyr_SIGSMADIPATI_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SIGSMADIPATI_0, 
                style: style_SIGSMADIPATI_0,
    title: 'SIG SMA DI PATI<br />\
    <img src="styles/legend/SIGSMADIPATI_0_0.png" /> Batangan<br />\
    <img src="styles/legend/SIGSMADIPATI_0_1.png" /> Cluwak<br />\
    <img src="styles/legend/SIGSMADIPATI_0_2.png" /> Dukuhseti<br />\
    <img src="styles/legend/SIGSMADIPATI_0_3.png" /> Gabus<br />\
    <img src="styles/legend/SIGSMADIPATI_0_4.png" /> Gembong<br />\
    <img src="styles/legend/SIGSMADIPATI_0_5.png" /> Gunungwungkal<br />\
    <img src="styles/legend/SIGSMADIPATI_0_6.png" /> Jaken<br />\
    <img src="styles/legend/SIGSMADIPATI_0_7.png" /> Jakenan<br />\
    <img src="styles/legend/SIGSMADIPATI_0_8.png" /> Juwana<br />\
    <img src="styles/legend/SIGSMADIPATI_0_9.png" /> Kayen<br />\
    <img src="styles/legend/SIGSMADIPATI_0_10.png" /> Margorejo<br />\
    <img src="styles/legend/SIGSMADIPATI_0_11.png" /> Margoyoso<br />\
    <img src="styles/legend/SIGSMADIPATI_0_12.png" /> Pati<br />\
    <img src="styles/legend/SIGSMADIPATI_0_13.png" /> Pucakwangi<br />\
    <img src="styles/legend/SIGSMADIPATI_0_14.png" /> Sukolilo<br />\
    <img src="styles/legend/SIGSMADIPATI_0_15.png" /> Tambakromo<br />\
    <img src="styles/legend/SIGSMADIPATI_0_16.png" /> Tayu<br />\
    <img src="styles/legend/SIGSMADIPATI_0_17.png" /> Tlogowungu<br />\
    <img src="styles/legend/SIGSMADIPATI_0_18.png" /> Trangkil<br />\
    <img src="styles/legend/SIGSMADIPATI_0_19.png" /> Wedarijaksa<br />\
    <img src="styles/legend/SIGSMADIPATI_0_20.png" /> Winong<br />\
    <img src="styles/legend/SIGSMADIPATI_0_21.png" /> <br />'
        });

lyr_SIGSMADIPATI_0.setVisible(true);
var layersList = [baseLayer,lyr_SIGSMADIPATI_0];
lyr_SIGSMADIPATI_0.set('fieldAliases', {'KECAMATAN': 'KECAMATAN', '2020/2021': '2020/2021', 'JML SISWA': 'JML SISWA', 'JML GURU': 'JML GURU', });
lyr_SIGSMADIPATI_0.set('fieldImages', {'KECAMATAN': 'TextEdit', '2020/2021': 'TextEdit', 'JML SISWA': 'TextEdit', 'JML GURU': 'TextEdit', });
lyr_SIGSMADIPATI_0.set('fieldLabels', {'KECAMATAN': 'inline label', '2020/2021': 'inline label', 'JML SISWA': 'inline label', 'JML GURU': 'inline label', });
lyr_SIGSMADIPATI_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});