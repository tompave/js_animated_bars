/**
 * Let's pretend these can be returned from an AJAX GET Request...
 */
var labels = {
    Austria : "Austria",
    Belgium : "Belgium",
    Bulgaria : "Bulgaria",
    Cyprus : "Cyprus",
    Czech_Republic : "Czech Republic",
    Denmark : "Denmark",
    Estonia : "Estonia",
    Finland : "Finland",
    France : "France",
    Germany : "Germany",
    Greece : "Greece",
    Hungary : "Hungary",
    Ireland : "Ireland",
    Italy : "Italy",
    Latvia : "Latvia",
    Lithuania : "Lithuania",
    Luxembourg : "Luxembourg",
    Malta : "Malta",
    Netherlands : "Netherlands",
    Poland : "Poland",
    Portugal : "Portugal",
    Romania : "Romania",
    Slovakia : "Slovakia",
    Slovenia : "Slovenia",
    Spain : "Spain",
    Sweden : "Sweden",
    United_Kingdom : "United Kingdom"
};
var populations = {
    Germany : 81799600,
    France : 65350000,
    United_Kingdom : 62262000,
    Italy : 60681514,
    Spain : 46030109,
    Poland : 38501000,
    Romania : 19042936,
    Netherlands : 16847007,
    Greece : 11305118,
    Belgium : 11007020,
    Czech_Republic : 10562214,
    Portugal : 10561614,
    Hungary : 10015295,
    Sweden : 9415295,
    Austria : 8414638,
    Bulgaria : 7364570,
    Denmark : 5671050,
    Slovakia : 5397036,
    Finland : 5350475,
    Ireland : 4588252,
    Lithuania : 3190070,
    Latvia : 2067887,
    Slovenia : 2050189,
    Estonia : 1340194,
    Cyprus : 801851,
    Luxembourg : 511840,
    Malta : 452515
};
var extensions = {
    France : 674843,
    Spain : 504030,
    Sweden : 449964,
    Germany : 357021,
    Finland : 338424,
    Poland : 312685,
    Italy : 301338,
    United_Kingdom : 243610,
    Romania : 238391,
    Greece : 131990,
    Bulgaria : 110994,
    Hungary : 93030,
    Portugal : 92390,
    Austria : 83855,
    Czech_Republic : 78866,
    Ireland : 70273,
    Lithuania : 65200,
    Latvia : 64589,
    Slovakia : 49035,
    Estonia : 45227,
    Denmark : 43075,
    Netherlands : 41543,
    Belgium : 30528,
    Slovenia : 20273,
    Cyprus : 9251,
    Luxembourg : 2586,
    Malta : 316
};

function getLabels(){
    return labels;
};

function getPopulations(){
    return populations;
};

function getExtensions(){
    return extensions;
};
