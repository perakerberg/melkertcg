import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../character';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    @Input() character: Character;

    public zoom: boolean;
    public get classes(): string[] {
        return this.character ? this.character.classes.concat(this.zoom ? ['zoom'] : []) : [];
    }

    constructor() { }


    ngOnInit() {
    }

}
