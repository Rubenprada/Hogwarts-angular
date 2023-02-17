import { House } from '../../characters/api/api-characters.model';


//interfaz para las casas
export interface ApiHomes {
    id: string;
    //usamos el tipo de la enum
    name: House;
    image: string;
    description: string;
    founder: string;
    color: string;
    createdAt: string;
}