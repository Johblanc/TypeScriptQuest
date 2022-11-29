

import { Weapon } from "./weapon";

export class Hero{
    private name : string
    private power : number
    private life : number
    weapon : Weapon;
    constructor(name:string, power:number,life:number){
        this.name = name;
        this.power = power;
        this.life = life;
    }
    /**Attaque un ennemi */
    attack(opponent: Hero){
        opponent.setLife( opponent.getLife() - (this.getPower() + this.weapon.damage));
        //console.log(`${this.getName()} attaque ${opponent.getName()}, il lui reste ${opponent.getLife()} pv`);
        
    }

    isAlive(){
        return this.getLife() > 0;
    }

    setName(value : string){
        this.name = value
    }

    getName(){
        return this.name
    }

    setPower(value : number){
        this.power = value
    }

    getPower(){
        return this.power
    }

    setLife(value : number){
        this.life = value
    }

    getLife(){
        return this.life
    }
}