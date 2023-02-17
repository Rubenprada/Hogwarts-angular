import { LoadingService } from './../../services/loading/loading.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {


  public shouwldLoading$?: Observable<boolean>;

  constructor(
    private loadingService: LoadingService
  ) {}

  public ngOnInit(): void {
    this.shouwldLoading$ = this.loadingService.shouldShowLoading$;
  }
  
}
