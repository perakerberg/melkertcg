import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Character, CharacterType, Archetype } from '../character';

@Component({
    selector: 'app-card-showcase',
    templateUrl: './card-showcase.component.html',
    styleUrls: ['./card-showcase.component.scss']
})

export class CardShowcaseComponent implements OnInit {

    public characters: Character[] = [];

    constructor() {

        this.characters = [
            new Character('Pickle', 2, 'It´s a salty and crunchy monster.',
                'You can swap this creature with any other creature with "pickle" in its name that is in your hand.',
                'nature', 'pickle', './assets/pickle.png'),

            new Character('Random pickle Guy', 2, 'This is "Pickle´s" biggest fan. Or just a guy sellin´ pickles.',
                'If this card is with "Pickle" on your field, both creatures gain 50 HP.',
                'nature', 'pickle', './assets/random-pickle-guy.png')
        ];


    }

    ngOnInit() {

    }
}

