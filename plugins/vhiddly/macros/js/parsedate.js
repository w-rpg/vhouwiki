/*\
title: $:/plugins/vhou-atroph/vhiddly/macros/js/parsedate.js
type: application/javascript
module-type: macro

Macro to parse a particular date in YYYYMMDD format to its plain english form. ex: <<parsedate 20230926>> -> September 26, 2023

Use 4 periods instead of a year value to not specify a specific year. ex: <<parsedate ....0926>> -> September 26

To get values from a field, json, or otherwise you may need to use transclude. ex: <$transclude $variable="parsedate" stamp={{!!modified}}/>
\*/
(function(){
    /*jslint mode: true, browser: true*/
    /*global $tw: false*/
    "use strict";

    /*
    Information about this macro
    */

    exports.name = "parsedate";

    exports.params = [
        { name: "stamp" }
    ];

    /*
    Run the macro
    */
    exports.run = function(stamp) {

        var year = stamp.slice(0,4);
        year = year.replace(/^0{1,3}/gm,'') // if there are 1-3 leading zeros, remove them

        var month = "<<num2mon " + stamp.slice(4,6) + ">>";

        var day = stamp.slice(6,8);
        if (day[0] == 0) {
            day = day[1];
        }
        day = "<<parseth " + day + ">>";

        switch(year) {
            case "....":
                return month + " " + day;
            default:
                return month + " " + day + ", " + year;
        }
    };
})();