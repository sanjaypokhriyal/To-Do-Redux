import { Component,ElementRef } from '@angular/core';
import {NgRedux} from "@angular-redux/store"
import { IAppState, rootReducer, INITIAL_STATE } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Redux';
  constructor(private ngRedux:NgRedux<IAppState>){
    ngRedux.configureStore(rootReducer,INITIAL_STATE);
  }
}
