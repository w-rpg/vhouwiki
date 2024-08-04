/*\
title: $:/plugins/vhou-atroph/vhiddly/macros/js/parsedateyear.js
type: application/javascript
module-type: macro

Parses a date into just its year.
\*/
(function(){
    /*jslint mode: true, browser: true*/
    /*global $tw: false*/
    "use strict";

    /*
    Information about this macro
    */

    exports.name = "parsedateyear";

    exports.params = [
        { name: "stamp" }
    ];

    /*
    Run the macro
    */
    exports.run = function(stamp) {
        return stamp.slice(0,4);
    };
})();