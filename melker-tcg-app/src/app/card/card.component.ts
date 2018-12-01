import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../character';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    @Input() character: Character;
    constructor() { }

    ngOnInit() {
    }

}
