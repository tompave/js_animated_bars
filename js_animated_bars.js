// Imagine I get these via Ajax or whatever
var labels = getLabels();
var populations = getPopulations(); //already ordered
var extensions = getExtensions(); //already ordered
var topWidth;
var barIDs = [];
for (key in labels) { barIDs.push(key); }

var barHtmlTemplate = '<div id="label_id" class="bar_group"><div class="name">label_txt</div><div class="bar_wrapper"><div class="bar" style="background-color:[background-color]; width: [width]%;"><div class="bar_label">[data]</div></div></div></div>';


function getColor(length) {
    return "hsla("+ Math.round(length*2.2) +",100%,"+ getLightness(length) +"%,0.65)";
}

function getLightness(length){
    if(length < 50)
        return 50-(Math.round(length/3.4));
    else
        return 0+(Math.round(length/2));
}

//q is the volume
function getLength(q){
    var relLength = (q/topWidth)*90 + 10;
    return relLength;
}

/**
 * returns the HTML for a specific bar given the textual ID of the item.
 */
function buildBarHtml(barID,length,color,data){
    return barHtmlTemplate.replace('label_id', barID)
                        .replace('label_txt',labels[barID])
                        .replace('[data]', data)
                        .replace('[background-color]', color)
                        .replace('[width]', length);
}


function buildAllBars(){
    topWidth = getTheHighest(populations);
    $("#populations_switch").addClass("selected");

    var allBarsHTML = "";
    var theBar, length, color, data;
    for(barID in labels){
        length = getLength(populations[barID]);
        color = getColor(length);
        data = populations[barID];
        theBar = buildBarHtml(barID, length, color, data);
        allBarsHTML += theBar+"\n";
    }
    return allBarsHTML;
}


function reorderBy(event){
    $(".switch").removeClass("selected");
    $(event.target).addClass("selected");
    if($(event.target).attr("id") === "extensions_switch")
        $("#what").html("Territory extension, in km<sup>2</sup>");
    else
        $("#what").html("Population, in units");

    var list = event.data;
    topWidth = getTheHighest(list);
    var length, data;

    for(key in list){
        data = list[key];
        length = getLength(list[key]);
        $("#"+key).find(".bar")
                .css("width", length+"%")
                .css("background-color",getColor(length))
                .find(".bar_label").html(data);
    }
}


function getTheHighest(list) {
    var top;
    for(key in list){
        top = list[key];
        break;
    }
    return top;
}


$(document).ready(function(e){
    var allBars = buildAllBars();
    $("#bars_container").html(allBars);

    $("#populations_switch").click(populations, reorderBy);
    $("#extensions_switch").click(extensions, reorderBy);
});