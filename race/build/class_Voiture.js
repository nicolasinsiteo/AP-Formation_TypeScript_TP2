var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./class_Vehicle"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var class_Vehicle_1 = require("./class_Vehicle");
    var Voiture = /** @class */ (function (_super) {
        __extends(Voiture, _super);
        function Voiture(player_name) {
            var _this = _super.call(this) || this;
            _this._player_name = player_name;
            _this._type = "Voiture";
            _this._fuelTankCapacity = 50;
            _this._consommation = 10;
            _this._vitesse_max = 180;
            _this._fuelLevel = 50;
            _this._distance_parcourue = 0;
            _this._horn = "TUUUT TUUUUUT";
            _this.Info;
            console.log("\n*****GREAT ! you've created a " + _this._type + " object*****" + "\n");
            console.log(" You've also assigned the player " + _this._player_name + " as the driver.\n"
                + "*************************************************************************\n");
            return _this;
        }
        Object.defineProperty(Voiture.prototype, "type", {
            get: function () {
                return this._type;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Voiture.prototype, "player_Name", {
            get: function () {
                return this._player_name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Voiture.prototype, "Info", {
            get: function () {
                return console.log("Vehicle Type : " + this._type +
                    "\n Driver's Name : " + this._player_name +
                    "\n Fuel Capacity : " + this._fuelTankCapacity +
                    "\n Fuel Level : " + this._fuelLevel +
                    "\n Traveled Distance : " + this._distance_parcourue);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Voiture.prototype, "FuelTankCapacity", {
            get: function () {
                return this._fuelTankCapacity;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Voiture.prototype, "fuelLevel", {
            get: function () {
                return this._fuelLevel;
            },
            enumerable: true,
            configurable: true
        });
        Voiture.prototype.VehicleByPlayer = function (Player) {
            if (Player == this._player_name) {
                console.log("J'ai trouvé le vehicule de " + Player + ", le voici.");
                console.log(this);
                return this;
            }
        };
        return Voiture;
    }(class_Vehicle_1.Vehicle));
    exports.Voiture = Voiture;
});
