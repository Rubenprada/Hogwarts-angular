import { ApimySoon } from '../../../../core/services/mySoons/api/api-mySoons.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-soons-view',
  templateUrl: './soons-view.component.html',
  styleUrls: ['./soons-view.component.scss']
})
export class SoonsViewComponent {

  //pasamos la info con el input de los soons
  @Input() public soon?: ApimySoon;
  //mandamos la informacion al componente padre
  @Output() public onRemove: EventEmitter<void> = new EventEmitter<void>();
  //mandamos otra informacion al padre
  @Output() public onSend: EventEmitter<void> = new EventEmitter<void>();

  public removeSoon() {
    this.onRemove.emit()
  }

  public sendSoon() {
    this.onSend.emit()
  }

}
