import {Component} from "angular2/core";
import { ClubTab } from "./../tabs/club-tab";
@Component({
    selector: 'club-app',
    directives:[ClubTab],
    template:
    `<div>
        Welcome to CubApp
        <club-tab></club-tab>
    </div>
    `
})
export class ClubApp{
    constructor(){
        
    }
}