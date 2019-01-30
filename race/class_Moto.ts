import {Vehicle} from "./class_Vehicle";



export class Moto extends Vehicle
{

    
    
    

constructor(player_name : string)
    {
        super()
        this._player_name = player_name;
        this._type = "Moto";
        this._fuelTankCapacity = 30;
        this._consommation = 18;
        this._vitesse_max = 220;
        this._fuelLevel = 30;
        this._distance_parcourue = 0;
        this.Info;
        
        
        console.log("\n*****GREAT ! you've created a "+this._type+" object*****"+"\n")
        
        console.log(" You've also assigned the player " +this._player_name+" as the driver.\n"
                    +"*************************************************************************\n")
    }

    get type():string
    {
        return this._type;
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

    addFuel(amount:number)
    {
        console.log("// I'm the 'Void method' in the '_Voiture' Class, you've called me to add "+amount+"L in the Fuel Tank.\n")
        let actualAmount = this._fuelLevel;
        let maxAmount = this._fuelTankCapacity;
        
        if(actualAmount+amount<=maxAmount)
            {
                this._fuelLevel += amount;
                console.log("ALRIGHT ! i've added "+amount+"L to the Fuel Tank, actual Level is now "+this._fuelLevel+"L.\n")
            }else{
                let maxAdd = maxAmount - actualAmount;
                let overFuel = amount - maxAdd;

                this._fuelLevel += maxAdd
                console.log("UNABLE TO PUT "+amount+"L in the Fuel Tank, ONLY PUT "+maxAdd+"L in it. you saved "+overFuel+"L ;) .")
            }
        
        if(this._fuelLevel == this._fuelTankCapacity){
            this.hornOnMaxFuel();
        }
        
    }

    get FuelTankCapacity()
    {
        return this._fuelTankCapacity;
    }
    get fuelLevel()
    {
        return this._fuelLevel;
    }


    hornOnMaxFuel()
    {
        
        
            console.log("FULL FILLED FUEL TANK !!! TUUUUT TUUUUUT !!!")
        
        
        
        
    }
    VehicleByPlayer(Player:string)
    {
        
        if(Player==this._player_name)
        {
            console.log("J'ai trouvé le vehicule de "+Player+", le voici.");
            console.log(this);
            return this;
        }
    }

}
