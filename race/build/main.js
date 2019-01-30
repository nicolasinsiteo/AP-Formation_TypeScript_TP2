(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./class_Voiture", "./class_Moto", "./class_Camion"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var class_Voiture_1 = require("./class_Voiture");
    var class_Moto_1 = require("./class_Moto");
    var class_Camion_1 = require("./class_Camion");
    // create a new car and add 55L of fuel
    var gt = new class_Voiture_1.Voiture("roger");
    console.log("gt.type = " + gt.type + "\n");
    console.log("// AUTO DEFINED VALUE in '_Vehicle' Class // gt fuelTank capacity = " + gt.FuelTankCapacity + "\n");
    console.log("// AUTO DEFINED DEFAULT VALUE in '_Vehicle' Class // gt fuelLevel = " + gt.fuelLevel + "\n");
    gt.addFuel(55);
    console.log("gt fuelLevel = " + gt.fuelLevel);
    gt.Info;
    // END CREATE A NEW CAR
    // CREATE A PLAYERS ARRAY
    var playersList = ["Jack", "Joe", "Joshua", "Kyle", "Ethan", "Lucian", "Anthea", "Gorhk"];
    // CREATE A VEHICLE FOR EACH PLAYER ARRAY
    var allVehiclesInRace = [];
    // Create a function able to create a vehicle for each player in the Player list
    GiveAVehicleToAllPlayers(playersList);
    var test = allVehiclesInRace[1];
    test.addFuel(250);
    gt.Info;
    gt.Info;
    console.log(test);
    console.log(gt);
    // FUNCTIONS
    // FUNCTION TO GIVE A VEHICLE TO ANY PLAYERS IN THE PLAYERS LIST
    function GiveAVehicleToAllPlayers(PlayersList) {
        for (var i = 0; i < PlayersList.length; i++) {
            console.log("Create vehicle N°" + i + ".");
            var vehicleType = RandomVehicle();
            console.log("\n*****************************************************\n" +
                "créé une var random : " + vehicleType);
            var player = PlayersList[i];
            console.log("créé une var player contenant le nom : " + player);
            console.log("lance la function createvehicle avec les params : " + i + vehicleType + player);
            createAvehicle(i, vehicleType, player);
        }
    }
    // create a function able to return a random type of vehicle
    function RandomVehicle() {
        var numberBetween1and3 = Math.floor(Math.random() * Math.floor(3));
        if (numberBetween1and3 == 1) {
            return "Voiture";
        }
        if (numberBetween1and3 == 2) {
            return "Moto";
        }
        else {
            return "Camion";
        }
    }
    function createAvehicle(Index, VehicleType, Player) {
        if (VehicleType == "Voiture") {
            allVehiclesInRace[Index] = new class_Voiture_1.Voiture(Player);
        }
        if (VehicleType == "Camion") {
            allVehiclesInRace[Index] = new class_Camion_1.Camion(Player);
        }
        else {
            allVehiclesInRace[Index] = new class_Moto_1.Moto(Player);
        }
    }
    function SearchByName(Player) {
        for (var i = 0; i < playersList.length; i++) {
            if (allVehiclesInRace[i]._player_name == Player) {
                console.log("youhou j'ai trouvé");
                console.log(allVehiclesInRace[i].Info);
                return allVehiclesInRace[i];
            }
        }
    }
    var KyleVehicle = SearchByName("Kyle");
    KyleVehicle.addFuel(55);
    // END RANDOM VEHICLE
    ///////////////////////////////
    //// AESTHETIC INTERFACE //////
    ///////////////////////////////
    document.getElementById("rouler").addEventListener("click", function () {
        document.getElementById("p1").innerHTML = "LETS GO !!  ";
    });
});
