import { Component, Injectable } from '@angular/core';
import {Router} from '@angular/router';
import{Store} from '../store';

@Component({
  selector: 'app-bar',
  styles: [`
    .app-bar {
      height: 65px;
      padding: 5px 30px;
      background-color: #00BCD4;
    }
    .logo {
      color: white;
      font-size: 30px;
      font-weight: 300;
      cursor: pointer;
    }
    .link {
      color: white;
      font-size: 24px;
      font-weight: 400;
      cursor: pointer;
    }
  `],
  template: `
    <header class="app-bar row middle-xs">
      <span [routerLink]="['']" class="logo col-xs-10">
        Retain
      </span>
      <nav class="col-xs-2">
        <div class="row middle-xs between-xs">
          <span [routerLink]="['', 'about']" class="link">About</span>
          <span class="link">
              <a (click)="signout()" class="btn-light link"><i class="material-icons">exit_to_app</i></a>
          </span>
        </div>
      </nav>
    </header>
  `
})

@Injectable()
export class AppBar {
  JWT_KEY: string = 'retain_token';

  constructor(private store:Store,private router:Router){
  }

  signout() {
    window.localStorage.removeItem(this.JWT_KEY);
    this.store.purge();
    this.router.navigate(['', 'auth']);
  }
}
