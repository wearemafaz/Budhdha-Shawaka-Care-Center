var size = 0;
var placement = 'point';
function categories_Plan_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'ASBESTOS_FENCE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(211,189,88,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'BOUND-B-GEN':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(228,84,32,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'BOUND-OTHER-GEN':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(24,218,108,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'BOUND-OUTER-GEN':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(145,39,211,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'BOUND-RW-GEN':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(122,160,203,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'BOUND-WF-GEN':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(98,226,224,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Permanent_Building':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(82,238,65,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Road':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(165,213,75,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Plan_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Layer");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("Layer Name") !== null) {
        labelText = String(feature.get("Layer Name"));
    }
    
var style = categories_Plan_3(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
