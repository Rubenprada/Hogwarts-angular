import { houses } from './../../core/services/characters/characters.data';
import { House } from './../../core/services/characters/api/api-characters.model';
import { ApiHomes } from './../../core/services/houses/api/api-homes.models';
import { Character } from './../../core/services/characters/character.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  //filtro para buscar por personaje o por el tipo de casa
  transform(value: Character[] | null, name: string = '', house?: House): Character[] {
    //si no hay valor no retorna nada
    if(!value) {return[]}
    //si no hay nombre ni casa retorna el valor
    if(!name && !house) {return value;}
    //si no, hacemos filter buscando que el nombre del personaje incluya el nombre que buscamos
    //y el nombre de la casa sea igual
    return value.filter((character) => {
      return character.name.toLowerCase().includes(name)
        && (character.house.name === house || !house)
    })
  }

}
