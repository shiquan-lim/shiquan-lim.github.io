var size = 0;
var ranges_MP14_SUBZONE_NO_SEA_PL = [[50.000000, 950.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(247,251,255,1.0)'})
    })]],
[950.000000, 2220.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(200,221,240,1.0)'})
    })]],
[2220.000000, 4000.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(115,179,216,1.0)'})
    })]],
[4000.000000, 8410.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(40,121,185,1.0)'})
    })]],
[8410.000000, 14350.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(8,48,107,1.0)'})
    })]]];
var styleCache_MP14_SUBZONE_NO_SEA_PL={}
var style_MP14_SUBZONE_NO_SEA_PL = function(feature, resolution){
    var value = feature.get("Age65+");
    var style = ranges_MP14_SUBZONE_NO_SEA_PL[0][2];
    for (i = 0; i < ranges_MP14_SUBZONE_NO_SEA_PL.length; i++){
        var range = ranges_MP14_SUBZONE_NO_SEA_PL[i];
        if (value > range[0] && value<=range[1]){
            style =  range[2];
        }
    };
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_MP14_SUBZONE_NO_SEA_PL[key]){
        var text = new ol.style.Text({
              font: '16.9px \'.SF NS Text\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: 'rgba(0, 0, 0, 255)'
              }),
            });
        styleCache_MP14_SUBZONE_NO_SEA_PL[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_MP14_SUBZONE_NO_SEA_PL[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};