import { Router } from '@angular/router';
import { Homes } from './../../../../core/services/houses/homes.model';
import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent {

  @Input() public house?: Homes;
  
  //variable para imagenes, no me permite la app con las de la mockapi por origenes cruzados
  public imgGryff: string ='https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fesharrypotter%2Fimages%2Fa%2Fa3%2FGryffindor_Pottermore.png%2Frevision%2Flatest%3Fcb%3D20140922195249&imgrefurl=https%3A%2F%2Fharrypotter.fandom.com%2Fes%2Fwiki%2FGryffindor&tbnid=fGETcJZ1280jqM&vet=12ahUKEwjnp4yKoZv9AhW4XqQEHU1HCy4QMygLegUIARD6AQ..i&docid=IQkLhrh2ajr5wM&w=217&h=238&q=gryffindor%20escudo&ved=2ahUKEwjnp4yKoZv9AhW4XqQEHU1HCy4QMygLegUIARD6AQ';
  public imgSlyt: string = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F475%2F662%2Fpng-transparent-draco-malfoy-harry-potter-and-the-philosopher-s-stone-sorting-hat-slytherin-house-harry-potter.png&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fes%2Fsearch%3Fq%3Dcasa%2Bde%2BSlytherin&tbnid=MatB9UUsQ-J3kM&vet=12ahUKEwjy44TOnpv9AhUOsCcCHaOKB8AQMygNegUIARDYAQ..i&docid=LSr-G2ns07NobM&w=920&h=750&q=escudo%20slytherin&hl=es&ved=2ahUKEwjy44TOnpv9AhUOsCcCHaOKB8AQMygNegUIARDYAQ';


  constructor(
    private router: Router
  ) {}

}
