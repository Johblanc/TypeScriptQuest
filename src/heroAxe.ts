import { Hero } from "./hero";
import { HeroSword } from "./heroSword";
import { Weapon } from "./weapon";



export class HeroAxe extends Hero {
    constructor(name:string, power:number,life:number){
        super(name, power,life);
        this.weapon = new Weapon("axe",5);
    }
    
    attack(opponent: Hero){
        if (opponent instanceof HeroSword){
            super.attack(opponent);  // Merci Jeff pour cette methode
        }
        super.attack(opponent);
    }
}
