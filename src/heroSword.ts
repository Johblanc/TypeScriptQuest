import { Hero } from "./hero";
import { HeroSpear } from "./heroSpear";
import { Weapon } from "./weapon";
export class HeroSword extends Hero {
    constructor(name:string, power:number,life:number){
        super(name, power,life);
        this.weapon = new Weapon("sword",5);
    }
    attack(opponent: Hero){
        if (opponent instanceof HeroSpear){
            console.log("critique")
            super.attack(opponent);  // Merci Jeff pour cette methode
        }
        super.attack(opponent);
    }
}