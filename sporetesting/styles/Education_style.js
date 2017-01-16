var size = 0;
function categories_Education(feature, value) {
                switch(value) {case "Junior Colleges/Centralised Institute":
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [580, 580],
                  scale: 0.051724137931,
                  anchor: [15, 15],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/accommodation_camping.svg"
            })
    })];
                    break;
case "Mixed Level Schools":
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [580, 580],
                  scale: 0.051724137931,
                  anchor: [15, 15],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/amenity_court.svg"
            })
    })];
                    break;
case "Primary Schools":
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [580, 580],
                  scale: 0.051724137931,
                  anchor: [15, 15],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/accommodation_youth_hostel.svg"
            })
    })];
                    break;
case "Secondary Schools":
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [580, 580],
                  scale: 0.051724137931,
                  anchor: [15, 15],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/education_university.svg"
            })
    })];
                    break;
case "":
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(208,167,106,1.0)'})})
    })];
                    break;}};
var styleCache_Education={}
var style_Education = function(feature, resolution){
    var value = feature.get("POI_CHAR");
    var style = categories_Education(feature, value);
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_Education[key]){
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
        styleCache_Education[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Education[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};