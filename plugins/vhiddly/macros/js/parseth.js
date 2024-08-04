/*\
title: $:/plugins/vhou-atroph/vhiddly/macros/js/parseth.js
type: application/javascript
module-type: macro

Macro to add an ordinal dependent on the last digit in a particular number.
\*/
(function(){
    /*jslint mode: true, browser: true*/
    /*global $tw: false*/
    "use strict";

    /*
    Information about this macro
    */

    exports.name = "parseth";

    exports.params = [
        { name: "number" }
    ];

    /*
    Run the macro
    */
    exports.run = function(number) {
        switch(number.slice(-1)) {
            case "1":
                return number + "st";
            case "2":
                return number + "nd";
            case "3":
                return number + "rd";
            default:
                return number + "th";
        }
    };
})();