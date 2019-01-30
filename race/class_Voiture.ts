import {Vehicle} from "./class_Vehicle";



export class Voiture extends Vehicle
{

    
    
    

constructor(player_name : string)
    {
        super()
        this._player_name = player_name;
        this._type = "Voiture";
        this._fuelTankCapacity = 50;
        this._consommation = 10;
        this._vitesse_max = 180;
        this._fuelLevel = 50;
        this._distance_parcourue = 0;
        this._horn = "TUUUT TUUUUUT";
        this.Info;
        
        
        console.log("\n*****GREAT ! you've created a "+this._type+" object*****"+"\n")
        
        console.log(" You've also assigned the player " +this._player_name+" as the driver.\n"
                    +"*************************************************************************\n")
    }

    get type():string
    {
        return this._type;
    }

    get player_Name():string
    {
        return this._player_name
    }


    get Info()
        {
            return console.log
                (
                "Vehicle Type : "+this._type+
                "\n Driver's Name : " +this._player_name+
                "\n Fuel Capacity : " +this._fuelTankCapacity+
                "\n Fuel Level : "+this._fuelLevel+
                "\n Traveled Distance : " +this._distance_parcourue
                );
        }

    

    get FuelTankCapacity()
    {
        return this._fuelTankCapacity;
    }
    get fuelLevel()
    {
        return this._fuelLevel;
    }


    

    VehicleByPlayer(Player:string):any
    {
        if(Player==this._player_name)
        {
            console.log("J'ai trouvé le vehicule de "+Player+", le voici.")
            console.log(this);
            return this;
        }
    }


}






