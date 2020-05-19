import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'modular-app';
  showUiM: boolean = false;
  showModA: boolean;
  constructor(private _router: Router) {

  }
  loadlUiM() {
    this._router.navigate(['uiM']);
  }
  loadlModA() {
    this._router.navigate(['modA']);
  }
}
