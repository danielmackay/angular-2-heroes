import {Injectable} from '@angular/core';

import {Hero} from '../models/hero';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService{
  
  getHeroes(){
    return Promise.resolve(HEROES);
  }
  
  // See the "Take it slow" appendix
  getHeroesSlowly() {
    return new Promise<Hero[]>(resolve =>
      setTimeout(()=>resolve(HEROES), 500) // 1 second
    );
  }
  
  getHero(id: number){
    return Promise.resolve(HEROES)
      .then(heroes => heroes.filter(hero => hero.id === id)[0]);
  }
}