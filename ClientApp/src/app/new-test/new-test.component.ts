import { Component} from "@angular/core";

@Component({
    selector: 'app-new-test',
    templateUrl: './new-test.component.html'
})
export class NewTestComponent{
    public count = 0;

    public inCount(){
        this.count++;
    }

    getName(){
        return localStorage.getItem("User");
    }
}