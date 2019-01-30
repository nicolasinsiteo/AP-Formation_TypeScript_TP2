import {Voiture} from "./class_Voiture";
import {Moto} from "./class_Moto";
import {Camion} from "./class_Camion";


// create a new car and add 55L of fuel
let gt = new Voiture("roger");

console.log("gt.type = "+ gt.type+"\n");
console.log("// AUTO DEFINED VALUE in '_Vehicle' Class // gt fuelTank capacity = " + gt.FuelTankCapacity+"\n")
console.log("// AUTO DEFINED DEFAULT VALUE in '_Vehicle' Class // gt fuelLevel = " + gt.fuelLevel+"\n")


gt.addFuel (55);
console.log("gt fuelLevel = " + gt.fuelLevel)
gt.Info;
// END CREATE A NEW CAR


// CREATE A PLAYERS ARRAY

let playersList : Array<string> = ["Jack", "Joe", "Joshua", "Kyle", "Ethan", "Lucian", "Anthea", "Gorhk"];

// CREATE A VEHICLE FOR EACH PLAYER ARRAY
let allVehiclesInRace : Array<any> = [];


// Create a function able to create a vehicle for each player in the Player list
GiveAVehicleToAllPlayers(playersList)

let test = allVehiclesInRace[1];
test.addFuel (250);
gt.Info;
gt.Info;

console.log(test);
console.log(gt);


// FUNCTIONS

// FUNCTION TO GIVE A VEHICLE TO ANY PLAYERS IN THE PLAYERS LIST
function GiveAVehicleToAllPlayers(PlayersList:Array<string>)
{
    for(let i:number=0; i<PlayersList.length; i++)
    {
        console.log("Create vehicle N°"+i+".")
        let vehicleType = RandomVehicle() ;
           
        console.log("\n*****************************************************\n"+
                    "créé une var random : "+vehicleType);
        let player = PlayersList[i];
        console.log("créé une var player contenant le nom : "+player);
        console.log("lance la function createvehicle avec les params : "+i+vehicleType+player);
        createAvehicle(i,vehicleType,player)
        

    }
}

// create a function able to return a random type of vehicle
function  RandomVehicle():string
{
    let numberBetween1and3 = Math.floor(Math.random()*Math.floor(3));
    if(numberBetween1and3 == 1)
    {
        return "Voiture";
    }
    if(numberBetween1and3 == 2)
    {
        return "Moto";
    }else{
        return "Camion";
    }
}

function createAvehicle(Index:number,VehicleType:string,Player:string)
{
    
    if(VehicleType=="Voiture")
    {
        allVehiclesInRace[Index] = new Voiture(Player);
    } 
    if(VehicleType=="Camion")
    {
        allVehiclesInRace[Index] = new Camion(Player);
    }else{
        allVehiclesInRace[Index] = new Moto(Player);
    }
    

}

function SearchByName(Player:string):any
{
    for(let i=0; i<playersList.length;i++)
    {
        if(allVehiclesInRace[i]._player_name == Player)
        {
            console.log("youhou j'ai trouvé");
            console.log(allVehiclesInRace[i].Info )
            return allVehiclesInRace[i];
        }

    }
}


let KyleVehicle = SearchByName("Kyle");

KyleVehicle.addFuel(55);
// END RANDOM VEHICLE


let gorhksCar = new Voiture("Gorhk");

///////////////////////////////
//// AESTHETIC INTERFACE //////
///////////////////////////////
let vroum : boolean = false;
document.getElementById("rouler").addEventListener("click", function(){
    
    if(vroum == false)
    {
    vroum = true
    document.getElementById("p1").innerHTML = "LETS GO !!  ";

    gorhksCar.rouler(vroum);

    }else{
        vroum = false
        gorhksCar.rouler(vroum);
    }

  }); 

