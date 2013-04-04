// Imagine I get these via Ajax or whatever
var labels = getLabels();
var populations = getPopulations(); //already ordered
var extensions = getExtensions(); //already ordered
var topLength;

var dimension = "width";
// change to "height" to use verical bars (also update the CSS!)
//var dimension = "height";

// the bar template string
var barHtmlTemplate = '<div id="[label_id]" class="bar_group"><div class="name">[label_txt]</div><div class="bar_wrapper"><div class="bar" style="background-color:[background-color]; '+
                        dimension+': [lenght]%;"><div class="bar_label">[data]</div></div></div></div>';




/**
 * returns the HTML string for a specific bar given its characteristics
 */
function buildBarHtml(barID,length,color,data){
    return barHtmlTemplate.replace('[label_id]', barID)
                        .replace('[label_txt]',labels[barID])
                        .replace('[data]', data)
                        .replace('[background-color]', color)
                        .replace('[lenght]', length);
}

/**
 * kickstarts the bar list assembling them all
 */
function buildAllBars(){
    topLength = getTheHighest(populations);
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

/**
 * updates the bars
 */
function updateBars(event){
    $(".switch").removeClass("selected");
    $(event.target).addClass("selected");
    if($(event.target).attr("id") === "extensions_switch")
        $("#what").html("Territory extension, in km<sup>2</sup>");
    else
        $("#what").html("Population, in units");

    var list = event.data;
    topLength = getTheHighest(list);
    var length, data;

    for(key in list){
        data = list[key];
        length = getLength(list[key]);
        $("#"+key).find(".bar")
                .css(dimension, length+"%")
                .css("background-color",getColor(length))
                .find(".bar_label").html(data);
    }
}



/**
 * 
 */
$(document).ready(function(e){
    var allBars = buildAllBars();
    $("#bars_container").html(allBars);

    $("#populations_switch").click(populations, updateBars);
    $("#extensions_switch").click(extensions, updateBars);
});



// ---------------------------------
// business methods

/**
 * returns the highest value in the set of data being used
 */
function getTheHighest(list) {
    var top;
    for(key in list){
        top = list[key];
        break;
    }
    return top;
}

/**
 * Returns the color given the length of the bar
 */
function getColor(length) {
    var hue, lightness;

    hue = Math.round(length*2.2);
    if(length < 50) { lightness = 50-(Math.round(length/3.4)); }
    else { lightness = 0+(Math.round(length/2)); }

    return "hsla("+ hue +",100%,"+ lightness +"%,0.65)";
}

/**
 * Returns length (as %) of the bar given the absolute value represented
 */
function getLength(q){
    var relLength = (q/topLength)*90 + 10;
    return relLength;
}