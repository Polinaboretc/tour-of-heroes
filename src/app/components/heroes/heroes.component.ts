import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { HeroService } from 'src/app/services/hero/hero.service';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  // hero: Hero = {
  //   name: 'Windstorm',
  //   id: 1
  // }

  // selectedHero?: Hero;

  heroes: Hero[] = [];

  constructor(private heroServ: HeroService) {}

  ngOnInit(): void {
    this.getHeroes()
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageServ.add(`hanno selezionato l\'eroe con id = ${this.selectedHero.id}`);

  // }

  getHeroes(){
    this.heroServ.getHeroes().subscribe({
      next: newHeroes => this.heroes = newHeroes,
      error: err => console.log(err)
    })
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroServ.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void{
    this.heroServ.deleteHero(hero.id).subscribe({
      next: (hero) => this.heroes = this.heroes.filter(h => h.id !== hero.id),
      error: (err) => console.log(err)
    });
  }
}
