import { Hero } from "./hero";
import { HeroAxe } from "./heroAxe";
import { Weapon } from "./weapon";
export class HeroSpear extends Hero {
    constructor(name:string, power:number,life:number){
        super(name, power,life);
        this.weapon = new Weapon("sword",5);
    }
    attack(opponent: Hero){
        if (opponent instanceof HeroAxe){
            super.attack(opponent);  // Merci Jeff pour cette methode
        }
        super.attack(opponent);
    }
}