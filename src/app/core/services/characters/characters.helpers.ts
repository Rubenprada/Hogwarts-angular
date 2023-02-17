
import { Character } from './character.model';
import { Homes } from './../houses/homes.model';

import { ApiCharacter } from './api/api-characters.model';

//función para no repetir código, a la hora de eliminar elementos
export function transformCharacter(apiCharacter: ApiCharacter, hasHouse?: Homes): Character {
    delete apiCharacter.ancestry;
    delete apiCharacter.alternate_actors;
    delete apiCharacter.species;
    delete apiCharacter.yearOfBirth;
    delete apiCharacter.ancestry;
    delete apiCharacter.eyeColour;
    delete apiCharacter.hairColour;
    delete apiCharacter.wand;
    delete apiCharacter.patronus;
    return {
        ...apiCharacter,
        house: hasHouse
            ? hasHouse
            : { name: apiCharacter.house}
    }
}