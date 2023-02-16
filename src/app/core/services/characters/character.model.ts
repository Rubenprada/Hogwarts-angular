import { House } from './api/api-characters.model';


//interfaz con los datos que usamos solo
export interface Character {
    id: string;
    name: string;
    actor: string;
    gender: string;
    house: House;
    image: string;
    hogwartsStaff: boolean;
    hogwartsStudent: boolean;
    alive: boolean;
    dateOfBirth: string | null;

}