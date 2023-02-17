import { Homes } from './../houses/homes.model';



//interfaz con los datos que usamos solo
export interface Character {
    id: string;
    name: string;
    actor: string;
    gender: string;
    house: Homes;
    image: string;
    hogwartsStaff: boolean;
    hogwartsStudent: boolean;
    alive: boolean;
    dateOfBirth: string | null;

}