var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Education = new ol.format.GeoJSON();
var features_Education = format_Education.readFeatures(geojson_Education, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Education = new ol.source.Vector();
jsonSource_Education.addFeatures(features_Education);var lyr_Education = new ol.layer.Vector({
                source:jsonSource_Education, 
                style: style_Education,
                title: "Education"
            });var format_MP14_SUBZONE_NO_SEA_PL = new ol.format.GeoJSON();
var features_MP14_SUBZONE_NO_SEA_PL = format_MP14_SUBZONE_NO_SEA_PL.readFeatures(geojson_MP14_SUBZONE_NO_SEA_PL, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MP14_SUBZONE_NO_SEA_PL = new ol.source.Vector();
jsonSource_MP14_SUBZONE_NO_SEA_PL.addFeatures(features_MP14_SUBZONE_NO_SEA_PL);var lyr_MP14_SUBZONE_NO_SEA_PL = new ol.layer.Vector({
                source:jsonSource_MP14_SUBZONE_NO_SEA_PL, 
                style: style_MP14_SUBZONE_NO_SEA_PL,
                title: "MP14_SUBZONE_NO_SEA_PL"
            });

lyr_Education.setVisible(true);lyr_MP14_SUBZONE_NO_SEA_PL.setVisible(true);
var layersList = [baseLayer,lyr_Education,lyr_MP14_SUBZONE_NO_SEA_PL];
lyr_Education.set('fieldAliases', {'PIO_NAME': 'PIO_NAME', 'POI_ADDRES': 'POI_ADDRES', 'POSTCODE': 'POSTCODE', 'POI_CHAR': 'POI_CHAR', 'POI_ATTRI1': 'POI_ATTRI1', 'POI_YEAR': 'POI_YEAR', 'POI_TYPE': 'POI_TYPE', 'XCOORD': 'XCOORD', 'YCOORD': 'YCOORD', });
lyr_MP14_SUBZONE_NO_SEA_PL.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SUBZONE_NO': 'SUBZONE_NO', 'SUBZONE_N': 'SUBZONE_N', 'SUBZONE_C': 'SUBZONE_C', 'CA_IND': 'CA_IND', 'PLN_AREA_N': 'PLN_AREA_N', 'PLN_AREA_C': 'PLN_AREA_C', 'REGION_N': 'REGION_N', 'REGION_C': 'REGION_C', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', 'X_ADDR': 'X_ADDR', 'Y_ADDR': 'Y_ADDR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Age65+': 'Age65+', 'AgeGroup2015_ZONE_N': 'AgeGroup2015_ZONE_N', 'AgeGroup2015_ZONE_C': 'AgeGroup2015_ZONE_C', 'AgeGroup2015_SUBZONE_N': 'AgeGroup2015_SUBZONE_N', 'AgeGroup2015_ALL_AGE': 'AgeGroup2015_ALL_AGE', 'AgeGroup2015_AGE0-4': 'AgeGroup2015_AGE0-4', 'AgeGroup2015_AGE5-9': 'AgeGroup2015_AGE5-9', 'AgeGroup2015_AGE10-14': 'AgeGroup2015_AGE10-14', 'AgeGroup2015_AGE15-19': 'AgeGroup2015_AGE15-19', 'AgeGroup2015_AGE20-24': 'AgeGroup2015_AGE20-24', 'AgeGroup2015_AGE25-29': 'AgeGroup2015_AGE25-29', 'AgeGroup2015_AGE30-34': 'AgeGroup2015_AGE30-34', 'AgeGroup2015_AGE35-39': 'AgeGroup2015_AGE35-39', 'AgeGroup2015_AGE40-44': 'AgeGroup2015_AGE40-44', 'AgeGroup2015_AGE45-49': 'AgeGroup2015_AGE45-49', 'AgeGroup2015_AGE50-54': 'AgeGroup2015_AGE50-54', 'AgeGroup2015_AGE55-59': 'AgeGroup2015_AGE55-59', 'AgeGroup2015_AGE60-64': 'AgeGroup2015_AGE60-64', 'AgeGroup2015_AGE65-69': 'AgeGroup2015_AGE65-69', 'AgeGroup2015_AGE70-74': 'AgeGroup2015_AGE70-74', 'AgeGroup2015_AGE75-79': 'AgeGroup2015_AGE75-79', 'AgeGroup2015_AGE80-84': 'AgeGroup2015_AGE80-84', 'AgeGroup2015_AGE85': 'AgeGroup2015_AGE85', });
lyr_Education.set('fieldImages', {'PIO_NAME': 'TextEdit', 'POI_ADDRES': 'TextEdit', 'POSTCODE': 'TextEdit', 'POI_CHAR': 'TextEdit', 'POI_ATTRI1': 'TextEdit', 'POI_YEAR': 'TextEdit', 'POI_TYPE': 'TextEdit', 'XCOORD': 'TextEdit', 'YCOORD': 'TextEdit', });
lyr_MP14_SUBZONE_NO_SEA_PL.set('fieldImages', {'OBJECTID': 'TextEdit', 'SUBZONE_NO': 'TextEdit', 'SUBZONE_N': 'TextEdit', 'SUBZONE_C': 'TextEdit', 'CA_IND': 'TextEdit', 'PLN_AREA_N': 'TextEdit', 'PLN_AREA_C': 'TextEdit', 'REGION_N': 'TextEdit', 'REGION_C': 'TextEdit', 'INC_CRC': 'TextEdit', 'FMEL_UPD_D': 'TextEdit', 'X_ADDR': 'TextEdit', 'Y_ADDR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Age65+': 'TextEdit', 'AgeGroup2015_ZONE_N': 'TextEdit', 'AgeGroup2015_ZONE_C': 'TextEdit', 'AgeGroup2015_SUBZONE_N': 'TextEdit', 'AgeGroup2015_ALL_AGE': 'TextEdit', 'AgeGroup2015_AGE0-4': 'TextEdit', 'AgeGroup2015_AGE5-9': 'TextEdit', 'AgeGroup2015_AGE10-14': 'TextEdit', 'AgeGroup2015_AGE15-19': 'TextEdit', 'AgeGroup2015_AGE20-24': 'TextEdit', 'AgeGroup2015_AGE25-29': 'TextEdit', 'AgeGroup2015_AGE30-34': 'TextEdit', 'AgeGroup2015_AGE35-39': 'TextEdit', 'AgeGroup2015_AGE40-44': 'TextEdit', 'AgeGroup2015_AGE45-49': 'TextEdit', 'AgeGroup2015_AGE50-54': 'TextEdit', 'AgeGroup2015_AGE55-59': 'TextEdit', 'AgeGroup2015_AGE60-64': 'TextEdit', 'AgeGroup2015_AGE65-69': 'TextEdit', 'AgeGroup2015_AGE70-74': 'TextEdit', 'AgeGroup2015_AGE75-79': 'TextEdit', 'AgeGroup2015_AGE80-84': 'TextEdit', 'AgeGroup2015_AGE85': 'TextEdit', });
lyr_Education.set('fieldLabels', {'PIO_NAME': 'header label', 'POI_ADDRES': 'no label', 'POSTCODE': 'no label', 'POI_CHAR': 'no label', 'POI_ATTRI1': 'no label', 'POI_YEAR': 'no label', 'POI_TYPE': 'no label', 'XCOORD': 'no label', 'YCOORD': 'no label', });
lyr_MP14_SUBZONE_NO_SEA_PL.set('fieldLabels', {'OBJECTID': 'no label', 'SUBZONE_NO': 'no label', 'SUBZONE_N': 'header label', 'SUBZONE_C': 'no label', 'CA_IND': 'no label', 'PLN_AREA_N': 'header label', 'PLN_AREA_C': 'no label', 'REGION_N': 'no label', 'REGION_C': 'header label', 'INC_CRC': 'no label', 'FMEL_UPD_D': 'no label', 'X_ADDR': 'no label', 'Y_ADDR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Age65+': 'header label', 'AgeGroup2015_ZONE_N': 'no label', 'AgeGroup2015_ZONE_C': 'no label', 'AgeGroup2015_SUBZONE_N': 'no label', 'AgeGroup2015_ALL_AGE': 'no label', 'AgeGroup2015_AGE0-4': 'no label', 'AgeGroup2015_AGE5-9': 'no label', 'AgeGroup2015_AGE10-14': 'no label', 'AgeGroup2015_AGE15-19': 'no label', 'AgeGroup2015_AGE20-24': 'no label', 'AgeGroup2015_AGE25-29': 'no label', 'AgeGroup2015_AGE30-34': 'no label', 'AgeGroup2015_AGE35-39': 'no label', 'AgeGroup2015_AGE40-44': 'no label', 'AgeGroup2015_AGE45-49': 'no label', 'AgeGroup2015_AGE50-54': 'no label', 'AgeGroup2015_AGE55-59': 'no label', 'AgeGroup2015_AGE60-64': 'no label', 'AgeGroup2015_AGE65-69': 'no label', 'AgeGroup2015_AGE70-74': 'no label', 'AgeGroup2015_AGE75-79': 'no label', 'AgeGroup2015_AGE80-84': 'no label', 'AgeGroup2015_AGE85': 'no label', });
lyr_MP14_SUBZONE_NO_SEA_PL.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});