/*
import { level1 } from "./level1";
import { level2 } from "./level2";
import { level3 } from "./level3";


let message: string = 'Hello World !';
console.log(message);


level1()
level2()
level3()*/

import { Hero } from "./hero";
import { HeroAxe } from "./heroAxe";
import { HeroSpear } from "./heroSpear";
import { HeroSword } from "./heroSword";

let simpleRick = new Hero("simpleRick",10,100);
let simpleJack = new Hero("simpleJack",10,100);
let axeBob = new HeroAxe("axeBob",10,100);
let swordWill = new HeroSword("swordWill",10,100);
let spearBill = new HeroSpear("spearBill",10,100);

let heroA = simpleRick
let heroB = spearBill

while (heroA.isAlive() && heroB.isAlive()){
    heroA.attack(heroB);
    heroB.attack(heroA);
    console.log(heroA.getName(),"-->",heroA.getLife(),"VS",heroB.getLife(),"<--", heroB.getName());
    
}

if (heroA.isAlive()){
    console.log(`${heroA.getName()} wins`);
} else if (heroB.isAlive()){
    console.log(`${heroB.getName()} wins`);
} else {
    console.log(`It's a draw`);
    
}
