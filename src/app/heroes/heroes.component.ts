import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';


@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    /* hero = "Windstrom";*/
    /* array 
    hero: Hero = {
        id: 1,
        name: 'Windstrom'
    }; */
    /* heroes = HEROES; */
    heroes: Hero[];

    constructor(private heroService: HeroService) {
    }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }
}
