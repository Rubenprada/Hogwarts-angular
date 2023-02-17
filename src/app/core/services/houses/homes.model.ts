import { House } from './../characters/api/api-characters.model';


export interface Homes {
    id?: string;
    //usamos el tipo de la enum
    name: House;
    image?: string;
    description?: string;
    founder?: string;
    color?: string;
}