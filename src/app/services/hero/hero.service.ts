import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from 'src/app/model/hero';
import { HEROES } from 'src/app/model/mock-heroes';
import { MessageService } from '../message/message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageServ: MessageService) { }

  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES);
    this.messageServ.add('ciao, sono l\'hero service e ho caricato gli eroi');
    return heroes;
  }
}
