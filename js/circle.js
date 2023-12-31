
(function() {
    "use strict";
    let circle = {
        radius: 5,

        getArea: function () {
            let area = Math.PI * Math.pow(this.radius, 2)
            return area;
        },

        logInfo: function (doRounding) {
            let area = this.getArea();
            if (doRounding) {
                area = Math.round(area)
            }

            console.log(`Area of a circle with radius: ${this.radius}, is: ${area}`);
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");

    circle.radius = 5

    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();