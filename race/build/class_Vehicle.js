//*****************TODO    CREATE THE MASTER CLASS  */
/*
MUST CONTAIN 3 ATTRIBUTES
- TYPE = CAN ONLY HAVE 3 OPTIONS (moto voiture camion)
- FuelTank_Capacity = can be 30 50 200 according to object type
- fuel level = have a min value and a max value that can't be exceed
*/
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //******************************************************************** */
    //************************CLASS VEHICLE BEGIN************************* */
    //******************************************************************** */
    var Vehicle = /** @class */ (function () {
        function Vehicle() {
            this._victory = false;
            this._type = "Voiture";
            this._fuelTankCapacity = 50;
            this._consommation = 10;
            this._vitesse_max = 180;
            this._player_name = "";
            this._fuelLevel = 0;
            this._distance_parcourue = 0;
            this._vitesse_actuelle = 0;
            this._horn = "";
            this._refreshRate = 1000;
            console.log("///// correctly created a vehicule and get acces to all attributes");
        }
        Vehicle.prototype.addFuel = function (amount) {
            console.log("// I'm the 'Void method' in the '_Voiture' Class, you've called me to add " + amount + "L in the Fuel Tank.\n");
            var actualAmount = this._fuelLevel;
            var maxAmount = this._fuelTankCapacity;
            if (actualAmount + amount <= maxAmount) {
                this._fuelLevel += amount;
                console.log("ALRIGHT ! i've added " + amount + "L to the Fuel Tank, actual Level is now " + this._fuelLevel + "L.\n");
            }
            else {
                var maxAdd = maxAmount - actualAmount;
                var overFuel = amount - maxAdd;
                this._fuelLevel += maxAdd;
                console.log("UNABLE TO PUT " + amount + "L in the Fuel Tank, ONLY PUT " + maxAdd + "L in it. you saved " + overFuel + "L ;) .");
            }
            if (this._fuelLevel == this._fuelTankCapacity) {
                console.log(this._horn);
            }
        };
        ////////////////////////////////
        /////// DEFINE METHOD ROULER ///
        ////////////////////////////////
        //****************************************************************************************************** */
        // This method take a boolean argument to define if the conditions are good to launch the "divre phase"
        //****************************************************************************************************** */
        Vehicle.prototype.rouler = function (statut) {
            var _this = this;
            var timer;
            if (statut == true) // If conditions to drive are good, we enter the Method
             {
                timer = setInterval((function () {
                    _this._vitesse_actuelle = _this.Accelerate(); // is a method that will increase the speed each cycle till the max speed is reached 
                    _this._consommation = _this.Consuming(); // is a method that return the fuel consuming ratio accordingly to the accelerate ratio
                    _this._distance_parcourue = _this.Distance(); // Calculate the travelled distance each time the Interval is refreshed
                }), this._refreshRate);
            }
            else {
                clearInterval(timer);
            }
        };
        ////////////////////////////////////
        //////ACCELERATE METHOD/////////////
        ////////////////////////////////////// is a method that will increase the speed each cycle till the max speed is reached 
        Vehicle.prototype.Accelerate = function () {
            if (this._vitesse_actuelle < this._vitesse_max) {
                return 10;
            }
            else {
                return 0;
            }
        };
        ////////////////////////////////////
        //////CONSUMMING METHOD/////////////
        ////////////////////////////////////// is a method that return the fuel consuming ratio accordingly to the accelerate ratio   
        Vehicle.prototype.Consuming = function () {
            if (this._vitesse_actuelle > 0 && this._vitesse_actuelle < 50) {
                return this._consommation / 2;
            }
            if (this._vitesse_actuelle >= 50 && this._vitesse_actuelle < 100) {
                return 6;
            }
            else {
                return 10;
            }
        };
        ////////////////////////////////////
        //////DISTANCE METHOD///////////////
        //////////////////////////////////// / is a method that determinate the traveled distance by second and adapt to the timer's refresh rate  
        Vehicle.prototype.Distance = function () {
            return this._vitesse_actuelle / 3600 * (this._refreshRate / 1000);
        };
        //*************ATTRIBUTES********** */
        Vehicle.raceTotalDistance = 20;
        Vehicle.raceIsOver = false;
        return Vehicle;
    }());
    exports.Vehicle = Vehicle;
});
