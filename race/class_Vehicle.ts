//*****************TODO    CREATE THE MASTER CLASS  */
/*
MUST CONTAIN 3 ATTRIBUTES 
- TYPE = CAN ONLY HAVE 3 OPTIONS (moto voiture camion)
- FuelTank_Capacity = can be 30 50 200 according to object type
- fuel level = have a min value and a max value that can't be exceed
*/

//******************************************************************** */
//************************CLASS VEHICLE BEGIN************************* */
//******************************************************************** */

export class Vehicle
{
//*************ATTRIBUTES********** */
static raceTotalDistance : number = 20;
static raceIsOver : boolean = false;
protected _victory : boolean = false;


protected _type : string ="Voiture";
protected _fuelTankCapacity : number = 50;
protected _consommation : number = 10;
protected _vitesse_max : number = 180;
protected _player_name : string = "";
protected _fuelLevel : number = 0;
protected _distance_parcourue : number = 0;
protected _vitesse_actuelle : number = 0;
protected _horn : string = "";
protected _refreshRate : number = 1000;



    constructor()
    {
        console.log("///// correctly created a vehicule and get acces to all attributes")
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
            
            console.log(this._horn);
        }
        
    }

    
    ////////////////////////////////
    /////// DEFINE METHOD ROULER ///
    ////////////////////////////////
    //****************************************************************************************************** */
    // This method take a boolean argument to define if the conditions are good to launch the "divre phase"
    //****************************************************************************************************** */
    rouler(statut:boolean)
    {
        let timer;
        if(statut == true)// If conditions to drive are good, we enter the Method
        {
            timer = setInterval((()=>// each second (1000ms), this block is called till we stop "ROULER"
            {
                this._vitesse_actuelle = this.Accelerate();  // is a method that will increase the speed each cycle till the max speed is reached 
                this._consommation = this.Consuming(); // is a method that return the fuel consuming ratio accordingly to the accelerate ratio
                this._distance_parcourue = this.Distance(); // Calculate the travelled distance each time the Interval is refreshed

            }), this._refreshRate);
            
            
        }else{
            clearInterval(timer)
        }
        

    }
    ////////////////////////////////////
    //////ACCELERATE METHOD/////////////
    ////////////////////////////////////// is a method that will increase the speed each cycle till the max speed is reached 
    Accelerate():number
        {
            if (this._vitesse_actuelle < this._vitesse_max)
                    {
                        return 10;
                    }else{
                        return 0
                    }
        }

    ////////////////////////////////////
    //////CONSUMMING METHOD/////////////
    ////////////////////////////////////// is a method that return the fuel consuming ratio accordingly to the accelerate ratio   
    Consuming():number
        {
            if (this._vitesse_actuelle > 0 && this._vitesse_actuelle < 50)
            {
                return this._consommation/2;
            }
            if (this._vitesse_actuelle >= 50 && this._vitesse_actuelle < 100)
            {
                return 6;
            }
            else 
            {
                return 10;
            }
            
        }

    ////////////////////////////////////
    //////DISTANCE METHOD///////////////
    //////////////////////////////////// / is a method that determinate the traveled distance by second and adapt to the timer's refresh rate  
    Distance():number
        {

            return this._vitesse_actuelle/3600 * (this._refreshRate/1000);
        } 
        
        
}