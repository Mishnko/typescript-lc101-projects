import { Astronaut } from "./Astronaut";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: string[];
    astronauts: string[];

    constructor(name: string, totalCapacityKg: number);
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;

    sumMass(items: Payload[]): number{ // payload is making sure these are numbers 
        // for each item in payload[]
        // add them together

    }

    currentMassKg(): number {
        // return the combined mass of astronauts and cargo items
        let totalMass:number = 0 ;

    }

    canAdd(item: Payload): boolean {

    }

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd === true) {
            return true;
        } else if (this.canAdd === false) {
           return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd === true) {
            return true;
        } else if (this.canAdd === false) {
           return false;
        }
    }
}


// let astronauts: Astronaut[] = [
//     new Astronaut(75, 'Mae'), massKg and name
//     new Astronaut(81, 'Sally'),massKg and name
//     new Astronaut(99, 'Charles')massKg and name
//  ];

// let cargo: Cargo[] = [
//     new Cargo(3107.39, "Satellite"),     massKg and material
//     new Cargo(1000.39, "Space Probe"),   massKg and material
//     new Cargo(753, "Water"),             massKg and material
//     new Cargo(541, "Food"),              massKg and material
//     new Cargo(2107.39, "Tesla Roadster"),massKg and material
//  ];
 