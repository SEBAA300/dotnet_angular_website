import { Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  key: string="User";
  username: string="";
  onclick(newName: string){ 
    this.username = newName; 
    localStorage.setItem(this.key, newName);
  }

  getName(){
    return localStorage.getItem("User");
  }
}
