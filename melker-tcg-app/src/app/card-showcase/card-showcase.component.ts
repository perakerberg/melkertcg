import { Component, OnInit } from '@angular/core';
import { Character } from '../character';

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
                'nature', 'pickle', './assets/random-pickle-guy.png'),

            new Character('Failed genetically modified pickle', 1,
                'It´s a failed experiment where they tried to genetically modify a pickle.',
                // tslint:disable-next-line:max-line-length
                'When on the same field, the first card deployed of "Cucumber" and this card is given to opponent. If deployed at the same time, both die.',
                'nature', 'pickle', './assets/failed-genetically-modified-pickle.png'),


            new Character('Cucumber', 1, 'It´s the cutest darn cucumber in the world!',
                'When on the same field, the first card deployed of "Gen. mod. pickle" and this card is given to opponent. '
                + 'If deployed at the same time, both die.',
                'nature', 'pickle', './assets/cucumber.png'),

            new Character('Genetically modified pickle', 5, 'Genetically modified to perfection! This monstrous pickle is 39m high and 10m wide. So perfect, it doesn´t even have lumps.',
                'For every creature in the field with "Pickle" in its name, this creature gains +25 HP. To use it, one "Pickle" card must be sacrificed.',
                'nature', 'pickle', './assets/genetically-modified-pickle.png'),
        ];


    }

    ngOnInit() {

    }
}

