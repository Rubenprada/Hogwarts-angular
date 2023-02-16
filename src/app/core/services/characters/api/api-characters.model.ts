//creamos interfaz de los personajes que nos van a venir de la api
export interface ApiCharacter {
    id: string;
    name: string;
    alternate_names?: string[];
    species?: string;
    gender: string;
    //vamos a asociarlo con datos mokeados
    house: House;
    //doble tipado o uno o otro, asi no pongo un any(nunca poner any)
    dateOfBirth: string | null;
    yearOfBirth?: number | null;
    wizard?: boolean;
    ancestry?: string;
    eyeColour?: string;
    hairColour?: string;
    wand?: {};
    patronus?: string;
    hogwartsStudent: boolean;
    hogwartsStaff: boolean;
    actor: string;
    alternate_actors?: string[];
    alive: boolean;
    image: string;
};

//casas
export type House = 'Gryffindor'
| 'Slytherin'
| 'Hufflepuff'
| 'Ravenclaw'
| '';

