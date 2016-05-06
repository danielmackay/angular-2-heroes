import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {Hero} from './hero';
import {HeroService} from './hero.service';
import {HeroDetailComponent} from './hero-detail.component';

@Component({
    selector: 'my-heroes',
    directives: [HeroDetailComponent],
    templateUrl: 'app/heroes.component.html',
    styleUrls:  ['app/heroes.component.css'],
})
export class HeroesComponent implements OnInit{
    selectedHero: Hero;
    heros:Hero[];
    
    constructor(
        private router: Router,
        private heroService: HeroService){}
    
    ngOnInit(){
        this.getHeroes();
    }
    
    getHeroes(){
        this.heroService.getHeroesSlowly().then(heros => this.heros = heros);
    }
    
    onSelect(hero: Hero){
        this.selectedHero = hero;
    }
    
    gotoDetail(){
        this.router.navigate(['HeroDetail', {id: this.selectedHero.id}]);
    }
}