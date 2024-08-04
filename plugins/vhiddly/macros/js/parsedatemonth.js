/*\
title: $:/plugins/vhou-atroph/vhiddly/macros/js/parsedatemonth.js
type: application/javascript
module-type: macro

Parses a date into just its month.
\*/
(function(){
    /*jslint mode: true, browser: true*/
    /*global $tw: false*/
    "use strict";

    /*
    Information about this macro
    */

    exports.name = "parsedatemonth";

    exports.params = [
        { name: "stamp" }
    ];

    /*
    Run the macro
    */
    exports.run = function(stamp) {
        return "<<num2mon " + stamp.slice(4,6) + ">>";
    };
})();