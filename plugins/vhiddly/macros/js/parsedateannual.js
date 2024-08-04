/*\
title: $:/plugins/vhou-atroph/vhiddly/macros/js/parsedateannual.js
type: application/javascript
module-type: macro

Parses a one-time event into a generic year event.
\*/
(function(){
    /*jslint mode: true, browser: true*/
    /*global $tw: false*/
    "use strict";

    /*
    Information about this macro
    */

    exports.name = "parsedateannual";

    exports.params = [
        { name: "stamp" }
    ];

    /*
    Run the macro
    */
    exports.run = function(stamp) {
        var loop = 0;
        while (loop != 4) {
            stamp = setCharAt(stamp,loop,".");
            loop++;
        }
        return stamp;
    };
})();

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}