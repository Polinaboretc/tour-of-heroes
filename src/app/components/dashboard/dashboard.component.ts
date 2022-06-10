import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { HeroService } from 'src/app/services/hero/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  heroes: Hero[] = []

  constructor(private heroServ: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(){
    this.heroServ.getHeroes().subscribe({
      next: (eroi) => this.heroes = eroi.slice(1, 5),
      error: (err) => console.log(err)
    })
  }

}
